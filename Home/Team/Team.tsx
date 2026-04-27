"use client";

import Heading from "@/components/Heading";
import Image from "next/image";
import Artist from "../Artist/Artist";

const team = [
  {
    name: "Bethany Bryan",
    role: "Makeup",
    image: "/images/teamExpert/pic1.jpg",
  },
  {
    name: "Carolina Miller",
    role: "Nail Artist",
    image: "/images/teamExpert/pic2.jpg",
  },
  {
    name: "Amber Lane",
    role: "Makeup",
    image: "/images/teamExpert/pic3.jpg",
  },
];

export default function TeamSection() {
  return (
    <section className="w-full bg-[#fff] py-[20px] lg:py-[50px]">
      {/* HEADING */}
      <Heading subtitle="Professionals" title="Our Team" bgTitle="Experts" />

      {/* GRID */}
      <Artist data={team} />
    </section>
  );
}
