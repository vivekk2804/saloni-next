"use client";

import Link from "next/link";
import { mobileMenu } from "@/constants";
import { ChevronRight } from "lucide-react";

type MobileNavProps = {
  open: boolean;
  mobileDropdown: string | null;
  setMobileDropdown: (value: string | null) => void;
  setOpen: (value: boolean) => void; // 🔥 added
};

const MobileNav = ({
  open,
  mobileDropdown,
  setMobileDropdown,
  setOpen,
}: MobileNavProps) => {
  return (
    <div
      className={`fixed top-0 left-0 h-screen w-[250px] bg-white transform transition-transform duration-500 z-50 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}>
      <div className="flex flex-col">
        {mobileMenu.map((item, index) => (
          <div key={index}>
            {/* DROPDOWN ITEM */}
            {item.dropdown ? (
              <>
                <button
                  onClick={() =>
                    setMobileDropdown(
                      mobileDropdown === item.key ? null : item.key!,
                    )
                  }
                  className="flex items-center justify-between px-4 py-3 border-b border-gray-100 w-full text-sm">
                  <span>{item.title}</span>

                  <ChevronRight
                    className={`transition-transform duration-300 ${
                      mobileDropdown === item.key ? "rotate-90" : ""
                    }`}
                  />
                </button>

                {/* DROPDOWN LIST */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileDropdown === item.key
                      ? item.height || "max-h-[250px]"
                      : "max-h-0"
                  }`}>
                  <div className="bg-gray-50">
                    {item.dropdown.map((subItem, i) => (
                      <Link
                        key={i}
                        href={subItem.href}
                        onClick={() => {
                          setMobileDropdown(null);
                          setOpen(false); // 🔥 close menu on click
                        }}
                        className="block px-6 py-3 text-[13px] border-b border-gray-100 hover:bg-gray-100 transition">
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              /* NORMAL LINK */
              <Link
                href={item.href || "#"}
                onClick={() => setOpen(false)} // 🔥 close menu
                className="block px-4 py-3 border-b border-gray-100 text-sm hover:bg-gray-100 transition">
                {item.title}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
