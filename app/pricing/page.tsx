import PageBanner from "@/components/BannerPage";
import Heading from "@/components/Heading";
import ServicesPricing from "@/components/ServicesPricing";
import PricingSection from "@/Home/Pricing/Pricing";
import React from "react";

const page = () => {
  return (
    <>
      <PageBanner
        title="Our Prices"
        bgImage="/images/Banner/2.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Prices" }]}
      />
      <PricingSection />
      <Heading
        subtitle="Cutting and styling "
        title="Our Pricing 2"
        bgTitle="Pricing"
      />
      <ServicesPricing className="mt-[-60px]" />
    </>
  );
};

export default page;
