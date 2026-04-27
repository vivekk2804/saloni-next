import PageBanner from "@/components/BannerPage";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { FaQuoteLeft } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

type PopularPost = {
  title: string;
  date: string;
  comments: number;
  image: string;
};

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

const BlogPostPage = () => {
  return (
    <>
      <PageBanner
        title="Blog Single"
        bgImage="/images/Banner/9.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog Single" }]}
      />

      <section className="section-full bg-white px-4 pb-[50px] pt-[80px] max-[767px]:pb-[30px] max-[767px]:pt-[30px]">
        <div className="container mx-auto w-full max-w-[1140px]">
          <div className="section-content">
            <div className="row d-flex -mx-[15px] flex flex-wrap items-start justify-center">
              <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 m-b30 mb-[30px] w-full px-[15px] lg:w-2/3 xl:w-3/4">
                <article className="blog-post date-style-2 blog-lg relative mb-[30px]">
                  <div className="wt-post-media wt-img-effect zoom-slow group relative block overflow-hidden">
                    <Image
                      src="/images/blog/thum1.jpg"
                      alt="How to keep your makeup in place all day"
                      width={960}
                      height={610}
                      className="h-auto w-full object-cover transition-transform duration-[10000ms] group-hover:scale-[2]"
                      priority
                    />
                    <span className="post-date absolute left-[20px] top-[20px] z-[1] bg-black px-[15px] py-[10px] text-center text-[12px] font-medium uppercase text-white">
                      20 Jan 2025
                    </span>
                  </div>

                  <div className="wt-post-info bg-white pt-[30px]">
                    <div className="wt-post-meta mb-[20px]">
                      <ul className="m-0 list-none p-0">
                        <li className="post-date inline-block p-0 text-[14px] after:mx-[5px] after:text-[14px] after:text-black after:content-['|']">
                          <span>20 Jan 2025</span>
                        </li>
                        <li className="post-user inline-block p-0 text-[14px] after:mx-[5px] after:text-[14px] after:text-black after:content-['|']">
                          By{" "}
                          <span className="site-text-primary font-semibold text-[#541f5c]">
                            Sophia Varner
                          </span>
                        </li>
                        <li className="post-comment inline-block p-0 text-[14px]">
                          Comment{" "}
                          <span className="site-text-primary font-semibold text-[#541f5c]">
                            24
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="wt-post-title mb-[15px]">
                      <h3 className="post-title site-text-primary m-0 font-yeseva text-[30px] leading-[1.15] text-[#541f5c]">
                        How to keep your makeup in place all day
                      </h3>
                    </div>

                    <div className="wt-post-text">
                      <p className="mb-[20px] text-[16px] leading-[1.65] text-[#111111]">
                        Blandit feugiat porttitor. Diam amet fermentum, donec ut
                        egestas sit. Sit odio eget molestie eros, nisl pulvinar
                        eros curabitur, neque eget. Hac a per cras purus
                        elementum. Neque augue, sodales vel in sed sed,
                        ultricies dolor. Ac orci sed eros consectetuer
                        adipiscing, velit wisi donec. Urna diam laoreet quam
                        proin eu nulla, commodo maecenas, maecenas dictum sed
                        etiam in, pellentesque congue, ultrices erat urna non
                        vel. Odio non ultricies non maecenas blanditiis nam,
                        suspendisse magna vel auctor phase llus, quam proin cum,
                        vitae duis magna libero. Quos sapien orci neque nulla
                        pretium purus, parturient wisi, a felis sed adipiscing
                        sed wisi eget, vel id dolor donec at, eu at a. Non at
                        egestas duis quis, place rat leo eu pharetra nullam
                        habitasse mollis, pellentesque commodo consectetuer
                        laoreet ipsum wisi.
                      </p>

                      <blockquote className="relative my-[40px] border-none px-[40px] pl-[70px] text-left italic text-black max-[640px]:px-[20px] max-[640px]:pt-[80px]">
                        <FaQuoteLeft className="font-20 absolute left-0 top-0 text-[50px] leading-[50px] text-[rgba(249,107,57,0.5)]" />
                        <h3 className="m-0 font-yeseva text-[30px] leading-[1.2] text-[#541f5c] max-[640px]:text-[22px]">
                          I think it&apos;s important people see themselves in
                          film, but it&apos;s even more important they see
                          people they maybe don&apos;t know as well.
                        </h3>
                      </blockquote>

                      <p className="mb-0 text-[16px] leading-[1.65] text-[#111111]">
                        An eros argumentum vel, elit diceret duo eu, quo et
                        aliquid ornatus delicatissimi. Cu nam tale ferri
                        utroque, eu habemus albucius mel, cu vidit possit
                        ornatus eum. Eu ius postulant salutatus definitionem, an
                        e trud erroribus explicari. Graeci viderer qui ut, at
                        habeo facer solet usu. Pri choro pertinax indoctum ne,
                        ad partiendo persecuti forensibus est.
                      </p>
                    </div>
                  </div>
                </article>

                <div
                  className="clear bg-orange-light2 p-a30 bg-[#feede7] p-[30px] max-[767px]:px-[15px] max-[767px]:pb-[15px]"
                  id="comment-list">
                  <div className="comments-area p-0" id="comments">
                    <h2 className="comments-title m-t0 mb-[24px] mt-0 font-yeseva text-[20px] uppercase text-[#541f5c]">
                      2 Comments
                    </h2>

                    <div>
                      <ol className="comment-list list-none p-0">
                        <li className="comment relative p-0">
                          <div className="comment-body relative mb-[30px] border-b border-[#eee] bg-white pb-[30px] pl-[150px] pr-[30px] pt-[30px] max-[767px]:ml-[30px] max-[767px]:pl-[60px] max-[480px]:ml-[10px] max-[380px]:m-0 max-[380px]:p-[20px]">
                            <div className="comment-author vcard mb-[10px] block">
                              <Image
                                className="avatar photo absolute left-[30px] top-[30px] h-[90px] w-[90px] border-2 border-[#f2f2f2] bg-white transition-colors duration-500 hover:border-[#541f5c] max-[767px]:left-[-35px] max-[767px]:h-[70px] max-[767px]:w-[70px] max-[480px]:left-[-15px] max-[480px]:top-[12px] max-[480px]:h-[60px] max-[480px]:w-[60px] max-[380px]:static max-[380px]:mb-[20px]"
                                src="/images/testimonials/pic1.jpg"
                                alt="Janice Brown"
                                width={90}
                                height={90}
                              />
                              <cite className="fn inline-block text-[18px] font-bold not-italic text-black">
                                Janice Brown
                              </cite>
                              <span className="says hidden font-semibold text-[#999]">
                                says:
                              </span>
                            </div>

                            <div className="comment-meta mb-[5px] text-[12px]">
                              <a href="#" className="text-black">
                                15 Jan 2025
                              </a>
                            </div>

                            <p className="mb-[5px] text-[16px] leading-[1.6] text-[#111111]">
                              Sirloin leberkas jowl. Ut dolore excepteur aliqua
                              eu brisket filet chuck short ribs est. Chicken
                              jowl ad, excepteur.
                            </p>

                            <div className="reply text-left">
                              <a
                                href="#"
                                className="comment-reply-link relative text-[14px] font-bold text-[#541f5c] transition-colors hover:text-black">
                                Read More
                              </a>
                            </div>
                          </div>

                          <ol className="children ml-[80px] list-none max-[767px]:ml-[20px]">
                            <li className="comment odd parent p-0">
                              <div className="comment-body relative mb-[30px] border-b border-[#eee] bg-white pb-[30px] pl-[150px] pr-[30px] pt-[30px] max-[767px]:ml-[30px] max-[767px]:pl-[60px] max-[480px]:ml-[10px] max-[380px]:m-0 max-[380px]:p-[20px]">
                                <div className="comment-author vcard mb-[10px] block">
                                  <Image
                                    className="avatar photo absolute left-[30px] top-[30px] h-[90px] w-[90px] border-2 border-[#f2f2f2] bg-white transition-colors duration-500 hover:border-[#541f5c] max-[767px]:left-[-35px] max-[767px]:h-[70px] max-[767px]:w-[70px] max-[480px]:left-[-15px] max-[480px]:top-[12px] max-[480px]:h-[60px] max-[480px]:w-[60px] max-[380px]:static max-[380px]:mb-[20px]"
                                    src="/images/testimonials/pic3.jpg"
                                    alt="Betty Riley"
                                    width={90}
                                    height={90}
                                  />
                                  <cite className="fn inline-block text-[18px] font-bold not-italic text-black">
                                    Betty Riley
                                  </cite>
                                  <span className="says hidden font-semibold text-[#999]">
                                    says:
                                  </span>
                                </div>

                                <div className="comment-meta mb-[5px] text-[12px]">
                                  <a href="#" className="text-black">
                                    19 Jan 2025
                                  </a>
                                </div>

                                <p className="mb-[5px] text-[16px] leading-[1.6] text-[#111111]">
                                  Sirloin leberkas jowl. Ut dolore excepteur
                                  aliqua eu brisket filet chuck short ribs est.
                                  Chicken jowl ad, excepteur.
                                </p>

                                <div className="reply text-left">
                                  <a
                                    href="#"
                                    className="comment-reply-link relative text-[14px] font-bold text-[#541f5c] transition-colors hover:text-black">
                                    Read More
                                  </a>
                                </div>
                              </div>
                            </li>
                          </ol>
                        </li>
                      </ol>

                      <div
                        className="comment-respond m-t30 mt-[30px]"
                        id="respond">
                        <h2
                          className="comment-reply-title m-0 font-yeseva text-[20px] uppercase text-[#541f5c]"
                          id="reply-title">
                          Leave a Comments
                          <small>
                            <a
                              className="hidden"
                              href="#"
                              id="cancel-comment-reply-link"
                              rel="nofollow">
                              Cancel reply
                            </a>
                          </small>
                        </h2>

                        <form
                          className="comment-form mt-[20px]"
                          id="commentform"
                          method="post">
                          <p className="comment-form-author mb-[20px] w-full px-[15px] md:float-left md:w-1/2">
                            <label htmlFor="author" className="mb-[10px] block">
                              Name <span className="required">*</span>
                            </label>
                            <input
                              className="form-control h-[40px] w-full border border-[#ccc] bg-white px-[10px] text-[13px] leading-[20px] outline-none placeholder:text-black"
                              id="author"
                              name="user-comment"
                              placeholder="Author"
                              type="text"
                            />
                          </p>

                          <p className="comment-form-email mb-[20px] w-full px-[15px] md:float-left md:w-1/2">
                            <label htmlFor="email" className="mb-[10px] block">
                              Email <span className="required">*</span>
                            </label>
                            <input
                              className="form-control h-[40px] w-full border border-[#ccc] bg-white px-[10px] text-[13px] leading-[20px] outline-none placeholder:text-black"
                              id="email"
                              name="email"
                              placeholder="Email"
                              type="text"
                            />
                          </p>

                          <p className="comment-form-url mb-[20px] w-full px-[15px]">
                            <label htmlFor="url" className="mb-[10px] block">
                              Website
                            </label>
                            <input
                              className="form-control h-[40px] w-full border border-[#ccc] bg-white px-[10px] text-[13px] leading-[20px] outline-none placeholder:text-black"
                              id="url"
                              name="url"
                              placeholder="Website"
                              type="text"
                            />
                          </p>

                          <p className="comment-form-comment mb-[20px] w-full px-[15px]">
                            <label
                              htmlFor="comment"
                              className="mb-[10px] block">
                              Comment
                            </label>
                            <textarea
                              className="form-control h-[120px] w-full resize-none border border-[#ccc] bg-white px-[10px] py-[10px] text-[13px] leading-[20px] outline-none placeholder:text-black"
                              id="comment"
                              name="comment"
                              placeholder="Comment"
                              rows={8}
                            />
                          </p>

                          <p className="form-submit mb-0 w-full px-[15px]">
                            <button
                              className="site-button-secondry site-btn-effect inline-block bg-[#541f5c] px-[40px] py-[15px] text-[14px] tracking-[1px] text-white transition-colors hover:bg-[#111111]"
                              type="button">
                              Submit
                            </button>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 rightSidebar m-b30 mb-[30px] w-full px-[15px] md:h-fit md:self-start lg:w-1/3 xl:w-1/4 static">
                <aside className="side-bar bg-orange-light2 bg-[#feede7] px-[10px] pb-[10px] pt-[15px] md:sticky md:top-[20px]">
                  <div className="widget p-a10 mb-[20px] p-[10px] ">
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
                            className="form-control h-[56px] w-full border border-[#e1e6eb] bg-white px-[14px] text-[13px] leading-[20px] text-[#111111] outline-none placeholder:text-[#6c7c8b]"
                            placeholder="Write your text "
                          />
                          <span className="input-group-btn">
                            <button
                              type="submit"
                              className="btn flex h-[56px] w-[56px] items-center justify-center border-0 bg-white text-black">
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
                                  <Link href="/BlogPost" className="text-black">
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
                      <h4 className="widget-title mb-[20px] font-yeseva text-[22px] font-medium leading-[1.2] text-[#541f5c]">
                        Follow Us
                      </h4>
                    </div>
                    <div className="widget_social_inks">
                      <ul className="social-icons social-square social-darkest social-md m-0 flex list-none gap-[8px] p-0">
                        <li>
                          <a
                            href="https://www.facebook.com/"
                            className="flex h-[30px] w-[30px] items-center justify-center text-[16px] text-black transition-colors hover:bg-black hover:text-white"
                            aria-label="Facebook">
                            <FaFacebookF />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://x.com/"
                            className="flex h-[30px] w-[30px] items-center justify-center text-[16px] text-black transition-colors hover:bg-black hover:text-white"
                            aria-label="X">
                            <FaXTwitter />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/"
                            className="flex h-[30px] w-[30px] items-center justify-center text-[16px] text-black transition-colors hover:bg-black hover:text-white"
                            aria-label="LinkedIn">
                            <FaLinkedinIn />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com/"
                            className="flex h-[30px] w-[30px] items-center justify-center text-[16px] text-black transition-colors hover:bg-black hover:text-white"
                            aria-label="YouTube">
                            <FaYoutube />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/"
                            className="flex h-[30px] w-[30px] items-center justify-center text-[16px] text-black transition-colors hover:bg-black hover:text-white"
                            aria-label="Instagram">
                            <FaInstagram />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="widget widget_services p-a10 mb-[20px] p-[10px]">
                    <div className="text-left m-b30 mb-[30px]">
                      <h4 className="widget-title mb-[20px] font-yeseva text-[22px] font-medium leading-[1.2] text-[#541f5c]">
                        Categories
                      </h4>
                    </div>
                    <ul className="m-0 list-none p-0">
                      {CATEGORIES.map((item) => (
                        <li
                          key={item.label}
                          className="flex items-center justify-between border-b border-[#e1e1e1] py-[10px] text-[14px] leading-[20px]">
                          <Link
                            href="/Services"
                            className="transition-colors hover:text-[#541f5c]">
                            {item.label}
                          </Link>
                          <span className="badge bg-transparent text-[14px] font-semibold text-[#111111]">
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

export default BlogPostPage;
