"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

type FilterItem = {
  label: string;
  dataFilter: string;
};

type GalleryItem = {
  title: string;
  category: string;
  itemClass: string;
  image: string;
};

const FILTER_ITEMS: FilterItem[] = [
  { label: "All", dataFilter: "*" },
  { label: "Hair Product", dataFilter: ".cat-1" },
  { label: "Hairstyle", dataFilter: ".cat-2" },
  { label: "Makeup", dataFilter: ".cat-3" },
  { label: "Coloring", dataFilter: ".cat-4" },
  { label: "Hair Wash", dataFilter: ".cat-5" },
];

const GALLERY_ITEMS: GalleryItem[] = [
  {
    title: "Pixie",
    category: "Hair Products",
    itemClass: "cat-1",
    image: "/images/Gallery/pic1.jpg",
  },
  {
    title: "Colors",
    category: "Hairstyle",
    itemClass: "cat-2",
    image: "/images/Gallery/pic2.jpg",
  },
  {
    title: "Braids",
    category: "Hairstyle",
    itemClass: "cat-3",
    image: "/images/Gallery/pic4.jpg",
  },
  {
    title: "Keratin",
    category: "Hairstyle",
    itemClass: "cat-4",
    image: "/images/Gallery/pic3.jpg",
  },
  {
    title: "Curls",
    category: "Hairstyle",
    itemClass: "cat-5",
    image: "/images/Gallery/pic5.jpg",
  },
  {
    title: "Shades",
    category: "Hairstyle",
    itemClass: "cat-4",
    image: "/images/Gallery/pic6.jpg",
  },
  {
    title: "Waves",
    category: "Hair Products",
    itemClass: "cat-3",
    image: "/images/Gallery/pic7.jpg",
  },
  {
    title: "Tail",
    category: "Hair Products",
    itemClass: "cat-2",
    image: "/images/Gallery/pic8.jpg",
  },
  {
    title: "Layers",
    category: "Coloring",
    itemClass: "cat-1",
    image: "/images/Gallery/pic9.jpg",
  },
];

const GallaryGrid = () => {
  const [activeFilter, setActiveFilter] = useState<string>("*");

  const filteredItems = useMemo(() => {
    if (activeFilter === "*") return GALLERY_ITEMS;
    const categoryClass = activeFilter.replace(".", "");
    return GALLERY_ITEMS.filter((item) => item.itemClass === categoryClass);
  }, [activeFilter]);

  return (
    <section className="section-full bg-orange-light bg-[#fff6ef] px-4 pb-[50px] pt-[80px] max-[767px]:pb-[30px] max-[767px]:pt-[30px]">
      <div className="container mx-auto w-full max-w-[1170px] px-[15px]">
        <div className="filter-wrap work-grid p-b30 pb-[30px] text-center">
          <ul className="masonry-filter link-style m-0 inline-block list-none p-0">
            {FILTER_ITEMS.map((item) => (
              <li
                key={item.label}
                className={`inline-block ${
                  activeFilter === item.dataFilter ? "active" : ""
                }`}>
                <a
                  href="#"
                  data-filter={item.dataFilter}
                  onClick={(event) => {
                    event.preventDefault();
                    setActiveFilter(item.dataFilter);
                  }}
                  className={`mx-[10px] my-[1px] block overflow-hidden text-[15px] font-semibold tracking-[1px] transition-colors ${
                    activeFilter === item.dataFilter
                      ? "text-[#541f5c]"
                      : "text-[#111111] hover:text-[#541f5c]"
                  }`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="masonry-wrap mfp-gallery row clearfix -mx-[15px] flex flex-wrap">
          {filteredItems.map((item, index) => (
            <div
              key={`${activeFilter}-${item.title}`}
              className={`masonry-item ${item.itemClass} col-lg-4 col-md-6 col-sm-6 m-b30 mb-[30px] w-full px-[15px] md:w-1/2 lg:w-1/3`}>
              <div
                className="project-img-effect-1 group relative w-full overflow-hidden bg-[#fff6ef] text-center leading-[1.5] text-[#111111]"
                style={{
                  animation:
                    "galleryFilterIn 460ms cubic-bezier(0.22, 1, 0.36, 1) both",
                  animationDelay: `${index * 70}ms`,
                }}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={700}
                  height={850}
                  className="h-auto w-[120%] max-w-none translate-x-0 align-top transition-all duration-300 ease-linear group-hover:translate-x-[-40px] group-hover:opacity-30"
                />

                <div className="wt-info absolute top-1/2 w-full -translate-y-1/4 px-[40px] opacity-0 transition-all duration-300 ease-linear group-hover:-translate-y-1/2 group-hover:opacity-100">
                  <h3 className="wt-tilte m-b10 m-t0 mb-[10px] mt-0 font-yeseva text-[30px] leading-[1.2] text-[#541f5c]">
                    {item.title}
                  </h3>
                  <p className="title-style-2 mb-0 font-caveat text-[28px] leading-none text-[#111111]">
                    {item.category}
                  </p>
                </div>

                <i
                  aria-hidden="true"
                  className="absolute bottom-0 right-0 h-[60px] w-[120px] translate-x-[120px] bg-[#fff6ef] transition-transform duration-300 ease-linear group-hover:translate-x-0 before:absolute before:left-1/2 before:top-[22px] before:h-[14px] before:w-[2px] before:-translate-x-1/2 before:bg-[#000] before:content-[''] after:absolute after:left-1/2 after:top-[28px] after:h-[2px] after:w-[14px] after:-translate-x-1/2 after:bg-[#000] after:content-['']"
                />

                <a
                  href={item.image}
                  className="mfp-link absolute inset-0"
                  aria-label={`Open ${item.title}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes galleryFilterIn {
          0% {
            opacity: 0;
            transform: translate3d(0, 18px, 0) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .project-img-effect-1 {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default GallaryGrid;
