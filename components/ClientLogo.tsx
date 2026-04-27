"use client";

import Image from "next/image";
import Link from "next/link";
import { useSyncExternalStore } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const clientLogos = [
  {
    src: "/images/clientlogo/w1.png",
    alt: "Cafe and Restaurant",
    width: 154,
    height: 110,
  },
  {
    src: "/images/clientlogo/w2.png",
    alt: "Pinkville Hotel",
    width: 132,
    height: 98,
  },
  {
    src: "/images/clientlogo/w3.png",
    alt: "Cheryl Clothing",
    width: 154,
    height: 70,
  },
  {
    src: "/images/clientlogo/w4.png",
    alt: "Penny W. Textiles",
    width: 110,
    height: 106,
  },
  {
    src: "/images/clientlogo/w5.png",
    alt: "Caroline Boutique Store",
    width: 127,
    height: 111,
  },
  {
    src: "/images/clientlogo/w6.png",
    alt: "J. Smith Handcraft",
    width: 173,
    height: 97,
  },
];

const carouselLogos = [...clientLogos, ...clientLogos, ...clientLogos];
const subscribe = () => () => {};

const LogoCell = ({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) => (
  <div className="item">
    <div className="ow-client-logo table w-full">
      <div className="client-logo client-logo-media table-cell h-[110px] align-middle text-center">
        <Link href="/ContactUs" className="inline-block">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="mx-auto h-[96px] max-h-[100%] w-auto max-w-full"
          />
        </Link>
      </div>
    </div>
  </div>
);

const ClientLogo = () => {
  const isMounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  return (
    <section className="section-full bg-orange-light bg-[#fff6ef] py-[40px]">
      <div className="container mx-auto w-full max-w-[1140px] px-4 sm:px-6 lg:px-0">
        <div className="section-content">
          <div className="section-content home-client-carousel-2 py-[10px]">
            {isMounted ? (
              <Swiper
                modules={[Autoplay]}
                className="owl-carousel home-client-carousel-2"
                loop
                speed={1000}
                grabCursor
                spaceBetween={0}
                autoplay={{
                  delay: 1800,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                  0: { slidesPerView: 2, spaceBetween: 0 },
                  640: { slidesPerView: 3, spaceBetween: 0 },
                  768: { slidesPerView: 4, spaceBetween: 0 },
                  1024: { slidesPerView: 5, spaceBetween: 0 },
                  1280: { slidesPerView: 6, spaceBetween: 0 },
                }}>
                {carouselLogos.map((logo, index) => (
                  <SwiperSlide key={`${logo.src}-${index}`}>
                    <LogoCell {...logo} />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="grid grid-cols-2 gap-y-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {clientLogos.map((logo) => (
                  <LogoCell key={logo.src} {...logo} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogo;
