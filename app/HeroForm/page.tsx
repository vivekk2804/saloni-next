"use client";
import { useState } from "react";

const inputClassName =
  "h-[50px] w-full border-0 bg-[#fff6ef] px-3 py-[10px] text-[13px] leading-5 text-[#111] outline-none placeholder:text-[#666]";

export default function HeroFormPage() {
  // 1. Add state to manage whether the modal is open or closed
  const [isVisible, setIsVisible] = useState(true);

  // If it's not visible, don't render anything
  if (!isVisible) return null;

  return (
    <section
      /* 2. Changed 'bg-repeat' to 'bg-no-repeat' */
      className="fixed inset-0 z-[1000] flex items-center justify-center overflow-y-auto px-4 py-10 bg-cover bg-center bg-repeat bg-white"
      style={{ backgroundImage: "url('/images/add-bg.png')" }}>
      {/* CLOSE BUTTON */}
      <button
        type="button"
        aria-label="Close"
        onClick={() => setIsVisible(false)} /* 3. Added onClick handler */
        className="absolute right-6 top-6 z-20 text-[32px] font-medium leading-none text-black hover:text-gray-700">
        &times;
      </button>

      {/* MODAL BOX */}
      <div className="w-full max-w-[1000px] border-[10px] border-[#f4dcd4] bg-white p-[30px] shadow-[0_0_50px_rgba(0,0,0,0.1)]">
        {/* FORM */}
        <form className="cons-contact-form">
          <div className="mb-[30px]">
            <h3 className="mb-[30px] font-yeseva text-[30px] text-[#541f5c]">
              Get In Touch
            </h3>

            <div className="grid grid-cols-1 gap-x-[30px] md:grid-cols-2">
              <div className="mb-[25px]">
                <input
                  type="text"
                  required
                  className={inputClassName}
                  placeholder="Name"
                />
              </div>

              <div className="mb-[25px]">
                <input
                  type="email"
                  required
                  className={inputClassName}
                  placeholder="Email"
                />
              </div>

              <div className="mb-[25px]">
                <input
                  type="text"
                  required
                  className={inputClassName}
                  placeholder="Phone"
                />
              </div>

              <div className="mb-[25px]">
                <input
                  type="text"
                  required
                  className={inputClassName}
                  placeholder="Subject"
                />
              </div>

              <div className="mb-[25px] md:col-span-2">
                <textarea
                  rows={4}
                  className="w-full border-0 bg-[#fff6ef] px-3 py-[10px] text-[13px] leading-5 text-[#111] outline-none placeholder:text-[#666]"
                  placeholder="Message"
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="group inline-block overflow-hidden border-0 bg-[#541f5c] hover:bg-[#dfba9f] px-10 py-[15px] text-[14px] tracking-[1px]">
                  <span className="inline-block text-transparent transition-all duration-300 [text-shadow:0_0_0_#fff,_400px_0_0_#fff] group-hover:[text-shadow:-400px_0_0_#fff,_0_0_0_#fff]">
                    Submit Now
                  </span>
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* CONTACT INFO */}
        <div className="text-black">
          <h3 className="mb-[30px] font-yeseva text-[30px] text-[#541f5c]">
            Contact Info
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
            <div className="pb-10">
              <h5 className="font-yeseva text-[18px] text-[#541f5c]">
                Phone number
              </h5>
              <p className="text-[18px]">(456) 789 10 12</p>
            </div>

            <div className="pb-10">
              <h5 className="font-yeseva text-[18px] text-[#541f5c]">
                Email address
              </h5>
              <p className="text-[18px]">demo@gmail.com</p>
            </div>

            <div>
              <h5 className="font-yeseva text-[18px] text-[#541f5c]">
                Address info
              </h5>
              <p className="max-w-[320px] text-[18px]">
                55/11 Land Street, Modern New York City, USA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
