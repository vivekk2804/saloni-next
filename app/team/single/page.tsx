import PageBanner from "@/components/BannerPage";
import TeamSingleAppointmentSection from "./TeamSingleAppointmentSection";
import TeamSingleDetailSection from "./TeamSingleDetailSection";
import React from "react";

const page = () => {
  return (
    <>
      <PageBanner
        title="Team Single"
        bgImage="/images/Banner/7.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Team Single" }]}
      />
      <TeamSingleDetailSection />
      <TeamSingleAppointmentSection />
    </>
  );
};

export default page;
