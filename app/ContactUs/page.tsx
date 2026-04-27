import PageBanner from "@/components/BannerPage";
import ContactFormInfoSection from "./ContactFormInfoSection";
import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-white dark:bg-white">
        <PageBanner
          title="Contact Us"
          bgImage="/images/Banner/5.jpg"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
        />
        <ContactFormInfoSection />
      </div>
    </>
  );
};

export default page;
