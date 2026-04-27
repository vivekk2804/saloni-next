import React from "react";

const Gmap = () => {
  return (
    <div className="gmap-outline w-full h-[450px] md:h-[500px] mt-7 mb-2 sm:mt-20 sm:mb-5">
      <iframe
        className="w-full h-full border-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6309.495304446196!2d-122.43885472228101!3d37.74906395235639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e12a1d66d03%3A0xb8c905ae4e81369b!2sQ-Architecture!5e0!3m2!1sen!2sin!4v1623689156327!5m2!1sen!2sin"
        allowFullScreen
        loading="lazy"></iframe>
    </div>
  );
};

export default Gmap;
