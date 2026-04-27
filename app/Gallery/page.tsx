import PageBanner from "@/components/BannerPage";
import GallaryGrid from "@/components/GallaryGrid";
import React from "react";

const Gallary = () => {
  return (
    <>
      <PageBanner
        title="Gallery Grid"
        bgImage="/images/Banner/9.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery Grid" }]}
      />
      <GallaryGrid />
    </>
  );
};

export default Gallary;
