import PageBanner from "@/components/BannerPage";
import Heading from "@/components/Heading";
import Artist from "@/Home/Artist/Artist";
import TeamSection from "@/Home/Team/Team";
import React from "react";

const teamMakeup = [
  {
    name: "Bethany Bryan",
    role: "Makeup",
    image: "/images/teamExpert/pic1.jpg",
    socials: ["FACEBOOK", "INSTAGRAM", "X"],
  },
  {
    name: "Carolina Miller",
    role: "Makeup",
    image: "/images/teamExpert/pic2.jpg",
    socials: ["FACEBOOK", "INSTAGRAM", "X"],
  },
  {
    name: "Amber Lane",
    role: "Makeup",
    image: "/images/teamExpert/pic3.jpg",
    socials: ["FACEBOOK", "INSTAGRAM", "X"],
  },
];

const hairStylist = [
  {
    name: "Bethany Bryan",
    role: "Hair Stylist",
    image: "/images/teamExpert/pic4.jpg",
    socials: ["FACEBOOK", "INSTAGRAM", "X"],
  },
  {
    name: "Carolina Miller",
    role: "Hair Stylist",
    image: "/images/teamExpert/pic5.jpg",
    socials: ["FACEBOOK", "INSTAGRAM", "X"],
  },
  {
    name: "Amber Lane",
    role: "Hair Stylist",
    image: "/images/teamExpert/pic6.jpg",
    socials: ["FACEBOOK", "INSTAGRAM", "X"],
  },
];

const nailMasters = [
  {
    name: "Bethany Bryan",
    role: "Nail Masters",
    image: "/images/teamExpert/pic7.jpg",
    socials: ["FACEBOOK", "INSTAGRAM", "X"],
  },
  {
    name: "Carolina Miller",
    role: "Nail Masters",
    image: "/images/teamExpert/pic8.jpg",
    socials: ["FACEBOOK", "INSTAGRAM", "X"],
  },
  {
    name: "Amber Lane",
    role: "Nail Masters",
    image: "/images/teamExpert/pic9.jpg",
    socials: ["FACEBOOK", "INSTAGRAM", "X"],
  },
];

const page = () => {
  return (
    <>
      <PageBanner
        title="Team"
        bgImage="/images/Banner/9.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Team" }]}
      />
      <div className="pt-0 lg:pt-10">
        <Heading
          subtitle="Professionals"
          title="Make-up artists"
          bgTitle="Experts"
        />
      </div>
      <div className="pb-0 lg:pt-3 pb-15">
        <Artist data={teamMakeup} />
      </div>
      <div className="bg-[#fff6ef] pt-10">
        <Heading
          subtitle="Professionals"
          title="Hair stylists"
          bgTitle="Experts"
        />
        <div className="pb-0 lg:pt-3 pb-25">
          <Artist data={hairStylist} />
        </div>
      </div>
      <div className="pb-0 lg:pt-3 pb-25">
        <Heading
          subtitle="Professionals"
          title="Nail Masters"
          bgTitle="Experts"
        />
        <Artist data={nailMasters} />
      </div>
    </>
  );
};

export default page;
