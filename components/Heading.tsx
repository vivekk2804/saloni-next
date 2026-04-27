import React from "react";
import Image from "next/image";

type HeadingProps = {
  subtitle: string; // "Save 20% On Haircuts"
  title: string; // "Our Services"
  bgTitle?: string; // "Services" (optional)
};

const Heading: React.FC<HeadingProps> = ({ subtitle, title, bgTitle }) => {
  return (
    <div className="max-w-[1200px] mx-auto text-center gap-3 mb-16 mt-10  relative">
      {/* SMALL TEXT */}
      <div className="flex items-center justify-center  text-sm text-black mb-4">
        <Image
          src="/images/sep-leaf-left.png"
          alt=""
          width={69}
          height={71}
          className="h-[22px] w-[22px] ml-[1px] lg:ml-[20px] sm:h-[24px] sm:w-[24px] md:h-[26px] md:w-[26px] lg:h-[28px] lg:w-[28px]"
        />

        <span className="mt-4 sm:mt-1 h-px w-9 ml-[-5px] lg:ml-[-7px] bg-[#ff9fb6]" />

        <span className="sm:text-[34px]  text-[22px] font-caveat">
          {subtitle}
        </span>

        <span className=" mt-4 sm:mt-1 h-px w-9 ml-[5px] lg:ml-[7px] bg-[#ff9fb6]" />

        <Image
          src="/images/sep-leaf-right.png"
          alt=""
          width={69}
          height={71}
          className="h-[22px] w-[22px] sm:ml-[-4px], ml-[-10px] sm:h-[24px] sm:w-[24px] md:h-[26px] md:w-[26px] lg:h-[28px] lg:w-[28px]"
        />
      </div>

      {/* MAIN TITLE */}
      <h2 className="relative text-[22px] sm:text-[42px] font-yeseva font-medium text-[#5a2a5d] z-10">
        {title}
      </h2>

      {/* FADED BACKGROUND TEXT */}
      {bgTitle && (
        <span className=" hidden sm:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[30%] text-[120px] font-medium text-[#541f5c] opacity-[0.1] font-yeseva whitespace-nowrap pointer-events-none w-full">
          {bgTitle}
        </span>
      )}
    </div>
  );
};

export default Heading;
