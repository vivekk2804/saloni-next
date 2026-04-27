"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

// Safely register GSAP plugins only on the client side
if (typeof window !== "undefined") {
  gsap.registerPlugin(MotionPathPlugin);
}

const socialLinks = [
  { icon: FaFacebookF, name: "facebook" },
  { icon: FaXTwitter, name: "x" },
  { icon: FaYoutube, name: "youtube" },
  { icon: FaInstagram, name: "instagram" },
];

const heroImages = [
  "images/slide1.jpg",
  "images/slide2.jpg",
  "images/slide3.jpg",
];

const NewHeroSection = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const circleAnim = useRef<any>(null);
  const heroTl = useRef<gsap.core.Timeline | null>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const [showPreviewRight, setShowPreviewRight] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // NEW

  const router = useRouter();

  // Flag as mounted ONLY after initial hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // ENTER ANIMATION
  const animateHero = () => {
    if (!frameRef.current) return;

    // kill previous circular animation properly
    circleAnim.current?.kill();
    heroTl.current?.kill();

    // reset frame (IMPORTANT)
    gsap.set(frameRef.current, {
      x: 0,
      y: -150,
      opacity: 0,
    });

    gsap.set(".top-text", { y: 60, opacity: 0 });
    gsap.set(".main-heading", { y: 60, opacity: 0 });
    gsap.set(".desc", { y: 60, opacity: 0 });
    gsap.set(buttonRef.current, { y: 60, opacity: 0 });

    const tl = gsap.timeline();
    heroTl.current = tl;

    tl.to(".top-text", { y: 0, opacity: 1, duration: 0.6 });
    tl.to(".main-heading", { y: 0, opacity: 1, duration: 0.7 }, "-=0.3");

    // FRAME ANIMATION (FIXED)
    tl.to(
      frameRef.current,
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        onComplete: () => {
          const radius = 4;

          // store circular animation
          circleAnim.current = gsap.to(
            {},
            {
              duration: 3,
              repeat: -1,
              ease: "none",
              onUpdate: function () {
                const progress = this.progress() * Math.PI * 2;

                const x = Math.cos(progress) * radius;
                const y = Math.sin(progress) * radius;

                if (!frameRef.current) return;
                gsap.set(frameRef.current, { x, y });
              },
            },
          );
        },
      },
      "-=1",
    );

    tl.to(".desc", { y: 0, opacity: 1, duration: 0.7 }, "-=0.6");

    if (buttonRef.current) {
      tl.to(buttonRef.current, { y: 0, opacity: 1, duration: 0.5 }, "-=0.5");
    }
  };

  // EXIT ANIMATION
  const exitAnimation = (callback: () => void) => {
    const targets = [
      ".top-text",
      ".main-heading",
      ".desc",
      buttonRef.current,
      frameRef.current,
    ].filter(Boolean);

    if (!targets.length) {
      callback();
      return;
    }

    gsap.to(targets, {
      y: -80,
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: callback,
    });
  };

  // CHANGE SLIDE
  const changeSlide = (index: number) => {
    exitAnimation(() => {
      setCurrentImage(index);
      setTimeout(() => {
        animateHero();
      }, 50);
    });
  };

  // Only run animations if the component has successfully mounted/hydrated
  useEffect(() => {
    if (!isMounted) return;

    animateHero();

    const interval = setInterval(() => {
      changeSlide((currentImage + 1) % heroImages.length);
    }, 5000);

    return () => {
      clearInterval(interval);
      circleAnim.current?.kill();
      heroTl.current?.kill();
    };
  }, [isMounted, currentImage]);

  return (
    <main className="bg-white -mt-[5px] lg:px-5 lg:pb-2 lg:pt-[89px] mx-auto lg:flex gap-2">
      {/* SOCIAL LINKS */}
      <div className="hidden lg:flex flex-col items-center justify-center gap-3 lg:mr-0 lg:mt-4">
        <div className="w-[0.5px] h-[45px] bg-black lg:mt-10" />
        {socialLinks.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="cursor-pointer">
              <Icon size={16} />
            </div>
          );
        })}
        <div className="w-[0.5px] h-[45px] bg-black" />
      </div>

      {/* HERO */}
      <div className="mx-auto flex max-w-[1920px] w-full bg-white overflow-hidden lg:ml-2 h-[90vh] sm:h-[95vh] lg:h-[80vh] relative">
        <img
          src={heroImages[currentImage]}
          alt="Styled hair model"
          className="w-full h-full object-cover scale-[1.06]"
        />
        {/* CENTER BOTTOM PAGINATION */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex flex-row gap-3">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className="relative group flex flex-col items-center"
              onClick={() => changeSlide(index)}>
              {/* HOVER IMAGE (FLIP EFFECT) */}
              <div className="absolute bottom-[200%] w-[140px] h-[70px] perspective-distant">
                <div
                  className={`w-full h-full transition-all duration-500 transform origin-bottom
                      rotate-x-[-90deg] opacity-0
                      group-hover:rotate-x-0 group-hover:opacity-100`}>
                  <img
                    src={img}
                    alt="preview"
                    className="w-full h-full object-cover shadow-lg"
                  />
                </div>
              </div>

              {/* PAGINATION BOX */}
              <div
                className={`border-[5px] border-white flex items-center justify-center cursor-pointer transition-all duration-300
        ${
          currentImage === index
            ? "bg-white scale-110 shadow-md"
            : "bg-white/70 shadow-md hover:shadow-lg"
        }`}>
                <div
                  className={`w-[3px] h-[3px] 
          ${currentImage === index ? "bg-black" : "bg-black/50"}
        `}
                />
              </div>
            </div>
          ))}
        </div>
        {/* ARROWS */}
        <div className="hidden lg:block">
          <div className="absolute left-0 bottom-[30%] -translate-y-1/2 z-20 group">
            {/* PREVIEW IMAGE */}
            <div
              className={`absolute left-[90px] top-1/2 -translate-y-1/2 w-[120px] h-[100px] overflow-hidden transition-all duration-300 
                  ${showPreview ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"}`}>
              <img
                key={currentImage}
                src={
                  heroImages[
                    (currentImage - 1 + heroImages.length) % heroImages.length
                  ]
                }
                alt="prev preview"
                className="w-full h-full object-cover"
              />
            </div>

            {/* BUTTON */}
            {/* <button
              onClick={() =>
                changeSlide(
                  (currentImage - 1 + heroImages.length) % heroImages.length,
                )
              }
              onMouseEnter={() => setShowPreview(true)}
              onMouseLeave={() => setShowPreview(false)}
              className="relative bg-[rgba(0,0,0,0.2)] hover:bg-white transition-all duration-300 px-6 py-6">
              <ChevronLeft
                size={50}
                strokeWidth={1}
                className="text-white hover:text-gray-400"
              />
            </button> */}
          </div>
        </div>
        <div className="absolute top-[52%] sm:top-[56%] md:top-[48%] left-[7px] sm:left-[7px] lg:left-72 -translate-y-1/2">
          <div className="relative">
            <div
              ref={frameRef}
              className="frame absolute inset-0 w-[179px] h-[257px] sm:h-[424px] sm:w-[326px] md:w-[280px] md:h-[380px] border-[12px] sm:border-[14px] border-white z-0"
            />

            <div className="relative z-10 p-5 sm:p-8 lg:p-12">
              <p className="top-text sm:text-[42px] text-[22px] text-black font-[caveat] font-thin">
                Vivid Colors
              </p>
              <h1 className="main-heading text-[#541f5c] text-[32px] sm:text-[72px] lg:text-[60px] font-yeseva uppercase">
                The New Style
              </h1>
              <p className="desc mt-0 text-[14px] w-[300px] sm:text-[22px] sm:w-150 lg:w-120 lg:text-base text-black ">
                You dream about sleek, healthy looking hair that looks picture
                perfect, ready to rock on any occasion?
              </p>
              <button
                ref={buttonRef}
                onClick={() => router.push("/AboutUs")}
                className="hero-button lg:mt-4 mt-8 bg-black px-4 py-2 sm:px-8 sm:py-3 text-sm text-white hover:bg-[#541f5c]">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="absolute right-0 bottom-[30%] -translate-y-1/2 z-20 group">
            <div
              className={`absolute right-[90px] top-1/2 -translate-y-1/2 w-[120px] h-[100px] overflow-hidden transition-all duration-300 
                  ${showPreviewRight ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"}`}>
              <img
                key={currentImage}
                src={
                  heroImages[
                    (currentImage + 1 + heroImages.length) % heroImages.length
                  ]
                }
                alt="prev preview"
                className="w-full h-full object-cover"
              />
            </div>
            <button
              onClick={() =>
                changeSlide(
                  (currentImage + 1 + heroImages.length) % heroImages.length,
                )
              }
              onMouseEnter={() => setShowPreviewRight(true)}
              onMouseLeave={() => setShowPreviewRight(false)}
              className="relative bg-[rgba(0,0,0,0.2)] hover:bg-white transition-all duration-300 px-6 py-6">
              <ChevronRight
                size={54}
                strokeWidth={1}
                className="text-white hover:text-gray-400"
              />
            </button>
          </div>
        </div>
      </div>

      {/* SIDE ROTATED LINK */}
      <div className="hidden lg:block w-[30px] shrink-0 items-center justify-center lg:flex sm:flex-col">
        <Link
          href="/HeroForm"
          className="lg:mt-12 relative inline-flex origin-center rotate-90 items-center text-foreground justify-center whitespace-nowrap text-[15px] font-semibold uppercase leading-none tracking-[1.5px]">
          <span className="overline underline-offset-4">Make</span> an appoint
          <span className="underline underline-offset-4">ment</span>
        </Link>
      </div>
    </main>
  );
};

export default NewHeroSection;
