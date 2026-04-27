import PageBanner from "@/components/BannerPage";
import FaqAccordionSection from "@/components/FaqAccordionSection";
import React from "react";

const page = () => {
  return (
    <>
      <PageBanner
        title="FAQ'S"
        bgImage="/images/Banner/9.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ'S" }]}
      />
      <FaqAccordionSection />
    </>
  );
};

export default page;
