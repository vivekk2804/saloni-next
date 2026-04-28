"use client";

import Image from "next/image";
import { useState } from "react";
import { submitContactUs } from "@/services/contactApi";

const fieldClass =
  "h-[50px] w-full border-0 bg-[#fff] px-[10px] py-[12px] text-[14px] sm:text-[13px] leading-[20px] text-[#495057] outline-none placeholder:text-[#111111]";

const Contactus = () => {
  const [submitting, setSubmitting] = useState(false);

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

      const result = await submitContactUs(payload);

      form.reset();
      alert(result.message || "Message sent successfully");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong";
      alert(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="w-full bg-[#fff6ef] px-4 py-[40px] sm:px-12 lg:px-8 lg:py-[82px] lg:mt-10">
      <div className="mx-auto max-w-[1140px]">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
          <div className="w-full lg:max-w-[540px]">
            <form onSubmit={handleSubmit} className="w-full">
              <div className="flex items-center gap-2">
                <p className="font-caveat text-[22px] sm:text-[34px] leading-none text-[#111111]">
                  Have Questions?
                </p>
                <span className="mt-1 h-px w-12 bg-[#f39db5]" />
                <Image
                  src="/images/sep-leaf-right.png"
                  alt=""
                  width={69}
                  height={71}
                  className="h-[30px] w-[28px] ml-[-20px] mb-3"
                />
              </div>

              <h2 className="mt-3 max-w-[640px] font-yeseva text-[22px] sm:text-[42px] leading-[1.02] text-[#541f5c]">
                Feel free to get in touch! contact now
              </h2>

              <div className="mt-7 grid grid-cols-1 gap-x-[24px] gap-y-5 md:grid-cols-2">
                <input
                  name="username"
                  type="text"
                  required
                  placeholder="Name"
                  className={fieldClass}
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  className={fieldClass}
                />
                <input
                  name="phone"
                  type="text"
                  required
                  placeholder="Phone"
                  className={fieldClass}
                />
                <input
                  name="subject"
                  type="text"
                  required
                  placeholder="Subject"
                  className={fieldClass}
                />
              </div>

              <textarea
                name="message"
                rows={4}
                placeholder="Message"
                className="mt-5 min-h-[120px] w-full resize-y border-0 bg-[#fff] px-4 py-3 text-[13px] text-[#495057] outline-none placeholder:text-[#111111]"
              />

              <button
                type="submit"
                disabled={submitting}
                className="relative mt-6 inline-flex font-semibold items-center justify-center bg-[#080b11] h-[50px] sm:max-w-70 max-w-60 w-full px-[15px]  py-[20px] text-[14px] font-inherit leading-none tracking-[1px] text-white transition-colors duration-300 hover:bg-[#541f5c]">
                {submitting ? "Sending..." : "Send us a message"}
              </button>
            </form>
          </div>

          <div className="relative mx-auto max-w-[300px] w-full mb-5 sm:max-w-[620] lg:max-w-[560px] mt-[-7px] lg:mt-[6px]">
            <div className="absolute -bottom-[40px] -left-[22px] lg:-left-[30px] right-[28px] top-[70px] sm:top-[99px] border-[14px] border-[#541f5c]" />

            <div className="relative z-10 aspect-square w-full overflow-hidden bg-white ml-[15px] lg:ml-[6px]">
              <Image
                src="/images/contact-img.jpg"
                alt="Hair styling session"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
