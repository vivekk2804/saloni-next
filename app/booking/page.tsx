import PageBanner from "@/components/BannerPage";
import BookingFormSection from "./BookingFormSection";

const page = () => {
  return (
    <>
      <PageBanner
        title="Booking"
        bgImage="/images/Banner/2.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Booking" }]}
      />
      <BookingFormSection />
    </>
  );
};

export default page;
