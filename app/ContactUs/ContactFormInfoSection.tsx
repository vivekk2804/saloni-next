"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import Gmap from "@/components/Gmap";
import Heading from "@/components/Heading";
import { useContactInfo } from "@/hooks/useContactInfo";
import { submitContactUs } from "@/services/contactApi";

type ContactFormValues = {
  username: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const contactValidationSchema = Yup.object({
  username: Yup.string().trim().required("Name is required"),
  email: Yup.string()
    .trim()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: Yup.string()
    .trim()
    .matches(/^[0-9+\-\s()]{7,20}$/, "Enter a valid phone number")
    .required("Phone is required"),
  subject: Yup.string().trim().required("Subject is required"),
  message: Yup.string().trim().required("Message is required"),
});

const ContactFormInfoSection = () => {
  const { data, loading, error } = useContactInfo();

  const fieldClass =
    "h-[50px] w-full text-black border-0 bg-[var(--color-background)] my-3 px-3 text-[13px] text-[var(--color-foreground)] placeholder:text-[var(--color-foreground)] focus:bg-[#f8f8f8] focus:outline-none";

  const formik = useFormik<ContactFormValues>({
    initialValues: {
      username: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema: contactValidationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const payload = {
          name: values.username.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
        };

        const result = await submitContactUs(payload);

        resetForm();
        alert(result.message || "Message sent successfully");
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "Something went wrong";
        alert(message);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <Gmap />

      <section className="bg-[#fff6ef] px-0 py-[80px] max-[767px]:py-[30px]">
        <div className="mt-[-35px]">
          <Heading subtitle="Contact Us" title="Get In Touch" bgTitle="Form" />
        </div>

        <div className="container mx-auto">
          <div className="mx-auto max-w-[1140px] px-4">
            {/* FORM */}
            <form className="mx-auto" onSubmit={formik.handleSubmit}>
              <div className="grid grid-cols-1 gap-x-[30px] mt-[-50px] sm:mt-0 md:grid-cols-2 text-black">
                <div>
                  <input
                    name="username"
                    className={`${fieldClass} placeholder:text-black text-black`}
                    placeholder="Name"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.username && formik.errors.username ? (
                    <p className="mt-1 text-xs text-red-600">
                      {formik.errors.username}
                    </p>
                  ) : null}
                </div>

                <div>
                  <input
                    name="email"
                    className={`${fieldClass} placeholder:text-black text-black`}
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <p className="mt-1 text-xs text-red-600">
                      {formik.errors.email}
                    </p>
                  ) : null}
                </div>

                <div>
                  <input
                    name="phone"
                    className={`${fieldClass} placeholder:text-black text-black`}
                    placeholder="Phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                    <p className="mt-1 text-xs text-red-600">
                      {formik.errors.phone}
                    </p>
                  ) : null}
                </div>

                <div>
                  <input
                    name="subject"
                    className={`${fieldClass} placeholder:text-black text-black`}
                    placeholder="Subject"
                    value={formik.values.subject}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.subject && formik.errors.subject ? (
                    <p className="mt-1 text-xs text-red-600">
                      {formik.errors.subject}
                    </p>
                  ) : null}
                </div>
                <div className="md:col-span-2">
                  <textarea
                    name="message"
                    className="min-h-[120px] w-full border-0 bg-[var(--color-background)] px-3 py-3 text-[13px] text-black placeholder:text-black"
                    placeholder="Message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.message && formik.errors.message ? (
                    <p className="mt-1 text-xs text-red-600">
                      {formik.errors.message}
                    </p>
                  ) : null}
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={formik.isSubmitting}
                    className="bg-[#541f5c] px-[40px] py-[15px] text-white hover:bg-[#dfba9f] hover:text-black transition">
                    {formik.isSubmitting ? "Submitting..." : "Submit Now"}
                  </button>
                </div>
              </div>
            </form>

            {/* CONTACT INFO */}
            <div className="mt-[30px]">
              <Heading
                subtitle="Contact info"
                title="Our Full Info"
                bgTitle="Info"
              />

              <div className="border-[8px] border-[#494949] bg-[#fff6ef] p-5 mt-[-30px] sm:mt-0">
                {loading ? (
                  <p className="text-center">Loading...</p>
                ) : error ? (
                  <p className="text-center text-red-600">{error}</p>
                ) : (
                  <div className="grid grid-cols-1 gap-x-[30px] space-y-5 sm:space-y-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* PHONE */}
                    <div className="min-w-0">
                      <h4 className="mb-[10px] font-yeseva text-[22px] text-black text-[#541f5c]">
                        Phone number
                      </h4>

                      {data.phone ? (
                        <p className="break-words text-black">
                          <a className="break-all" href={`tel:${data.phone}`}>
                            {data.phone}
                          </a>
                        </p>
                      ) : (
                        <p className="text-black">No phone available</p>
                      )}
                    </div>

                    {/* EMAIL */}
                    <div className="min-w-0">
                      <h4 className="mb-[10px] font-yeseva text-[22px] text-[#541f5c]">
                        Email address
                      </h4>

                      {data.email ? (
                        <p className="break-words text-black">
                          <a
                            className="break-all"
                            href={`mailto:${data.email}`}>
                            {data.email}
                          </a>
                        </p>
                      ) : (
                        <p className="text-black ">No email available</p>
                      )}
                    </div>

                    {/* ADDRESS */}
                    <div className="min-w-0">
                      <h4 className="mb-[10px]  font-yeseva text-[22px] text-[#541f5c]">
                        Address info
                      </h4>

                      {data.address ? (
                        <p className="whitespace-pre-line break-words text-black">
                          {data.address}
                        </p>
                      ) : (
                        <p className="text-black">No address available</p>
                      )}
                    </div>

                    {/* HOURS (STATIC) */}
                    <div className="min-w-0">
                      <h4 className="mb-[10px]  font-yeseva text-[22px] text-[#541f5c]">
                        Opening Hours
                      </h4>

                      <ul className="text-black">
                        <li>Mon-Fri: 9 am - 6 pm</li>
                        <li>Saturday: 9 am - 4 pm</li>
                        <li>Sunday: Closed</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactFormInfoSection;
