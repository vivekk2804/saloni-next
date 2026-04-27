"use client";
import PageBanner from "@/components/BannerPage";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

type BlogPost = {
  date: string;
  author: string;
  comments: number;
  title: string;
  excerpt: string;
  image: string;
};

type PopularPost = {
  title: string;
  date: string;
  comments: number;
  image: string;
};

const BLOG_POSTS: BlogPost[] = [
  {
    date: "20 Jan 2025",
    author: "Sophia Varner",
    comments: 24,
    title: "How to keep your makeup in place all day",
    excerpt:
      "Eu turpis ligula massa neque, et nec quisque molestiae. Sit taciti diam, tortor aliquet sed a dictumst fusce, sed mauris lacus mollis nam integer suscipit, quam erat eu suspendisse, consectetuer aut iaculis orci amet id...",
    image: "/images/blog/thum1.jpg",
  },
  {
    date: "25 Jan 2025",
    author: "Sophia Varner",
    comments: 24,
    title: "Everything's Coming Up Rose Gold",
    excerpt:
      "Eu turpis ligula massa neque, et nec quisque molestiae. Sit taciti diam, tortor aliquet sed a dictumst fusce, sed mauris lacus mollis nam integer suscipit, quam erat eu suspendisse, consectetuer aut iaculis orci amet id...",
    image: "/images/blog/thum2.jpg",
  },
  {
    date: "31 Jan 2025",
    author: "Sophia Varner",
    comments: 24,
    title: "How to return your hair to normal after the Winter",
    excerpt:
      "Eu turpis ligula massa neque, et nec quisque molestiae. Sit taciti diam, tortor aliquet sed a dictumst fusce, sed mauris lacus mollis nam integer suscipit, quam erat eu suspendisse, consectetuer aut iaculis orci amet id...",
    image: "/images/blog/thum3.jpg",
  },
  {
    date: "20 Jan 2025",
    author: "Sophia Varner",
    comments: 24,
    title: "How to keep your makeup in place all day",
    excerpt:
      "Eu turpis ligula massa neque, et nec quisque molestiae. Sit taciti diam, tortor aliquet sed a dictumst fusce, sed mauris lacus mollis nam integer suscipit, quam erat eu suspendisse, consectetuer aut iaculis orci amet id...",
    image: "/images/blog/thum4.jpg",
  },
  {
    date: "25 Jan 2025",
    author: "Sophia Varner",
    comments: 24,
    title: "Everything's Coming Up Rose Gold",
    excerpt:
      "Eu turpis ligula massa neque, et nec quisque molestiae. Sit taciti diam, tortor aliquet sed a dictumst fusce, sed mauris lacus mollis nam integer suscipit, quam erat eu suspendisse, consectetuer aut iaculis orci amet id...",
    image: "/images/blog/thum5.jpg",
  },
  {
    date: "31 Jan 2025",
    author: "Sophia Varner",
    comments: 24,
    title: "How to return your hair to normal after the Winter",
    excerpt:
      "Eu turpis ligula massa neque, et nec quisque molestiae. Sit taciti diam, tortor aliquet sed a dictumst fusce, sed mauris lacus mollis nam integer suscipit, quam erat eu suspendisse, consectetuer aut iaculis orci amet id...",
    image: "/images/blog/thum6.jpg",
  },
  {
    date: "20 Jan 2025",
    author: "Sophia Varner",
    comments: 24,
    title: "How to keep your makeup in place all day",
    excerpt:
      "Eu turpis ligula massa neque, et nec quisque molestiae. Sit taciti diam, tortor aliquet sed a dictumst fusce, sed mauris lacus mollis nam integer suscipit, quam erat eu suspendisse, consectetuer aut iaculis orci amet id...",
    image: "/images/blog/thum7.jpg",
  },
  {
    date: "25 Jan 2025",
    author: "Sophia Varner",
    comments: 24,
    title: "Everything's Coming Up Rose Gold",
    excerpt:
      "Eu turpis ligula massa neque, et nec quisque molestiae. Sit taciti diam, tortor aliquet sed a dictumst fusce, sed mauris lacus mollis nam integer suscipit, quam erat eu suspendisse, consectetuer aut iaculis orci amet id...",
    image: "/images/blog/thum8.jpg",
  },
  {
    date: "31 Jan 2025",
    author: "Sophia Varner",
    comments: 24,
    title: "How to return your hair to normal after the Winter",
    excerpt:
      "Eu turpis ligula massa neque, et nec quisque molestiae. Sit taciti diam, tortor aliquet sed a dictumst fusce, sed mauris lacus mollis nam integer suscipit, quam erat eu suspendisse, consectetuer aut iaculis orci amet id...",
    image: "/images/blog/thum9.jpg",
  },
];

const POPULAR_POSTS: PopularPost[] = [
  {
    title: "Spa treatments for you at home",
    date: "26 Dec",
    comments: 58,
    image: "/images/blog/thum1.jpg",
  },
  {
    title: "Cleaning Tips For Your Big Day",
    date: "18 Dec",
    comments: 35,
    image: "/images/blog/thum2.jpg",
  },
  {
    title: "Cleaning Tips From Cleaners",
    date: "20 Dec",
    comments: 46,
    image: "/images/blog/thum3.jpg",
  },
];

const CATEGORIES = [
  { label: "Hairslyle", count: "28" },
  { label: "Makeup", count: "05" },
  { label: "Skincare", count: "24" },
  { label: "Lamination", count: "15" },
  { label: "Eyebrows", count: "20" },
  { label: "Beauty", count: "15" },
  { label: "Correction", count: "20" },
];

const TAGS = [
  "Coloring",
  "Hairstyle",
  "Makeup",
  "Body Treatments",
  "Facials",
  "Massages",
  "Nail Art",
  "Theraphies",
  "Waxing",
];

const BlogListPage = () => {
  return (
    <>
      <PageBanner
        title="Blog List"
        bgImage="/images/Banner/9.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog List" }]}
      />

      <section className="section-full bg-white px-4 pb-[50px] pt-[80px] max-[767px]:pb-[30px] max-[767px]:pt-[30px]">
        <div className="container mx-auto w-full max-w-[1140px]">
          <div className="section-content">
            <div className="row d-flex -mx-[15px] flex flex-wrap items-start justify-center">
              <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 w-full px-[15px] lg:w-2/3 xl:w-3/4">
                {BLOG_POSTS.map((post, index) => (
                  <article
                    key={`${post.title}-${index}`}
                    className="blog-post date-style-2 relative mb-[30px]">
                    <div className="wt-post-media wt-img-effect zoom-slow group relative block overflow-hidden">
                      <Link href="/Blog">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={960}
                          height={610}
                          className="h-auto w-full object-cover transition-transform duration-[10000ms] group-hover:scale-[2]"
                          priority={index === 0}
                        />
                      </Link>

                      <span className="post-date absolute  left-[20px] top-[20px] z-[1] bg-black px-[15px] py-[10px] text-center text-[12px] font-medium uppercase text-white ">
                        {post.date}
                      </span>
                    </div>

                    <div className="wt-post-info bg-white px-[20px] pb-0 pt-[20px] text-center">
                      <div className="wt-post-meta mb-[20px]">
                        <ul className="m-0 list-none p-0">
                          <li className="post-date inline-block p-0 text-[14px] text-black after:mx-[5px] after:text-[14px] after:text-black after:content-['|']">
                            <span>{post.date}</span>
                          </li>
                          <li className="post-user inline-block p-0 text-[14px] after:mx-[5px] after:text-[14px] after:text-black after:content-['|']">
                            <Link href="/Blog">
                              <span className="text-black "> By </span>
                              <span className="site-text-primary font-semibold text-[#541f5c]">
                                {post.author}
                              </span>
                            </Link>
                          </li>
                          <li className="post-comment inline-block p-0 text-[14px]">
                            <Link href="/Blog">
                              <span className="text-black">Comment </span>
                              <span className="site-text-primary font-semibold text-[#541f5c]">
                                {post.comments}
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="wt-post-title mb-[15px]">
                        <h3 className="post-title m-0 font-yeseva text-[30px] leading-[1.15] text-[#541f5c]">
                          <Link
                            href="/Blog"
                            className="site-text-primary text-[#541f5c] transition-colors hover:text-black">
                            {post.title}
                          </Link>
                        </h3>
                      </div>

                      <div className="wt-post-text m-b15 mb-[15px]">
                        <p className="mb-0 text-[16px] leading-[1.65] text-[#111111]">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="wt-post-readmore mb-0">
                        <Link
                          href="/Blog"
                          className="site-button-link black inline-block text-[16px] font-bold text-[#171717] transition-colors hover:text-black">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 rightSidebar m-b30 static mb-[30px] w-full px-[15px] md:h-fit md:self-start lg:w-1/3 xl:w-1/4 ">
                <aside className="  side-bar bg-orange-light2 bg-[#feede7] px-[10px] pb-[10px] pt-[15px]  md:top-[20px]">
                  <div className="widget p-a10 mb-[20px] p-[10px]">
                    <div className="text-left m-b30 mb-[30px]">
                      <h4 className="widget-title mb-[20px] font-yeseva text-[22px] leading-[1.2] text-[#541f5c]">
                        Search
                      </h4>
                    </div>

                    <div className="search-bx">
                      <form method="post" role="search">
                        <div className="input-group flex w-full">
                          <input
                            name="news-letter"
                            type="text"
                            className="form-control h-[56px] w-full border border-[#e1e6eb] bg-white px-[14px] text-[13px] text-[#111111] outline-none placeholder:text-[#6c7c8b] leading-[20px]"
                            placeholder="Write your text "
                          />
                          <span className="input-group-btn">
                            <button
                              type="submit"
                              className="btn flex h-[56px] w-[56px] items-center justify-center  border-0 bg-white text-black">
                              <Search className="h-[20px] w-[20px]" />
                            </button>
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="widget widget-team p-a10 mb-[20px] p-[10px]">
                    <h4 className="widget-title mb-[20px] font-yeseva text-[22px] leading-[1.2] text-[#541f5c]">
                      About Author
                    </h4>
                    <div className="widget-post m-b15 mb-[15px]">
                      <Image
                        src="/images/Gallery/pic1.jpg"
                        alt="Author"
                        width={420}
                        height={420}
                        className="img-responsive h-auto w-full object-cover"
                      />
                    </div>
                    <div className="team-detail text-center">
                      <h5 className="m-t0 mb-[12px] mt-0 font-yeseva text-[18px] font-medium leading-[1.2] text-[#541f5c]">
                        Tamimm Alows
                      </h5>
                      <p className="mb-0 text-[16px] leading-[1.6] text-[#111111]">
                        We are the dolor sit ametLorem Ipsum Proin gravida nibh
                        vel velit auctor aliquet. Aenean sollicitudin.
                      </p>
                    </div>
                  </div>

                  <div className="widget recent-posts-entry p-a10 mb-[20px] p-[10px]">
                    <div className="text-left m-b30 mb-[30px]">
                      <h4 className="widget-title mb-[20px] font-yeseva font-medium text-[22px] leading-[1.2] text-[#541f5c]">
                        Popular Posts
                      </h4>
                    </div>
                    <div className="section-content">
                      <div className="widget-post-bx">
                        {POPULAR_POSTS.map((post) => (
                          <div
                            key={post.title}
                            className="widget-post clearfix mb-[10px] flex gap-[10px]">
                            <div className="wt-post-media w-[75px] shrink-0">
                              <Image
                                src={post.image}
                                alt={post.title}
                                width={75}
                                height={75}
                                className="h-[75px] w-[75px] object-cover"
                              />
                            </div>
                            <div className="wt-post-info flex-1">
                              <div className="wt-post-header">
                                <h6 className="post-title mb-[10px] mt-0 text-[16px] leading-[1.35] font-semibold text-[#541f5c]">
                                  <Link
                                    href="/Blog"
                                    className="transition-colors text-black">
                                    {post.title}
                                  </Link>
                                </h6>
                              </div>
                              <div className="wt-post-meta mb-[10px]">
                                <ul className="m-0 list-none p-0">
                                  <li className="post-author inline-block text-[12px] font-semibold after:mx-[5px] after:text-black after:content-['|']">
                                    {post.date}
                                  </li>
                                  <li className="post-comment inline-block text-[12px] font-semibold">
                                    {post.comments} Comment
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="widget p-a10 mb-[20px] p-[10px]">
                    <div className="text-left m-b30 mb-[30px]">
                      <h4 className="widget-title mb-[20px] font-yeseva text-[22px] leading-[1.2] font-medium text-[#541f5c]">
                        Follow Us
                      </h4>
                    </div>
                    <div className="widget_social_inks">
                      <ul className="social-icons social-square social-darkest social-md m-0 flex list-none gap-[8px] p-0">
                        <li>
                          <a
                            href="https://www.facebook.com/"
                            className="flex h-[30px] w-[30px] items-left justify-center text-[16px] text-black transition-colors hover:bg-black hover:text-white"
                            aria-label="Facebook">
                            <FaFacebookF />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://x.com/"
                            className="flex h-[30px] w-[30px] items-left justify-center text-[16px] text-black transition-colors hover:bg-black hover:text-white"
                            aria-label="X">
                            <FaXTwitter />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/"
                            className="flex h-[30px] w-[30px] items-left justify-center text-[16px] text-black transition-colors hover:bg-black hover:text-white"
                            aria-label="LinkedIn">
                            <FaLinkedinIn />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com/"
                            className="flex h-[30px] w-[30px] items-left justify-center text-[16px] text-black transition-colors hover:bg-black hover:text-white"
                            aria-label="YouTube">
                            <FaYoutube />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/"
                            className="flex h-[30px] w-[30px] items-left justify-center text-[16px] text-black transition-colors hover:bg-black hover:text-white"
                            aria-label="Instagram">
                            <FaInstagram />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="widget widget_services p-a10 mb-[20px] p-[10px]">
                    <div className="text-left m-b30 mb-[30px]">
                      <h4 className="widget-title mb-[20px] font-yeseva text-[22px] leading-[1.2] font-medium text-[#541f5c]">
                        Categories
                      </h4>
                    </div>
                    <ul className="m-0 list-none p-0">
                      {CATEGORIES.map((item) => (
                        <li
                          key={item.label}
                          className="flex items-center justify-between border-b  border-[#e1e1e1] py-[10px] text-[14px] leading-[20px]">
                          <Link
                            href="/Services"
                            className="transition-colors text-black hover:text-[#541f5c]">
                            {item.label}
                          </Link>
                          <span className="badge bg-transparent text-[14px] font-semibold text-black">
                            {item.count}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="widget widget_tag_cloud p-a10 mb-[20px] p-[10px]">
                    <div className="text-left m-b30 mb-[30px]">
                      <h4 className="widget-title mb-[20px] font-yeseva text-[22px] leading-[1.2] text-[#541f5c]">
                        Tags
                      </h4>
                    </div>
                    <div className="max-w-[235px]">
                      {TAGS.map((tag) => (
                        <Link
                          key={tag}
                          href="/Services"
                          className="mb-[4px] mr-[4px] inline-block border border-[#541f5c] px-[9px] py-[8px] text-[14px] text-[#111111] transition-colors hover:bg-[#541f5c] hover:text-white">
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogListPage;
