import PageBanner from "@/components/BannerPage";
import ServicesPage from "@/components/ServicesPage";
import ServicesPricing from "@/components/ServicesPricing";
import Contactus from "@/Home/Contactus/ContactUs";

import React from "react";

const page = () => {
  return (
    <>
      <PageBanner
        title="Services 1"
        bgImage="/images/Banner/2.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <ServicesPage />

      <Contactus />
      <ServicesPricing />
    </>
  );
};

export default page;
