"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useEffect, useState } from "react";

/* ================= COUNT UP COMPONENT ================= */
const CountUp = ({
  target,
  duration = 1500,
}: {
  target: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <>{count}</>;
};

/* ================= DATA ================= */
const presentationSlides = [
  {
    src: "/images/pic1.jpg",
    alt: "Beauty model portrait",
    imageClass: "object-cover object-[62%_18%]",
  },
  {
    src: "/images/pic2.jpg",
    alt: "Beauty model with floral backdrop",
    imageClass: "object-cover object-[60%_20%]",
  },
];

type PresentationStat = {
  value: number;
  label: string;
  duration?: number;
};

const presentationStats: PresentationStat[] = [
  { value: 23, label: "Awards", duration: 1400 },
  { value: 14, label: "Years", duration: 1600 },
  { value: 26, label: "Experts", duration: 1800 },
];

const changeSlide = (index: number, direction: number) =>
  (index + direction + presentationSlides.length) % presentationSlides.length;

/* ================= COMPONENT ================= */
const Presentation = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = presentationSlides[activeSlide];

  return (
    <section className="relative overflow-hidden pb-12 pt-16 sm:pb-14 sm:pt-20 lg:pt-24 xl:-mt-[165px] xl:pb-0 xl:pt-[200px]">
      <div className="absolute inset-0">
        <Image
          src="/images/bg-2.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-[0.9]"
        />
        <div className="absolute inset-0 opacity-[0.9] bg-[#fff6ef]" />
      </div>

      <div className="relative mx-auto lg:mt-[80px] max-w-[1140px] px-5 sm:px-6 md:px-8 lg:px-10 xl:px-20">
        <div className="mx-auto grid max-w-[1140px] gap-12 md:gap-14 xl:min-h-[520px] xl:grid-cols-[minmax(0,1.06fr)_minmax(400px,0.94fr)] xl:items-center xl:gap-32">
          {/* LEFT SIDE */}
          <div className="order-1 mx-auto w-full max-w-[42rem] xl:order-1 xl:mx-0 xl:-mt-60">
            <div className="flex items-center text-[14px] py-3 ml-4 gap-5 pl-3 text-[12px] tracking-[0.03em] text-[#1d2132] sm:justify-start sm:pl-1 sm:text-[16px] xl:-ml-[15px] xl:mb-2 xl:pl-1 md:ml-[40px]">
              <button
                type="button"
                onClick={() =>
                  setActiveSlide((index) => changeSlide(index, -1))
                }
                className="transition-colors duration-300 hover:text-[#541f5c]">
                PREV
              </button>
              <button
                type="button"
                onClick={() => setActiveSlide((index) => changeSlide(index, 1))}
                className="transition-colors duration-300 hover:text-[#541f5c]">
                NEXT
              </button>
            </div>

            <div className="relative xl:ml-[-30px]">
              <div className="pointer-events-none absolute top-8 lg:-left-10 lg:top-17 h-[185px] w-[300px] md:mx-auto md:h-[400px] md:w-[630px] lg:h-[93%] lg:w-[550px] border-[14px] border-[#541f5c] xl:block" />

              <div className="relative lg:mx-auto ml-[29px] aspect-[1.08] w-[305px] h-[185px] lg:w-full md:ml-[39px] overflow-hidden bg-white shadow-[0_34px_70px_rgba(63,35,46,0.16)] sm:aspect-[1.16] md:h-[390px] md:w-[650px] md:max-w-[46rem] xl:h-[350px] xl:w-[580px] xl:shadow-none">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(min-width: 1280px) 580px, (min-width: 768px) 46rem, 100vw"
                  className={slide.imageClass}
                />

                <button
                  type="button"
                  aria-label="Play presentation video"
                  className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full bg-[#541f5c] shadow-[0_18px_40px_rgba(97,35,108,0.28)] transition-transform duration-300 hover:scale-105 sm:h-[5.5rem] sm:w-[5.5rem] xl:h-[5rem] xl:w-[5rem]">
                    <Play
                      className="ml-1 h-8 w-8 fill-current text-white sm:h-9 sm:w-9"
                      strokeWidth={1.5}
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="order-2 mx-auto w-full max-w-[39rem] xl:order-2 xl:mx-0 xl:-mt-[245px]">
            <div className="mb-5 flex items-center gap-3 sm:mb-6">
              <p className="font-caveat text-[30px] md:mt-5 leading-none text-[#111111] sm:text-[36px] md:text-[40px] xl:text-[35px]">
                Welcome to
              </p>
              <span className="mt-1 h-px w-10 bg-[#ff9fb6] sm:w-14" />
              <Image
                src="/images/sep-leaf-right.png"
                alt=""
                width={69}
                height={71}
                className="h-[22px] w-[22px] sm:h-[26px] sm:w-[26px] xl:h-[28px] xl:w-[28px]"
              />
            </div>

            <h2 className="font-yeseva text-[22px] md:text-[40px] leading-[0.94] text-[#541f5c] xl:text-[40px]">
              Our Video Presentation
            </h2>

            <p className="mt-4 max-w-[590px] text-[16px] leading-[1.62] text-[#111111] sm:mt-5 sm:text-[17px] md:text-[18px] xl:mt-6 xl:max-w-[560px] xl:text-[15px]">
              Professional stylist tell me how beautiful it is to hide or
              emphasize your image. the beauty lies in the details of trends,
              the choice of fabrics and colors. guarantee you a unique result.
              We will provide you with the highest quality of our service
            </p>

            {/* COUNT STATS */}
            <div className="mb-1 mt-6 md:grid grid-cols-3 gap-2 sm:mt-7 sm:gap-5 md:gap-6 xl:-mb-[20px] xl:mt-1 xl:gap-2">
              {presentationStats.map((item) => (
                <div key={item.label} className="text-center">
                  <div className="relative flex h-[76px] items-center justify-center sm:h-[88px] md:h-[94px]">
                    <div className="absolute left-1/2 top-1/2 h-[36px] w-[104px] -translate-x-1/2 -translate-y-1/2 sm:h-[42px] sm:w-[126px] md:h-[46px] md:w-[136px]">
                      <Image
                        src="/images/count-bg.png"
                        alt=""
                        fill
                        sizes="(min-width: 768px) 136px, (min-width: 640px) 126px, 104px"
                        className="object-contain"
                      />
                    </div>

                    <span
                      suppressHydrationWarning
                      className="relative font-yeseva text-[36px] leading-none text-[#111111] sm:text-[42px] md:text-[48px] xl:text-[42px]">
                      <CountUp
                        target={item.value}
                        duration={item.duration ?? 1500}
                      />
                    </span>
                  </div>

                  <p className="font-caveat text-[22px] leading-none text-[#111111] sm:text-[28px] md:text-[32px] xl:text-[34px]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
