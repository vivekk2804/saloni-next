import Image from "next/image";
import React from "react";
import Heading from "./Heading";
import {
  Brush,
  ChevronsRight,
  Paintbrush,
  Scissors,
  ShowerHead,
  SprayCan,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
type ServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const ABOUT_SERVICES: ServiceItem[] = [
  {
    title: "Classic Haircut",
    description:
      "Proin dapibus nisl ornare diam varius mpus. Aenean a quam luctus, finibus tellus ut, convallis eros.",
    icon: Scissors,
  },
  {
    title: "Hair Treatment",
    description:
      "Faucibus ante, in porttitor tellus blandit et. Phasellus tincidunt metus lectus sollicitudin feugiat pharetra.",
    icon: SprayCan,
  },
  {
    title: "Hair Wash",
    description:
      "Maecenas pulvinar, risus in facilisis dignissim, quam nisi hendrerit nulla, id vestibulum metus nullam.",
    icon: ShowerHead,
  },
  {
    title: "Hair Color",
    description:
      "Proin dapibus nisl ornare diam varius mpus. Aenean a quam luctus, finibus tellus ut, convallis eros.",
    icon: Paintbrush,
  },
  {
    title: "Hair Stylist",
    description:
      "Faucibus ante, in porttitor tellus blandit et. Phasellus tincidunt metus lectus sollicitudin feugiat pharetra.",
    icon: UserRound,
  },
  {
    title: "Hair Extension",
    description:
      "Maecenas pulvinar, risus in facilisis dignissim, quam nisi hendrerit nulla, id vestibulum metus nullam.",
    icon: Brush,
  },
];

const ServicesPage = () => {
  return (
    <section className="section-full relative overflow-hidden bg-[#fff] px-4 pt-[80px] pb-[50px] max-[767px]:pt-[30px] max-[767px]:pb-[30px]">
      <Image
        src="/images/bubble-bg.png"
        alt="Background"
        width={560}
        height={560}
        className="pointer-events-none absolute right-[-24px] bottom-[0px] w-[560px] h-auto object-contain"
      />
      <div className="container relative mx-auto w-full max-w-[1140px]">
        <div className="section-content">
          <Heading
            subtitle="Save 20% On Haircuts "
            title="Our Services"
            bgTitle="Services"
          />
          <div className="row d-flex grid grid-cols-1 gap-x-[26px] gap-y-[26px] sm:grid-cols-2 lg:grid-cols-3">
            {ABOUT_SERVICES.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="icon-circle-box v-icon-effect bg-orange-light h-full bg-[#fff6ef] text-center">
                  <div className="wt-icon-box-wraper center corner-radius flex h-full flex-col px-[20px] pt-[30px] pb-[36px] text-center">
                    <div className="icon-lg m-b20 icon-circle relative mx-auto mb-[20px] h-[100px] w-[100px] rounded-full bg-white">
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute left-[-20px] top-[-10px] z-0 h-[120px] w-[140px] bg-center bg-no-repeat"
                        style={{
                          backgroundImage: "url('/images/count-bg.png')",
                        }}
                      />
                      <span className="icon-cell relative z-10 flex h-full w-full items-center justify-center leading-[100px] text-[#2a2a2a]">
                        <Icon size={42} strokeWidth={1.6} />
                      </span>
                    </div>

                    <div className="icon-content relative z-[1] flex flex-1 flex-col">
                      <h3 className="wt-tilte mt-0 font-yeseva text-[30px] leading-[1.1] text-[#541f5c]">
                        {service.title}
                      </h3>
                      <p className="mx-auto mt-[18px] max-w-[300px] text-[16px] leading-[1.45] text-[#111111]">
                        {service.description}
                      </p>
                      <Link
                        href="/Content"
                        className="site-button-link black mt-auto pt-[16px] inline-block font-semibold text-[#171717] transition-colors hover:text-black">
                        Read More
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
