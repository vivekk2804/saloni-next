"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Yeseva_One } from "next/font/google";
import { usePathname } from "next/navigation";
import { useContactInfo } from "@/hooks/useContactInfo";

import MobileNav from "./MobileNav";
import DesktopNav from "./DekstopNav";

const yeseva = Yeseva_One({
  subsets: ["latin"],
  weight: "400",
});

const ResponsiveNav = () => {
  const [open, setOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { data } = useContactInfo();
  const contactNumber = data.phone || "+41 43 542 65 91";

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  //  SCROLL ONLY FOR HOMEPAGE
  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  //  RESET SCROLL STATE ON OTHER PAGES
  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(false);
    }
  }, [isHomePage]);

  //  PREVENT BODY SCROLL WHEN MENU OPEN
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    if (!open) {
      setMobileDropdown(null);
    }
  }, [open]);

  return (
    <header
      className={`fixed z-[999] w-full transition-all duration-300 py-3.5 sm:py-6 ${
        isHomePage
          ? isScrolled
            ? "bg-[#fff6ef] h-[100px]"
            : "bg-white"
          : "bg-white"
      }`}>
      <div
        className={`mx-auto flex items-center px-[15px] ${
          isHomePage ? "max-w-[1140px]" : "w-full lg:ml-3 mr-2"
        } ${
          isHomePage && isScrolled ? "justify-between gap-0" : "justify-between"
        }`}>
        {/* LOGO */}
        <div className="flex items-center p-1 lg:ml-[-15px] sm:w-[130px] sm:h-[30px] w-[119px] h-[25px]">
          <Image
            src="/images/logo-dark.png"
            alt="logo"
            width={130}
            height={30}
          />
        </div>

        {/* DESKTOP NAV */}
        <DesktopNav />

        {/* DESKTOP PHONE */}
        <div className="hidden lg:block">
          <p
            className={`${yeseva.className} text-[#541f5c] text-[26px] lg:mr-3`}>
            {contactNumber}
          </p>
        </div>

        {/* MOBILE HEADER */}
        <div className="flex items-center gap-4 lg:hidden">
          <p
            className={`${yeseva.className} text-[#541f5c] text-[14px] sm:text-[26px] sm:ml-[-2px]`}>
            {contactNumber}
          </p>

          <button onClick={() => setOpen(!open)}>
            {open ? (
              <X size={28} />
            ) : (
              <Menu size={28} className="h-[41px] text-black" />
            )}
          </button>
        </div>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      {/* MOBILE NAV */}
      <MobileNav
        open={open}
        mobileDropdown={mobileDropdown}
        setMobileDropdown={setMobileDropdown}
        setOpen={setOpen}
      />
    </header>
  );
};

export default ResponsiveNav;
