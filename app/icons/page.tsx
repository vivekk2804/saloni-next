import PageBanner from "@/components/BannerPage";
import React from "react";

const page = () => {
  return (
    <>
      <PageBanner
        title="Icon Fonts"
        bgImage="/images/Banner/1.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Icon Fonts" }]}
      />
    </>
  );
};

export default page;
