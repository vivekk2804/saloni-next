"use client";

import Heading from "@/components/Heading";
import Image from "next/image";
import { useState, useEffect } from "react";

// swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

type Service = {
  id: number;
  title: string;
  image: string;
};

const services: Service[] = [
  { id: 1, title: "Change Coloring", image: "/images/services/pic1.jpg" },
  { id: 2, title: "HairCuts", image: "/images/services/pic2.jpg" },
  { id: 3, title: "Perfect Hairstyles", image: "/images/services/pic3.jpg" },
  { id: 4, title: "Makeup", image: "/images/services/pic4.jpg" },
  { id: 5, title: "Nail Art", image: "/images/services/pic5.jpg" },
  { id: 6, title: "HairCuts", image: "/images/services/pic6.jpg" },
];

export default function ServicesSection() {
  const [isMounted, setIsMounted] = useState(false);

  // useEffect only runs on the client, AFTER the initial hydration render
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute top-0 right-0 opacity-90 pointer-events-none">
        <Image src="/images/bubble-bg.png" alt="bg" width={600} height={500} />
      </div>

      {/* HEADING */}
      <Heading
        subtitle="Save 20% On Haircuts"
        title="Our Services"
        bgTitle="Services"
      />

      {/* SWIPER START */}
      <div className="px-6 -mt-[35px] sm:mt-[15px]">
        {isMounted ? (
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={40}
            slidesPerView={5}
            loop={true}
            speed={800}
            grabCursor={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 5 },
            }}>
            {services.map((service, index) => (
              <SwiperSlide key={service.id}>
                <div
                  className={`text-center cursor-pointer ${
                    index % 2 === 1 ? "mt-10" : ""
                  }`}>
                  {/* IMAGE FRAME */}
                  <div className="border-[12px] border-[#f1decf]">
                    <div className="relative w-full h-[260px] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition duration-500 hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* NUMBER */}
                  <h2 className="text-[36px] font-[yeseva] font-bold text-[#111111] mt-6">
                    {String(service.id).padStart(2, "0")}
                  </h2>

                  {/* TITLE */}
                  <h3 className="text-[28px] font-[yeseva] text-[#541f5c] font-bold mt-2">
                    {service.title}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`text-center ${index % 2 === 1 ? "xl:mt-10" : ""}`}>
                <div className="border-[12px] border-[#f1decf]">
                  <div className="relative h-[260px] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h2 className="mt-6 text-[36px] font-[yeseva] font-bold text-[#111111]">
                  {String(service.id).padStart(2, "0")}
                </h2>
                <h3 className="mt-2 text-[28px] font-[yeseva] font-bold text-[#541f5c]">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        )}

        {/* NAV BUTTONS */}
        <div className="flex justify-center gap-10 my-15 text-sm tracking-widest">
          <button className="prev-btn cursor-pointer text-black hover:text-[#541f5c] transition">
            PREV
          </button>
          <button className="next-btn cursor-pointer text-black hover:text-[#541f5c] transition">
            NEXT
          </button>
        </div>
      </div>
    </section>
  );
}
