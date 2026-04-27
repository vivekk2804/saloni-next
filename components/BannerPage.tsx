"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronsRight } from "lucide-react";

type Breadcrumb = {
  label: string;
  href?: string;
};

type PageBannerProps = {
  title: string;
  bgImage: string;
  breadcrumbs: Breadcrumb[];
  className?: string;
};

const PageBanner = ({
  title,
  bgImage,
  breadcrumbs,
  className,
}: PageBannerProps) => {
  return (
    <main className="pt-[90px] lg:pt-[90px]">
      <section
        className={`relative h-[410px] w-full overflow-hidden ${className ?? ""}`}>
        {/* Background Image */}
        <Image
          src={bgImage}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#dfba9f] opacity-70" />

        {/* Content */}
        <div className="relative z-10 mx-auto table h-full w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="table-cell align-middle text-center">
            {/* Title */}
            <h2 className="font-yeseva text-[58px] leading-none text-[#541f5c] max-[540px]:text-[32px]">
              {title}
            </h2>

            {/* Breadcrumb */}
            <div className="mt-5">
              <ul className="m-0 list-none p-0">
                {breadcrumbs.map((item, index) => (
                  <li
                    key={index}
                    className="inline-block align-middle font-yeseva text-[14px] text-[#541f5c]">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="transition-colors hover:text-[#0f1221]">
                        {item.label}
                      </Link>
                    ) : (
                      item.label
                    )}

                    {/* Arrow */}
                    {index < breadcrumbs.length - 1 && (
                      <span className="mx-[6px] inline-block align-middle">
                        <ChevronsRight
                          className="h-[16px] w-[16px]"
                          strokeWidth={2.5}
                        />
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PageBanner;
