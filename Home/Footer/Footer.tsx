"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { useContactInfo } from "@/hooks/useContactInfo";

export default function Footer() {
  const [isMounted, setIsMounted] = useState(false);
  const { data, loading, error } = useContactInfo();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  // console.log("currentYear", currentYear);

  return (
    <footer className="bg-[#171717] text-white text-left h-[375px]">
      {/* TOP */}
      <div className="pt-[50px] sm:pt-[50px]  pb-[-0px] bg-[#171717]">
        <div className="w-full max-w-[1140px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-[40px] lg:gap-[50px]">
            {/* LEFT - FULL WIDTH on tablet */}
            <div className="w-full lg:col-span-6">
              <div className="mb-5">
                <Image
                  src="/images/logo-light.png"
                  alt="logo"
                  width={130}
                  height={30}
                />
              </div>

              <p className="text-[14px] leading-[22px] lg:leading-[20px] text-[#fff] lg:mx-auto mb-4 max-w-[100%] lg:max-w-[520px]">
                Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do
                eiusmod temporin cididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.eiusmod tempo.
              </p>

              {/* <div className="flex w-full lg:max-w-[520px] bg-[#111]">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="flex-1 h-[50px] bg-transparent px-4 text-[14px] text-white outline-none placeholder:text-[#777]"
                />
                <button className="h-[50px] px-7 bg-[#dfba9f] text-black text-[14px] font-medium hover:bg-[#541f5c] hover:text-[#fff] transition">
                  Subscribe
                </button>
              </div> */}
            </div>

            {/* BOTTOM ROW (Tablet = 2 cols, Desktop = 6+3+3 handled by lg) */}
            <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-x-[30px] gap-y-[30px] lg:mx-auto lg:col-span-6">
              {/* USEFUL LINKS */}
              <div>
                <h4 className="text-[22px] text-[#d6b08c] mb-5 font-yeseva">
                  Useful links
                </h4>

                <div className="grid grid-cols-2 gap-y-3">
                  {[
                    { name: "About", href: "/AboutUs" },
                    { name: "Services", href: "/Services" },
                    { name: "Pricing Plan", href: "/pricing" },
                    { name: "Contact Us", href: "/ContactUs" },
                    { name: "Gallery", href: "/Gallery" },
                  ].map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      className="text-[14px] text-white hover:text-[#d6b08c] transition">
                      {item.name}
                    </Link>
                  ))}

                  {[
                    { name: "Policy", href: "/AboutUs" },
                    { name: "Our Team", href: "/team" },
                    { name: "FAQ's", href: "/faq" },
                    { name: "Services", href: "/Services" },
                    { name: "Career", href: "/AboutUs" },
                  ].map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      className="text-[14px] text-white hover:text-[#d6b08c] transition">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* CONTACT */}
              <div className="mt-[-15px] sm:pb-10 sm:py-5 lg:py-3">
                <h4 className="text-[22px] text-[#d6b08c] mb-5 font-yeseva">
                  Contact Us
                </h4>

                <ul className="lg:space-y-9 space-y-6 mb-10">
                  <li className="flex gap-3 text-[14px] text-white">
                    <FaLocationDot className="text-[#dfba9f] w-4 h-4 mt-[4px]" />
                    <span>{data.address}</span>
                  </li>

                  <li className="flex gap-3  text-[12px] text-white">
                    <FaEnvelope className="text-[#dfba9f] w-4 h-4 mt[3px]" />
                    <span>{data.email}</span>
                  </li>

                  <li className="flex gap-3 text-[14px] text-white">
                    <FaPhoneAlt className="text-[#dfba9f] w-4 h-4 mt-[3px]" />
                    <span>{data.phone}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className=" bg-[#111111]  mt-0 lg:mt-5 py-5 sm:py-5 lg:py-3">
        <div className="w-full max-w-[1140px] pt-3 mx-auto px-5 sm:px-10  flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <p className="text-[14px] text-white">
            Copyright © {currentYear} Thewebmax
          </p>

          <div className="flex gap-2 lg:gap-3 mt-0 lg:mt-3 md:mt-0 text-[13px] lg:text-[14px] text-[#d6b08c]">
            {/* <Link href="/AboutUs" className="hover:text-white">
              Terms & Condition
            </Link> */}
            {/* <span>/</span> */}
            <Link href="/faq" className="hover:text-white">
              Privacy Policy
            </Link>
            <span>/</span>
            <Link href="/ContactUs" className="hover:text-white">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* SCROLL TOP */}
      {isMounted &&
        createPortal(
          <button
            type="button"
            aria-label="Scroll to top"
            onClick={handleScrollToTop}
            className="fixed bottom-5 right-5 z-[9999] w-[45px] h-[45px] bg-[#1a1a1a] hover:bg-[#d6b08c] flex items-center justify-center transition">
            <span className="text-white text-[18px]">&uarr;</span>
          </button>,
          document.body,
        )}
    </footer>
  );
}
