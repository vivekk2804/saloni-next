"use client";

import Image from "next/image";
import Link from "next/link";

const collageFrameClass =
  "overflow-hidden border-[8px] border-[#f1dfd4] bg-white shadow-none sm:border-[9px] md:border-[10px] lg:border-[14px] lg:shadow-[0_18px_45px_rgba(39,26,17,0.1)]";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-white px-0 pb-10 pt-2 lg:mt-[-15px]  lg:px-10 xl:px-[112px]">
      <div
        className="relative z-10 mt-0 bg-white px-5 py-8 
shadow-[-10px_-10px_30px_rgba(0,0,0,0.1),10px_-10px_30px_rgba(0,0,0,0.08),0px_10px_30px_rgba(0,0,0,0.09)] 
sm:px-6 sm:py-9 md:px-8 md:py-10 lg:mt-25 lg:px-14 lg:py-10 xl:px-[90px] xl:py-[104px]">
        <div className="mx-auto mt-0 grid max-w-[1140px] items-start gap-8 md:gap-10 lg:mt-[-100px] lg:h-[90vh] lg:grid-cols-[minmax(0,3.0fr)_minmax(420px,1.92fr)] lg:items-center xl:gap-12">
          <div className="relative">
            <div className="relative z-10 mx-auto max-w-none lg:max-w-[740px]">
              <div className="mb-4 flex items-center gap-2.5 sm:mb-5 md:mb-6 lg:mb-7 lg:gap-3">
                <p className="font-caveat text-[32px] leading-none text-[#111111] sm:text-[24px] md:text-[32px] lg:text-[34px] xl:text-[35px]">
                  Welcome to
                </p>
                <span className="mt-1 h-px w-9 bg-[#ff9fb6] sm:w-10 md:w-12 lg:w-10 xl:w-14" />
                <Image
                  src="/images/sep-leaf-right.png"
                  alt=""
                  width={69}
                  height={71}
                  className="h-[22px] w-[22px] ml-[-20px] sm:h-[24px] sm:w-[24px] md:h-[26px] md:w-[26px] lg:h-[28px] lg:w-[28px]"
                />
              </div>

              <h2 className="font-yeseva text-[25px] leading-[1.06] text-[#5d2467] sm:text-[44px] md:max-w-[650px] lg:max-w-[770px] md:text-[40px] lg:text-[32px] xl:text-[45px]">
                Our Salon is Most Popular, Clean and Recommended Hair Salon
              </h2>

              <p className="mt-5 max-w-[770px] text-[17px] leading-[1.48] text-[#252525] sm:mt-6 sm:text-[16px] md:mt-5 lg:mt-4 xl:text-[18px]">
                We have a passion for promoting healthy, balanced and beautiful
                living. Offering massage, Acupuncture, Laser Skincare, fitness
                classes and more, we emphasize preventive care, stress
                management, and personal growth. While you may find a visit with
                us to be a spa-like, relaxing and pampering experience,
              </p>

              <div className="mt-8 flex items-end justify-between gap-4 sm:mt-9 md:mt-8 lg:mt-6">
                <Link
                  href="/Services"
                  type="button"
                  className="inline-flex h-[60px] w-[174px] items-center justify-center 
             bg-[#171717] px-6 text-[15px] font-semibold tracking-[0.03em] 
             text-transparent overflow-hidden
             transition-all duration-300
             [text-shadow:0_0_0_#fff,400px_0_0_#fff]
             hover:[text-shadow:-400px_0_0_#fff,0_0_0_#fff]
             hover:bg-[#5d2467]
             sm:w-[182px] md:w-[174px] lg:mb-20 lg:h-[52px] lg:min-w-[180px] 
             lg:w-auto lg:px-10 lg:tracking-[0.06em]">
                  More About
                </Link>
                <Image
                  src="/images/sign.png"
                  alt="Signature"
                  width={242}
                  height={93}
                  className="h-auto w-[132px] shrink-0 self-end sm:w-[145px] md:w-[150px] lg:mb-15 lg:w-[280px] xl:w-[255px]"
                />
              </div>
            </div>
            <p
              aria-hidden="true"
              className="pointer-events-none mt-1 font-yeseva text-[64px] leading-none text-[#f3edf2] sm:mt-5 sm:text-[74px] md:text-[84px] lg:absolute lg:bottom-[-82px]  lg:left-0 lg:mt-0  lg:text-[142px] xl:text-[120px]">
              Welcome
            </p>
          </div>

          <div className="relative mx-auto mt-5 grid w-full grid-cols-1 gap-8 md:mt-6 md:grid-cols-3 md:gap-4 lg:mt-20 lg:block lg:h-[630px] lg:max-w-[560px]">
            {/* IMAGE 1 (TOP) */}
            <div
              className={`${collageFrameClass} order-2 relative aspect-[0.84] w-full lg:absolute lg:top-0 lg:left-[50px] lg:z-10 lg:h-[60%] lg:w-[330px]`}>
              <Image
                src="/images/s2.jpg"
                alt="Stylist holding scissors"
                fill
                sizes="(min-width: 1024px) 330px, (min-width: 768px) 31vw, 100vw"
                className="object-cover object-[44%_34%]"
              />
            </div>

            {/* IMAGE 2 (MIDDLE) */}
            <div
              className={`${collageFrameClass} order-3 relative aspect-[0.84] w-full lg:absolute lg:top-[180px] lg:left-[150px] lg:z-20 lg:h-[60%] lg:w-[330px] lg:[animation:floatX_3s_ease-in-out_infinite] sm:[animation:floatX_3s_ease-in-out_infinite] xs:[animation:floatX_3s_ease-in-out_infinite]`}>
              <Image
                src="/images/s3.jpg"
                alt="Client receiving a hair treatment"
                fill
                sizes="(min-width: 1024px) 330px, (min-width: 768px) 31vw, 100vw"
                className="object-cover object-[58%_center]"
              />
            </div>

            {/* IMAGE 3 (BOTTOM) */}
            <div
              className={`${collageFrameClass} order-1 relative aspect-[0.84] w-full lg:absolute lg:top-[260px] lg:left-[0px] lg:z-30 lg:h-[60%] lg:w-[300px] lg:shadow-[0_28px_52px_rgba(22,15,10,0.48)]`}>
              <Image
                src="/images/s1.jpg"
                alt="Hair stylist blow drying a client's hair"
                fill
                sizes="(min-width: 1024px) 300px, (min-width: 768px) 31vw, 100vw"
                className="object-cover object-[49%_center]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
