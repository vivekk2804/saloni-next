import PageBanner from "@/components/BannerPage";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type BlogPost = {
  date: string;
  author: string;
  comments: number;
  title: string;
  image: string;
  href: string;
};

const posts: BlogPost[] = [
  {
    date: "20 JAN 2025",
    author: "Sophia Varner",
    comments: 24,
    title: "How to keep your makeup in place all day",
    image: "/images/blog/thum1.jpg",
    href: "/blog/post",
  },
  {
    date: "25 JAN 2025",
    author: "Sophia Varner",
    comments: 24,
    title: "Everything’s Coming Up Rose Gold",
    image: "/images/blog/thum2.jpg",
    href: "/blog/post",
  },
  {
    date: "31 JAN 2025",
    author: "Sophia Varner",
    comments: 24,
    title: "How to return your hair to normal after the Winter",
    image: "/images/blog/thum3.jpg",
    href: "/blog/post",
  },
  {
    date: "20 JAN 2025",
    author: "Sophia Varner",
    comments: 24,
    title: "How to keep your makeup in place all day",
    image: "/images/blog/thum4.jpg",
    href: "/blog/post",
  },
  {
    date: "25 JAN 2025",
    author: "Sophia Varner",
    comments: 24,
    title: "Everything’s Coming Up Rose Gold",
    image: "/images/blog/thum5.jpg",
    href: "/blog/post",
  },
  {
    date: "31 JAN 2025",
    author: "Sophia Varner",
    comments: 24,
    title: "How to return your hair to normal after the Winter",
    image: "/images/blog/thum6.jpg",
    href: "/blog/post",
  },
  {
    date: "20 JAN 2025",
    author: "Sophia Varner",
    comments: 24,
    title: "How to keep your makeup in place all day",
    image: "/images/blog/thum7.jpg",
    href: "/blog/post",
  },
  {
    date: "25 JAN 2025",
    author: "Sophia Varner",
    comments: 24,
    title: "Everything’s Coming Up Rose Gold",
    image: "/images/blog/thum8.jpg",
    href: "/blog/post",
  },
  {
    date: "31 JAN 2025",
    author: "Sophia Varner",
    comments: 24,
    title: "How to return your hair to normal after the Winter",
    image: "/images/blog/thum9.jpg",
    href: "/blog/post",
  },
];

const Grid = () => {
  return (
    <>
      <PageBanner
        title="Blog Grid"
        bgImage="/images/Banner/9.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog Grid" }]}
      />
      <section className="bg-white px-4 pt-18 pb-[54px] sm:px-6 lg:px-8 lg:pb-[64px]">
        {/* GRID */}
        <div className="  mx-auto max-w-[1250px]">
          <div className=" flex grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post, index) => (
              <article key={index} className="group text-center">
                {/* IMAGE */}
                <div className="relative h-[277px] w-[396px] overflow-hidden ">
                  <Link href={post.href} className="block h-full w-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover object-center transition-transform duration-13000 group-hover:scale-210"
                      priority={index === 0}
                    />
                  </Link>

                  {/* DATE BADGE */}
                  <div className="absolute left-6 top-6 inline-flex h-[40px] min-w-[90px] items-center justify-center bg-black px-5 text-[12px] font-semibold text-white">
                    {post.date}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="pt-8">
                  {/* META */}
                  <p className="text-[14px] text-[#111111]">
                    <span>By </span>
                    <Link
                      href={post.href}
                      className="font-semibold text-[#5b2368] hover:text-[#111111] transition-colors">
                      {post.author}
                    </Link>

                    <span className="mx-2">|</span>

                    <Link
                      href={post.href}
                      className="hover:text-[#5b2368] transition-colors">
                      <span>Comment </span>
                      <span className="font-semibold text-[#5b2368]">
                        {post.comments}
                      </span>
                    </Link>
                  </p>

                  {/* TITLE */}
                  <h3 className="mt-6 font-yeseva text-[30px] leading-[1.2] text-[#541f5c] lg:w-[420px] mx-auto">
                    <Link
                      href={post.href}
                      className="hover:text-[#111111] transition-colors duration-300">
                      {post.title}
                    </Link>
                  </h3>

                  {/* READ MORE */}
                  <Link
                    href={post.href}
                    className="group/link mt-5 inline-flex items-center gap-2 text-[16px] font-semibold font-poppins text-[#111111] transition-colors duration-300 hover:text-[#5b2368]">
                    <span>Read More</span>

                    <span className="relative flex h-[10px] w-[18px] overflow-hidden">
                      <ArrowRight
                        size={16}
                        className="absolute top-1/2 -translate-y-1/2 -translate-x-full transition-transform duration-300 group-hover/link:translate-x-0"
                      />
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Grid;
