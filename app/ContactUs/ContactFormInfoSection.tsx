"use client";

import { useEffect, useState } from "react";
import Gmap from "@/components/Gmap";
import Heading from "@/components/Heading";

type ContactData = {
  phone: string;
  email: string;
  address: string;
};

const ContactFormInfoSection = () => {
  const [data, setData] = useState<ContactData>({
    phone: "",
    email: "",
    address: "",
  });

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const fieldClass =
    "h-[50px] w-full text-black border-0 bg-[var(--color-background)] my-3 px-3 text-[13px] text-[var(--color-foreground)] placeholder:text-[var(--color-foreground)] focus:bg-[#f8f8f8] focus:outline-none";

  // API CALL
  useEffect(() => {
    const fetchContact = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/contact/`);
        const result = await res.json();

        console.log("API RESPONSE:", result);

        const api = result?.data?.[0];

        setData({
          phone: api?.contact || "",
          email: api?.email || "",
          address: api?.address || "",
        });
      } catch (error) {
        console.error("API error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContact();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      const payload = {
        name: String(formData.get("username") || "").trim(),
        email: String(formData.get("email") || "").trim(),
        phone: String(formData.get("phone") || "").trim(),
        subject: String(formData.get("subject") || "").trim(),
        message: String(formData.get("message") || "").trim(),
      };

      const res = await fetch(`${process.env.NEXT_PUBLIC_API}/contact-us/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(result?.message || "Failed to submit contact form");
      }

      form.reset();
      alert(result?.message || "Message sent successfully");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong";
      alert(message);
    } finally {
      setSubmitting(false);
    }
  };

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
            <form className="mx-auto" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-x-[30px] mt-[-50px] sm:mt-0 md:grid-cols-2 text-black">
                <input
                  name="username"
                  required
                  className={`${fieldClass} placeholder:text-black text-black`}
                  placeholder="Name"
                />

                <input
                  name="email"
                  required
                  className={`${fieldClass} placeholder:text-black text-black`}
                  placeholder="Email"
                />

                <input
                  name="phone"
                  required
                  className={`${fieldClass} placeholder:text-black text-black`}
                  placeholder="Phone"
                />

                <input
                  name="subject"
                  required
                  className={`${fieldClass} placeholder:text-black text-black`}
                  placeholder="Subject"
                />
                <div className="md:col-span-2">
                  <textarea
                    name="message"
                    className="min-h-[120px] w-full border-0 bg-[var(--color-background)] px-3 py-3 text-[13px] text-black placeholder:text-black"
                    placeholder="Message"
                  />
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-[#541f5c] px-[40px] py-[15px] text-white hover:bg-[#dfba9f] hover:text-black transition">
                    {submitting ? "Submitting..." : "Submit Now"}
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
                ) : (
                  <div className="grid grid-cols-1 gap-x-[30px] space-y-5 sm:space-y-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* PHONE */}
                    <div>
                      <h4 className="mb-[10px] font-yeseva text-[22px] text-black text-[#541f5c]">
                        Phone number
                      </h4>

                      {data.phone ? (
                        <p>
                          <a className="text-black" href={`tel:${data.phone}`}>
                            {data.phone}
                          </a>
                        </p>
                      ) : (
                        <p className="text-black">No phone available</p>
                      )}
                    </div>

                    {/* EMAIL */}
                    <div>
                      <h4 className="mb-[10px] font-yeseva text-[22px] text-[#541f5c]">
                        Email address
                      </h4>

                      {data.email ? (
                        <p>
                          <a
                            className="text-black"
                            href={`mailto:${data.email}`}>
                            {data.email}
                          </a>
                        </p>
                      ) : (
                        <p className="text-black">No email available</p>
                      )}
                    </div>

                    {/* ADDRESS */}
                    <div>
                      <h4 className="mb-[10px]  font-yeseva text-[22px] text-[#541f5c]">
                        Address info
                      </h4>

                      {data.address ? (
                        <p className="whitespace-pre-line text-black">
                          {data.address}
                        </p>
                      ) : (
                        <p className="text-black">No address available</p>
                      )}
                    </div>

                    {/* HOURS (STATIC) */}
                    <div>
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
