"use client";

import Link from "next/link";
import { navItems } from "@/constants";

const DesktopNav = () => {
  return (
    <nav className="font-poppins hidden lg:-ml-[-18px] lg:flex items-center justify-center flex-1">
      <ul className="flex gap-5 text-black">
        {navItems.map((item, index) => (
          <li key={index} className={item.dropdown ? "relative group " : ""}>
            {/* MAIN LINK */}
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-[#541f5c] text-[13px]  relative pb-2">
                {item.title}
              </Link>
            ) : (
              <span className="hover:text-[#541f5c] text-[13px] relative pb-2 cursor-pointer">
                {item.title}
              </span>
            )}

            {/* UNDERLINE ANIMATION */}
            {item.dropdown && (
              <span
                className="
                  absolute left-1/2 -translate-x-1/2
                  top-[calc(100%+5px)]
                  w-0 h-[2px]
                  bg-[#541f5c]
                  transition-all duration-300
                  group-hover:w-6
                "></span>
            )}

            {/* DROPDOWN */}
            {item.dropdown && (
              <ul
                className="
                  absolute left-0 top-full mt-8
                  w-[220px]
                  bg-white border border-[#f4f4f4]
                  rounded-md
                  opacity-0 invisible
                  transition-all duration-300
                  group-hover:opacity-100
                  group-hover:visible
                  z-10
                ">
                {item.dropdown.map((subItem, i) => (
                  <li key={i} className="border-b border-gray-100">
                    <Link
                      href={subItem.href}
                      className="block text-[12px] px-5 py-2 hover:bg-[#F2F2F2] transition-all duration-200 hover:pl-[30px]">
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNav;
