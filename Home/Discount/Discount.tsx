"use client";

import ClientLogo from "@/components/ClientLogo";
import Image from "next/image";
import Link from "next/link";
const Discount = () => {
  return (
    <section className="overflow-hidden bg-[linear-gradient(to_bottom,#fff_0%,#fff_38%,#fff6ef_38%,#fff6ef_100%)] py-12 sm:py-14 lg:py-[86px]">
      <div className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-0">
        <div className="relative">
          <p
            aria-hidden="true"
            className="pointer-events-none absolute left-[-226px] top-59 z-0 hidden -translate-y-1/2 -rotate-90 font-yeseva text-[120px] leading-none text-[#541f5c] opacity-[0.16] lg:block">
            Offer
          </p>

          <div className="relative z-10 mx-auto max-w-[1140px] overflow-hidden shadow-[0_22px_46px_rgba(41,35,34,0.14)] lg:grid lg:grid-cols-[1fr_1fr]">
            <div className="relative min-h-[228px] px-5 py-3 sm:min-h-[236px] sm:px-10 sm:py-4 lg:min-h-[360px] lg:px-[58px] lg:py-[38px]">
              <Image
                src="/images/add-bg.png"
                alt="Petal pattern"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center sm:object-cover  lg:object-cover lg:object-center"
              />

              <div className="relative z-10 py-1 lg:mt-9 lg:ml-[-10px]">
                <div className="flex items-center gap-2 sm:gap-3">
                  <p className="font-caveat text-[22px] sm:text-[34px]  leading-none text-[#111111] lg:text-[34px]">
                    Make an Appointment!
                  </p>
                  <span className="mt-2 h-px w-8 bg-[#f098af] sm:w-10" />
                  <Image
                    src="/images/sep-leaf-right.png"
                    alt="Leaf decoration"
                    width={69}
                    height={71}
                    className="h-[20px] ml-[-20px] w-[22px] sm:h-[28px] sm:w-[25px]"
                  />
                </div>

                <h2 className="mt-3 font-yeseva text-[22px] leading-[1.05] text-[#541f5c] sm:text-[42px] lg:mt-[12px] lg:text-[42px]">
                  <span className="mr-2">&amp; get</span>
                  <span className="mr-2 text-black">25%</span>
                  <span>discount!</span>
                </h2>

                <p className="mt-3 text-[16px] text-[#111111] sm:mt-4 sm:text-[17px] lg:text-[18px] font-poppins">
                  Glowing, dewy skin is our thing.
                </p>

                <Link
                  href="/Services"
                  type="button"
                  className="mt-5 inline-flex h-[54px] w-[186px] items-center justify-center 
             bg-[#0e1219] text-[17px] font-medium tracking-[0.01em] 
             text-transparent overflow-hidden
             transition-all duration-300
             [text-shadow:0_0_0_#fff,400px_0_0_#fff]
             hover:[text-shadow:-400px_0_0_#fff,0_0_0_#fff]
             hover:bg-[#5d2467]
             sm:mt-7">
                  More Detail
                </Link>
              </div>
            </div>

            <div className="relative min-h-[228px] sm:min-h-[212px] md:min-h-[236px] lg:min-h-[360px]">
              <Image
                src="/images/add-pic.jpg"
                alt="Beauty model portrait"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center sm:object-[52%_28%] lg:object-center"
              />
            </div>
          </div>
        </div>
        <ClientLogo />
      </div>
    </section>
  );
};

export default Discount;
