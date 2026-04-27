"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa6";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import Heading from "@/components/Heading";

const instagramPosts = [
  { image: "/images/Instagram/1.jpg", title: "Haircut" },
  { image: "/images/Instagram/2.jpg", title: "Hair Color" },
  { image: "/images/Instagram/3.jpg", title: "Makeup" },
  { image: "/images/Instagram/4.jpg", title: "Hair Style" },
  { image: "/images/Instagram/5.jpg", title: "Makeup" },
  { image: "/images/Instagram/6.jpg", title: "Makeup" },
  { image: "/images/Instagram/7.jpg", title: "Hair Wash" },
  { image: "/images/Instagram/8.jpg", title: "Makeup" },
];

const Instagram = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="overflow-hidden bg-[#f8f0ea] pt-10 pb-10 xl:pt-[80px] xl:pb-[50px]">
      <div className="grid grid-cols-1 xl:grid-cols-[33.333%_66.667%]">
        {/* LEFT CONTENT */}
        <div className="relative z-10 w-full max-w-full bg-transparent shadow-none xl:max-w-[426px] xl:min-h-[322px] xl:bg-white xl:shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
          <div className="flex h-full flex-col justify-center px-5 pb-4 sm:px-6 sm:pb-5 md:px-3 xl:px-[46px] xl:py-[54px]">
            <div className="mb-3 flex items-center gap-2 sm:mb-4 sm:gap-3 xl:mb-5">
              <p className="font-caveat text-[22px] sm:text-[24px] md:text-[26px] leading-[0.9] text-[#111111] xl:text-[34px]">
                Follow Us On
              </p>

              <span className="mt-1 h-px w-9 bg-[#f098af] sm:w-10" />

              <Image
                src="/images/sep-leaf-right.png"
                alt=""
                width={22}
                height={22}
                className="h-[22px] w-[22px] -ml-[18px] opacity-80"
              />
            </div>

            <h2 className="font-yeseva text-[22px] sm:text-[42px]  leading-[0.98] text-[#541f5c] xl:text-[42px]">
              Instagram
            </h2>
          </div>
        </div>

        {/* RIGHT SLIDER */}
        <div className="relative z-20 mt-[-5px] lg:mt-6 xl:mt-0 xl:-ml-[260px] ">
          <div className="px-5 pt-3 min-[480px]:px-2 min-[480px]:pt-2 sm:px-3 md:px-2 lg:px-2 xl:px-8 xl:pt-4">
            {isMounted ? (
              <Swiper
                modules={[Navigation]}
                loop
                grabCursor
                speed={700}
                spaceBetween={0}
                navigation={{
                  prevEl: ".instagram-prev",
                  nextEl: ".instagram-next",
                }}
                breakpoints={{
                  0: { slidesPerView: 1, spaceBetween: 0 },
                  480: { slidesPerView: 2, spaceBetween: 4 },
                  640: { slidesPerView: 2, spaceBetween: 6 },
                  768: { slidesPerView: 2, spaceBetween: 8 },
                  1024: { slidesPerView: 2, spaceBetween: 10 },
                  1280: { slidesPerView: 4.1, spaceBetween: 12 },
                  1536: { slidesPerView: 5, spaceBetween: 12 },
                }}>
                {instagramPosts.map((post, index) => (
                  <SwiperSlide key={`${post.image}-${index}`}>
                    <article className="group relative h-[420px] min-[480px]:h-[255px] md:h-[364px] lg:h-[255px] xl:h-[233px] overflow-hidden">
                      {/* IMAGE */}
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(min-width: 1536px) 19vw, (min-width: 1280px) 22vw, (min-width: 1024px) 35vw, (min-width: 768px) 45vw, (min-width: 480px) 48vw, 100vw"
                        className="object-cover object-center transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.12]"
                      />

                      {/* OVERLAY */}
                      <Link
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex flex-col items-center justify-center bg-[#5b2368]/80 hover:text-white opacity-0 scale-[0.8] transition-all duration-[500ms] ease-out group-hover:opacity-100 group-hover:scale-100">
                        <FaInstagram className="text-[40px] mb-3" />

                        <span className="font-caveat text-[40px] sm:text-[50px] leading-none">
                          {post.title}
                        </span>
                      </Link>
                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="grid grid-cols-1 min-[480px]:grid-cols-2 xl:grid-cols-5 gap-2">
                {instagramPosts.slice(0, 5).map((post) => (
                  <article
                    key={post.image}
                    className="relative h-[420px] min-[480px]:h-[255px] md:h-[255px] lg:h-[255px] xl:h-[233px] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(min-width: 1280px) 22vw, (min-width: 768px) 45vw, 100vw"
                      className="object-cover object-center"
                    />
                  </article>
                ))}
              </div>
            )}

            {/* NAVIGATION */}
            <div className="mt-6 mb-2 flex items-center gap-6 pl-3 min-[480px]:mt-4 min-[480px]:pl-1 text-[14px] sm:text-[14px] text-[#1d2132] xl:mt-4 xl:text-[14px]">
              <button className="instagram-prev cursor-pointer transition hover:text-[#5b2368]">
                PREV
              </button>
              <button className="instagram-next cursor-pointer transition hover:text-[#5b2368]">
                NEXT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
