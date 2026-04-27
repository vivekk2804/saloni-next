"use client";
import dynamic from "next/dynamic";
import NewHeroSection from "./Hero/NewHeroSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import About from "./About/About";
const Presentation = dynamic(() => import("./Presentation/Presentation"), {
  ssr: false,
});
import Services from "./Services/Services";
import Pricing from "./Pricing/Pricing";
import TeamSection from "./Team/Team";
import Discount from "./Discount/Discount";
import ContactUs from "./Contactus/ContactUs";
import Testimonials from "./Testimonials/Testimonials";
import Blog from "./Blog/Blog";
import Instagram from "./Instagram/instagram";
import Footer from "./Footer/Footer";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <NewHeroSection />
      <About />
      <Presentation />
      <Services />
      <Pricing />
      <Discount />
      <TeamSection />
      <ContactUs />
      <Testimonials />
      <Blog />
      <Instagram />
    </div>
  );
};

export default Home;
