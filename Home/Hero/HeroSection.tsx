"use client";
import Image from "next/image";
import type { HeroSlide } from "./heroData";

const HeroSection = ({ slide }: { slide: HeroSlide }) => {
  return (
    <div className="relative w-[100%] h-screen overflow-hidden ">
      {/* Image Layer (covers full section) */}
      <div className="absolute inset-0 w-[90%]  mx-auto mb-20">
        <Image
          src={slide.image}
          alt="hero"
          fill
          className="object-cover  "
          preload
        />
      </div>

      {/* Content Layer (on top of image) */}
      <div className="absolute inset-0 flex items-left z-20">
        {/* Content Wrapper */}
        <div className="ml-[150px] mt-[200px]">
          {/* Outer White Box */}
          <div className="p-[20px] border-16 border-white ">
            {/* Inner Beige Box */}
            <div className="bg-transparent p-[40px] w-[420px]">
              <p className="text-[42px] italic font-[caveat] mb-2">
                {slide.smallTitle}
              </p>

              <h1 className="text-[64px] w-200 leading-[60px] text-[#541f5c] font-bold uppercase mb-4">
                {slide.title}
              </h1>

              <p className="text-[18px] leading-[28px] mb-6">
                {slide.description}
              </p>

              <button className="px-6 py-3 bg-black text-white uppercase text-sm">
                {slide.button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
