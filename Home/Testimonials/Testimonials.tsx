"use client";
import Heading from "@/components/Heading";
import Image from "next/image";
import { useState } from "react";

type TestimonialItem = {
  name: string;
  text: string;
  image: string;
};

const testimonials: TestimonialItem[] = [
  {
    name: "Rustin Duza",
    image: "/images/testimonials/pic1.jpg",
    text: "This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! The environment here is so happy and cheery! Keep up the great work!",
  },
  {
    name: "Carolina Miller",
    image: "/images/testimonials/pic2.jpg",
    text: "This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! The environment here is so happy and cheery! Keep up the great work!",
  },
  {
    name: "Francis Burton",
    image: "/images/testimonials/pic3.jpg",
    text: "This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! The environment here is so happy and cheery! Keep up the great work!",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = testimonials[activeIndex];

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(to_bottom,#ffffff_60%,#fff6ef_50%)] px-5 pb-[78px] pt-[56px] sm:px-6 sm:pt-[70px] lg:px-8 lg:pb-[86px]">
      <div className="relative z-10 mx-auto max-w-[1140px]">
        <Heading
          subtitle=" What our clients say"
          title="Testimonials"
          bgTitle="Clients"
        />

        <div className="relative mx-auto mt-[26px] max-w-[1140px] overflow-hidden bg-white px-5 py-[40px] text-center shadow-[0_10px_30px_rgba(0,0,0,0.08),0_10px_40px_rgba(0,0,0,0.18)] sm:mt-[28px] sm:px-8 sm:py-[88px] md:px-12 lg:px-16 lg:py-[94px]">
          {/* BACKGROUND IMAGE */}
          <div className="absolute inset-0">
            <Image
              src="/images/add-bg.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 1140px, 100vw"
              className="object-cover object-center opacity-80"
              priority
            />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 mx-auto max-w-[680px]">
            <p className="text-[16px] leading-[1.45] text-[#111111]">
              {activeItem.text}
            </p>

            <p className="mt-9 font-caveat text-[28px] leading-none text-[#111111]">
              {activeItem.name}
            </p>

            <div className="mt-9 flex items-center justify-center gap-3 sm:gap-4">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`relative h-[72px] w-[72px] overflow-hidden rounded-full transition-all duration-300 sm:h-[92px] sm:w-[92px] ${
                    activeIndex === index
                      ? "ring-[2px] ring-[#5b2368] sm:ring-[3px]"
                      : "ring-[1.5px] ring-[#eadce8] hover:ring-[#8d6b93]"
                  }`}
                  aria-label={`Show testimonial by ${item.name}`}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(min-width: 640px) 92px, 72px"
                    className="object-cover object-center"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
