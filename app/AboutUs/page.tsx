"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import AboutSection from "@/Home/About/About";
const Presentation = dynamic(() => import("@/Home/Presentation/Presentation"), {
  ssr: false,
});
import ClientLogo from "@/components/ClientLogo";
import PageBanner from "@/components/BannerPage";
import ServicesPage from "@/components/ServicesPage";

export default function AboutUsPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        bgImage="/images/Banner/3.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <AboutSection />
      <Presentation />
      <section
        className="section-full overlay-wraper relative overflow-hidden bg-cover  px-4 py-[80px] max-[767px]:py-[30px]"
        style={{ backgroundImage: "url('/images/bg-2.jpg')" }}>
        <div className="overlay-main site-bg-primary opacity-09 absolute inset-0 bg-[#541f5c] opacity-90" />

        <div className="container relative z-10 mx-auto w-full max-w-[1140px]">
          <div className="section-content">
            <div className="info-video-section text-white text-center">
              <div className="info-video-title max-w700 ml-auto mr-auto mx-auto max-w-[700px]">
                <h4 className="mb-4 font-yeseva text-[22px] leading-[1.2] text-white">
                  New york since 2012
                </h4>

                <h2 className="wt-title m-t0 mt-0 font-yeseva text-[22px] leading-[1.05] text-white sm:text-[42px]">
                  About Our Story
                </h2>

                <p className="mx-auto mb-0 mt-6 max-w-[700px] text-[16px] leading-[1.6] text-white">
                  Praesent id odio quis massa aliquet dictum ut eget erat.
                  Aliquam erat volutpat. Pellentesque sit amet congue tellus.
                </p>

                <div className="mt-7 sm:mt-8">
                  <Link
                    href="/HeroForm"
                    className="site-button site-btn-effect group inline-flex h-[62px] min-w-[305px] items-center justify-center overflow-hidden bg-[#0e1118] px-10 text-[14px] font-medium tracking-[1px] text-transparent transition-all duration-300 hover:bg-[#541f5c] [text-shadow:0_0_0_#fff,400px_0_0_#fff] hover:[text-shadow:-400px_0_0_#fff,0_0_0_#fff]">
                    Make An Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServicesPage />
      <ClientLogo />
    </>
  );
}
