import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const TeamSingleDetailSection = () => {
  return (
    <section className="px-4 bg-[#fff6ef] pb-[50px] pt-[80px] max-[767px]:pb-[30px] max-[767px]:pt-[30px]">
      <div className=" mx-auto w-full max-w-[1140px]">
        <div className="">
          <div className="row justify-content-center grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="col-lg-5 col-md-12 col-sm-12 m-b30 lg:col-span-5">
              <div className="wt-team-1 group">
                <div className="wt-media relative overflow-hidden max-w-[690px] mx-auto text-center">
                  <Image
                    src="/images/teamExpert/pic1.jpg"
                    alt="Bethany Bryan"
                    width={453}
                    height={500}
                    className="h-auto w-full sm:mx-auto sm:w-[452px] object-cover"
                  />

                  <div className="team-social-center absolute bottom-[40px] top-[10px] right-full w-[calc(100%-20px)] overflow-hidden bg-[rgba(255,246,239,0.8)] transition-all duration-500 ease-linear group-hover:right-[10px]">
                    <ul className="team-social-bar absolute bottom-0 m-0 list-none overflow-hidden p-0 text-left">
                      {[
                        {
                          label: "Facebook",
                          href: "https://www.facebook.com/",
                        },
                        {
                          label: "Instagram",
                          href: "https://www.instagram.com/",
                        },
                        { label: "X", href: "https://x.com/" },
                      ].map((item) => (
                        <li
                          key={item.label}
                          className="relative block pb-1 transition-all duration-500 hover:ml-[30px] before:absolute before:left-[-30px] before:top-1/2 before:h-[2px] before:w-[30px] before:-translate-y-1/2 before:bg-[#111111]">
                          <a
                            href={item.href}
                            className="inline-block bg-[#111111] px-3 py-[5px] text-center text-[11px] uppercase tracking-[1px] text-white">
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="wt-info relative -top-[30px] sm:mx-10 mx-5 -mb-[30px] bg-white p-[30px]">
                  <div className="team-detail text-center">
                    <h3 className="m-t0 mb-[10px] font-yeseva text-[30px] leading-[1.2] text-[#541f5c] max-[540px]:text-[22px]">
                      Bethany Bryan
                    </h3>
                    <span className="title-style-2 team-position font-caveat text-[30px] text-[#111111]">
                      Makeup
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:mx-6 col-lg-7 col-md-12 col-sm-12 m-b30 lg:col-span-7">
              <div className="wt-team-1-single">
                <h3 className="m-t0 mb-5 font-yeseva text-[30px] leading-[1.2] text-[#541f5c] max-[540px]:text-[22px]">
                  About Me
                </h3>

                <ul className="wt-team-1-single-info mb-6 list-none p-0 sm:pt-1 text-[16px] leading-[1.45] text-[#111111]">
                  <li>
                    <span className="inline-block w-[140px] pr-[30px] font-semibold tracking-[1px] text-black max-[640px]:block max-[640px]:w-auto max-[640px]:pr-0">
                      Position
                    </span>
                    <span>Makup Artist</span>
                  </li>
                  <li>
                    <span className="inline-block w-[140px] pr-[30px] font-semibold tracking-[1px] text-black max-[640px]:block max-[640px]:w-auto max-[640px]:pr-0">
                      Level
                    </span>
                    <span>High</span>
                  </li>
                  <li>
                    <span className="inline-block w-[140px] pr-[30px] font-semibold tracking-[1px] text-black max-[640px]:block max-[640px]:w-auto max-[640px]:pr-0">
                      Experience
                    </span>
                    <span>5 Year</span>
                  </li>
                  <li>
                    <span className="inline-block w-[140px] pr-[30px] font-semibold tracking-[1px] text-black max-[640px]:block max-[640px]:w-auto max-[640px]:pr-0">
                      Phone
                    </span>
                    <span>987 765 4321</span>
                  </li>
                  <li>
                    <span className="inline-block w-[140px] pr-[30px] font-semibold tracking-[1px] text-black max-[640px]:block max-[640px]:w-auto max-[640px]:pr-0">
                      Email
                    </span>
                    <span>bethany-bryan@example.com</span>
                  </li>
                </ul>

                <p className="mb-5 font-poppins lg:w-[635px]  text-[16px] leading-[1.45] text-[#111111]">
                  Mauris tellus, et integer mauris elit tincidunt, pede at,
                  lorem fusce pede vitae, egestas nulla ipsum ut arcu urna. Leo
                  metus dolores quis. Purus ac vitae in, urna luctus vulputate
                  erat leo tellus sed. Nisl suspendisse arcu a sollicitudin
                  eros. Amet tellus, ut et fusce, non et proin a magna aliquam.
                  Pellentesque a pellentesque sed habitasse turpis sed. In ipsum
                  eu aliquet lorem, elementum ac et posuere debitis. Vivamus
                  nulla in laboriosam pulvinar.
                </p>

                <blockquote className="relative my-[40px] border-none px-[40px] pl-[70px] text-left italic text-black max-[640px]:px-[20px] max-[640px]:pt-[80px]">
                  <FaQuoteLeft className="font-20 absolute left-0 top-0 text-[50px]  leading-[50px] text-[rgba(249,107,57,0.5)]" />
                  <h3 className="m-0 font-yeseva text-[22px] max-w-[525px] leading-[1.2] text-[#541f5c] max-[640px]:text-[22px]">
                    I’m glad to work with the friendly and qualified team of
                    beauty professionals!
                  </h3>
                </blockquote>
                <div className="p-t15 text-left my-10 pb-5 lg:my-10">
                  <strong className=" lg:px-[40px] pl-5 lg:pl-[70px] font-bold  text-[18px] italic text-black">
                    Jesse D. Caballero
                  </strong>
                  <span className="ml-2 inline-block text-[14px] pl-2 leading-[30px] text-black not-italic">
                    Makeup Client
                  </span>
                </div>

                <h3 className="mb-5 font-yeseva text-[30px] leading-[1.2] text-[#541f5c] max-[540px]:text-[22px]">
                  Biography:
                </h3>

                <ul className=" font-medium mb-6 list-none p-0 text-[16px] leading-[1.45] text-[#111111]">
                  {[
                    "Dolore magna aliquyam erat, sed diam.",
                    "Pellentesque a pellentesque sed habitasse turpis sed.",
                    "Nisl suspendisse arcu a sollicitudin eros.",
                  ].map((item) => (
                    <li
                      key={item}
                      className="relative mb-[5px] pl-[35px] font-semibold before:absolute before:left-0 before:h-6 before:w-6 before:bg-[url('/images/sep-leaf-left.png')] before:bg-[length:100%_100%] before:bg-no-repeat">
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mb-6 text-[16px] leading-[1.45] text-[#111111]">
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe eveniet ut et voluptates repudiandae sint
                  et molestiae non recusandae. Itaque earum rerum hic tenetur a
                  sapie
                </p>

                <h3 className="mb-5 font-yeseva text-[30px] leading-[1.2] text-[#541f5c] max-[540px]:text-[22px]">
                  Professional Life:
                </h3>

                <p className="mb-0 text-[16px] lg:w-[635px] leading-[1.45] text-[#111111]">
                  Congue conubia tellus mauris, a felis phasellus nonummy, et
                  fringilla, velit lobortis risus curabitur tempus. Sed nulla
                  orci sollicitudin vestibulum diam, urna eget, a nulla amet
                  donec vestibulum tristique vestibulum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSingleDetailSection;
