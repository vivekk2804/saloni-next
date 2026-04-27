"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { IconType } from "react-icons";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type HeroSlide = {
  id: string;
  background: string;
  model: string;
  modelAlt: string;
  label: string;
  titleLines: [string, string, string];
  mediaSide: "left" | "right";
  textAlign: "left" | "right";
};

type SocialLink = {
  href: string;
  label: string;
  icon: IconType;
};

const SLIDES: HeroSlide[] = [
  {
    id: "rs-2938",
    background: "/images/Home2/slide1.jpg",
    model: "/images/Home2/girl-1.png",
    modelAlt: "Woman with styled natural look",
    label: "Look Today",
    titleLines: ["ESSENCE", "OF NATURAL", "BEAUTY"],
    mediaSide: "right",
    textAlign: "left",
  },
  {
    id: "rs-2939",
    background: "/images/Home2/slide2.jpg",
    model: "/images/Home2/girl-2.png",
    modelAlt: "Beauty portrait with artistic styling",
    label: "Look Today",
    titleLines: ["THE ART", "OF NATURAL", "BEAUTY"],
    mediaSide: "left",
    textAlign: "right",
  },
];

const SOCIAL_LINKS: SocialLink[] = [
  { href: "https://www.facebook.com/", label: "Facebook", icon: FaFacebookF },
  { href: "https://x.com/", label: "X", icon: FaXTwitter },
  { href: "https://www.linkedin.com/", label: "LinkedIn", icon: FaLinkedinIn },
  { href: "https://www.youtube.com/", label: "YouTube", icon: FaYoutube },
];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    const sliderInterval = window.setInterval(() => {
      setActiveSlide((previous) => (previous + 1) % SLIDES.length);
    }, 7000);

    return () => window.clearInterval(sliderInterval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-transparent pt-[90px] lg:pt-[98px]">
      <div className="slider-outer relative h-[calc(100vh-90px)] min-h-[680px] lg:h-[calc(100vh-98px)]">
        <div className="absolute inset-0">
          {SLIDES.map((slide, index) => {
            const isActive = index === activeSlide;
            const mediaOnRight = slide.mediaSide === "right";
            const textOnLeft = slide.textAlign === "left";

            return (
              <article
                key={slide.id}
                className={`absolute inset-0 transition-all duration-[1400ms] ease-[cubic-bezier(.19,.8,.21,1)] ${
                  isActive
                    ? "z-20 translate-y-0 opacity-100"
                    : "pointer-events-none z-10 translate-y-4 opacity-0"
                }`}>
                <div className="absolute inset-0">
                  <Image
                    src={slide.background}
                    alt="Hero background"
                    fill
                    preload={index === 1}
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>

                <div
                  className={`absolute z-[4] hidden sm:block ${
                    mediaOnRight
                      ? "bottom-[-260px] left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-[-250px] md:right-[-200px] xl:right-[-170px]"
                      : "bottom-[-262px] left-[-120px] md:left-[-74px] xl:left-[35px]"
                  }`}>
                  <Image
                    src="/images/Home2/circle.png"
                    alt="Decorative spinning circle"
                    width={1003}
                    height={1051}
                    sizes="(max-width: 767px) 0px, (max-width: 1024px) 720px, 1003px"
                    className="h-[720px] w-[690px] animate-[spin_25s_linear_infinite] md:h-[860px] md:w-[820px] xl:h-[1051px] xl:w-[1003px]"
                  />
                </div>

                <div
                  className={`absolute z-[5] ${
                    mediaOnRight
                      ? "bottom-0 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-[-50px] md:right-[-35px] xl:right-[-30px]"
                      : "bottom-0 left-[-38px] md:left-[0px] xl:left-[18px]"
                  }`}>
                  <div
                    className={`relative overflow-hidden drop-shadow-[0_6px_16px_rgba(0,0,0,0.25)] ${
                      mediaOnRight
                        ? "h-[390px] w-[560px] md:h-[510px] md:w-[740px] xl:h-[653px] xl:w-[951px]"
                        : "h-[390px] w-[560px] md:h-[505px] md:w-[730px] xl:h-[612px] xl:w-[880px]"
                    }`}>
                    <Image
                      src={slide.model}
                      alt={slide.modelAlt}
                      fill
                      sizes="(max-width: 768px) 560px, (max-width: 1280px) 740px, 951px"
                      className={`object-cover ${
                        mediaOnRight
                          ? "object-right-center"
                          : "object-left-center"
                      }`}
                    />
                  </div>
                </div>

                <div
                  className={`absolute z-[11] w-[min(700px,calc(100%-2rem))] ${
                    textOnLeft
                      ? "left-1/2 top-[102px] -translate-x-1/2 text-center sm:left-[70px] sm:translate-x-0 sm:text-left lg:left-[88px] lg:top-[170px]"
                      : "left-1/2 top-[98px] -translate-x-1/2 text-center sm:left-auto sm:right-[78px] sm:translate-x-0 sm:text-right lg:right-[230px] lg:top-[82px] xl:right-[255px] xl:top-[80px]"
                  }`}>
                  <p className="font-caveat text-[34px] leading-[46px] sm:text-[39px] sm:leading-[46px]">
                    <span className="bg-[#fff] px-[30px] py-1">
                      {slide.label}
                    </span>
                  </p>

                  <h1
                    className={`mt-5 max-w-[573px] whitespace-normal font-yeseva text-[38px] leading-[38px] text-[#111] uppercase sm:text-[74px] sm:leading-[74px] xl:text-[74px] xl:leading-[74px] ${
                      textOnLeft
                        ? "text-center sm:text-left"
                        : "text-center sm:text-right"
                    }`}>
                    {slide.titleLines[0]}

                    {slide.titleLines[1]}

                    {slide.titleLines[2]}
                  </h1>

                  <div
                    className={`mt-10 sm:mt-12 ${textOnLeft ? "" : "sm:text-right"}`}>
                    <Link
                      href="/HeroForm"
                      className="group inline-block min-w-[200px] overflow-hidden bg-[#111111] px-10 py-[15px] text-center text-[14px] font-medium tracking-[1px] transition-colors duration-300 hover:bg-[#541f5c] sm:min-w-[200px]">
                      <span className="block text-transparent transition-all duration-300 [text-shadow:0_0_0_#fff,400px_0_0_#fff] group-hover:[text-shadow:-400px_0_0_#fff,0_0_0_#fff]">
                        Book Now
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="slider-social-outer social-mobile-hide absolute left-[5px] top-1/2 z-30 hidden -translate-y-1/2 min-[778px]:block">
          <div className="slider-social-info relative w-[40px]">
            <div className="absolute left-1/2 top-[-59px] h-[50px] w-px -translate-x-1/2 bg-[#541f5c]" />
            <ul className="m-0 list-none p-0 text-[#111]">
              {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
                <li key={label} className="block">
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="block h-[30px] leading-[30px] text-center text-[#111] transition-colors duration-300 hover:text-[#541f5c]">
                    <Icon className="inline text-[14px]" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="absolute left-1/2 bottom-[-60px] h-[50px] w-px -translate-x-1/2 bg-[#541f5c]" />
          </div>
        </div>

        <div className="absolute right-[30px] top-1/2 z-30 hidden -translate-y-1/2 min-[778px]:block">
          <div className="flex flex-col gap-3">
            {SLIDES.map((slide, index) => {
              const isActive = activeSlide === index;
              return (
                <button
                  key={slide.id}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => setActiveSlide(index)}
                  className={`h-[20px] w-[20px] rounded-full transition-all duration-300 ${
                    isActive
                      ? "border-[3px] border-black bg-white"
                      : "border-[3px] border-white bg-[#adb3b4]"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
