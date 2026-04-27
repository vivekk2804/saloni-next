// app/page.tsx
import React from "react";
import Image from "next/image";

// --- Reusable Components ---

const SectionHeader = ({
  scriptTitle,
  mainTitle,
}: {
  scriptTitle: string;
  mainTitle: string;
}) => (
  <div className="flex flex-col items-center text-center mb-12">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-brand-peachDark">~</span>
      <span className="font-script text-2xl text-brand-plum">
        {scriptTitle}
      </span>
      <span className="text-brand-peachDark">~</span>
    </div>
    <h2 className="font-serif text-4xl text-brand-plum tracking-wide">
      {mainTitle}
    </h2>
  </div>
);

// --- Page Sections ---

const Hero = () => (
  <section className="relative w-full h-[600px] md:h-[800px] bg-[#eebbaf] flex items-center overflow-hidden">
    <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 items-center h-full">
      <div className="space-y-6">
        <div className="inline-block bg-white px-6 py-2 shadow-sm">
          <span className="font-script text-3xl text-brand-dark">
            Look Today
          </span>
        </div>
        <h1 className="font-serif text-5xl md:text-7xl text-brand-dark leading-tight uppercase">
          Essence <br />
          Of Natural
          <br />
          Beauty
        </h1>
        <button className="bg-brand-dark text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-gray-800 transition-colors">
          Book Now
        </button>
      </div>
      <div className="hidden md:block absolute right-0 bottom-0 h-[90%] w-1/2">
        {/* Placeholder for Hero Image */}
        <div className="w-full h-full bg-cover bg-bottom bg-gray-300" />
      </div>
    </div>
  </section>
);

const About = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <span className="font-script text-2xl text-brand-plum">
            Welcome to
          </span>
        </div>
        <h2 className="font-serif text-4xl text-brand-plum leading-snug">
          Our Salon is Most Popular, Clean and Recommended Hair Salon
        </h2>
        <p className="text-gray-600 leading-relaxed">
          We have a passion for promoting healthy, balanced and beautiful
          living. Offering massage, Acupuncture, Laser Skincare, fitness classes
          and more, we emphasize preventive care, stress management, and
          personal growth.
        </p>
        <div className="flex items-center gap-6 pt-4">
          <button className="bg-brand-dark text-white px-8 py-3 text-sm hover:bg-gray-800 transition-colors">
            More About
          </button>
          <div className="font-script text-4xl text-gray-800">Lara Croft</div>
        </div>
      </div>
      <div className="relative h-[500px]">
        {/* Collage Images Placeholders */}
        <div className="absolute top-0 right-10 w-64 h-48 bg-gray-200 border-8 border-brand-peach shadow-lg z-10" />
        <div className="absolute bottom-10 left-0 w-72 h-80 bg-gray-300 border-8 border-brand-peach shadow-lg z-20" />
        <div className="absolute top-32 right-0 w-56 h-72 bg-gray-400 border-8 border-brand-peach shadow-lg z-0" />
      </div>
    </div>
  </section>
);

const Gallery = () => {
  const categories = [
    "All",
    "Hair Product",
    "Hairstyle",
    "Makeup",
    "Coloring",
    "Hair Wash",
  ];
  const images = [1, 2, 3, 4, 5, 6];

  return (
    <section className="py-20 bg-brand-peach">
      <div className="container mx-auto px-6">
        <SectionHeader scriptTitle="All Gallery" mainTitle="Our Gallery" />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`text-sm font-semibold tracking-wide ${idx === 0 ? "text-brand-plum border-b-2 border-brand-plum" : "text-gray-500 hover:text-brand-plum"}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden aspect-[4/5] bg-gray-200 cursor-pointer">
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center text-white">
                <h3 className="font-serif text-2xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Style {img}
                </h3>
                <p className="font-script text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  Hairstyle
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Classic Haircut",
      desc: "Proin dapibus nisl ornare diam varius mpus. Aenean a quam luctus.",
    },
    {
      title: "Hair Treatment",
      desc: "Faucibus ante, in porttitor tellus blandit et. Phasellus tincidunt metus.",
    },
    {
      title: "Hair Wash",
      desc: "Maecenas pulvinar, risus in facilisis dignissim, quam nisi hendrerit.",
    },
    {
      title: "Hair Color",
      desc: "Proin dapibus nisl ornare diam varius mpus. Aenean a quam luctus.",
    },
    {
      title: "Hair Stylist",
      desc: "Faucibus ante, in porttitor tellus blandit et. Phasellus tincidunt metus.",
    },
    {
      title: "Hair Extension",
      desc: "Maecenas pulvinar, risus in facilisis dignissim, quam nisi hendrerit.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader
          scriptTitle="Save 20% On Haircuts"
          mainTitle="Our Services"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="bg-brand-peach p-10 text-center flex flex-col items-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-brand-peachDark">
                <div className="w-8 h-8 bg-brand-plum rounded-full opacity-50" />
              </div>
              <h3 className="font-serif text-2xl text-brand-plum mb-4">
                {srv.title}
              </h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                {srv.desc}
              </p>
              <a
                href="#"
                className="font-semibold text-brand-dark hover:text-brand-plum uppercase text-sm">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    { name: "Basic", price: "29", highlight: false },
    { name: "Standard", price: "49", highlight: true },
    { name: "Advanced", price: "99", highlight: false },
  ];

  return (
    <section className="py-20 bg-brand-peach">
      <div className="container mx-auto px-6">
        <SectionHeader
          scriptTitle="Cutting and styling"
          mainTitle="Our Pricing"
        />
        <div className="flex flex-col md:flex-row justify-center items-center gap-0 mt-12 max-w-5xl mx-auto shadow-xl">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`w-full md:w-1/3 p-10 text-center border border-gray-100 ${plan.highlight ? "bg-brand-peachDark py-14 z-10 shadow-lg" : "bg-white"}`}>
              <h3 className="font-script text-3xl text-brand-plum mb-4">
                {plan.name}
              </h3>
              <div className="text-5xl font-serif text-brand-plum mb-4">
                <span className="text-3xl align-top">$</span>
                {plan.price}
              </div>
              <p className="text-xs tracking-widest uppercase text-gray-500 mb-6">
                Monthly Package
              </p>
              <p className="text-sm text-gray-600 mb-8 px-4">
                Tempo sit amet ipsum dolor, consecter adipisi cing elit, lorem
                do
              </p>
              <button
                className={`px-8 py-3 text-sm text-white ${plan.highlight ? "bg-brand-plum" : "bg-brand-dark"}`}>
                Select
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OfferBanner = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="bg-white shadow-2xl flex flex-col md:flex-row max-w-5xl mx-auto">
        <div className="p-12 md:w-1/2 bg-[url('/path-to-light-floral-bg.png')] bg-cover">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-script text-2xl text-brand-plum">
              Make an Appointment!
            </span>
          </div>
          <h2 className="font-serif text-4xl text-brand-plum leading-snug mb-4">
            & get <span className="text-brand-dark">25%</span> discount!
          </h2>
          <p className="text-gray-600 mb-8">Glowing, dewy skin is our thing.</p>
          <button className="bg-brand-dark text-white px-8 py-3 text-sm hover:bg-gray-800 transition-colors">
            More Detail
          </button>
        </div>
        <div className="md:w-1/2 h-64 md:h-auto bg-gray-800 bg-cover bg-center" />
      </div>

      {/* Client Logos */}
      <div className="flex flex-wrap justify-center items-center gap-12 mt-16 opacity-60">
        {[1, 2, 3, 4, 5].map((logo) => (
          <div key={logo} className="w-24 h-12 bg-gray-200" />
        ))}
      </div>
    </div>
  </section>
);

const Team = () => {
  const members = [
    { name: "Bethany Bryan", role: "Makeup" },
    { name: "Carolina Miller", role: "Nail Artist" },
    { name: "Amber Lane", role: "Makeup" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader scriptTitle="Professionals" mainTitle="Our Team" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {members.map((member, idx) => (
            <div key={idx} className="relative group overflow-hidden">
              <div className="aspect-[3/4] bg-gray-200 w-full relative" />
              <div className="absolute bottom-0 left-0 right-0 bg-white p-6 text-center shadow-lg transform translate-y-2 group-hover:-translate-y-2 transition-transform duration-300 mx-4 mb-4">
                <h3 className="font-serif text-xl text-brand-plum">
                  {member.name}
                </h3>
                <p className="font-script text-xl text-gray-500 mt-1">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => (
  <section className="py-20 bg-brand-peach bg-[url('/path-to-light-floral-bg.png')] bg-cover">
    <div className="container mx-auto px-6">
      <SectionHeader
        scriptTitle="What our clients say"
        mainTitle="Testimonials"
      />
      <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm p-12 text-center shadow-xl mt-8">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          "This is not just another nail salon! These ladies are super talented!
          My nails have never looked/felt more amazing!! The environment here is
          so happy and cheery! Keep up the great work!"
        </p>
        <h4 className="font-script text-3xl text-brand-plum mb-6">
          Rustin Duza
        </h4>
        <div className="flex justify-center gap-4">
          {[1, 2, 3].map((avatar) => (
            <div
              key={avatar}
              className={`w-12 h-12 rounded-full bg-gray-300 border-2 ${avatar === 2 ? "border-brand-plum scale-110" : "border-transparent"}`}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Blog = () => {
  const posts = [
    { date: "20 Jan 2026", title: "How to keep your makeup in place all day" },
    { date: "25 Jan 2026", title: "Everything's Coming Up Rose Gold" },
    {
      date: "31 Jan 2026",
      title: "How to return your hair to normal after the Winter",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader
          scriptTitle="Update The New Trend"
          mainTitle="Latest Articles"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {posts.map((post, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="aspect-[3/2] bg-gray-200 overflow-hidden relative">
                <div className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 font-semibold z-10">
                  {post.date}
                </div>
              </div>
              <div className="text-center pt-6">
                <p className="text-sm text-gray-500 mb-3">
                  By <span className="text-brand-plum">Sophia Varner</span> |
                  Comment <span className="text-brand-plum">24</span>
                </p>
                <h3 className="font-serif text-xl text-brand-plum leading-snug mb-4 group-hover:text-brand-peachDark transition-colors">
                  {post.title}
                </h3>
                <span className="text-sm font-semibold uppercase text-brand-dark border-b border-brand-dark pb-1 group-hover:border-brand-peachDark">
                  Read More
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section className="py-20 bg-brand-peach">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="font-script text-2xl text-brand-plum">
              Have Questions?
            </span>
          </div>
          <h2 className="font-serif text-4xl text-brand-plum leading-snug mb-8">
            Feel free to get in touch! contact now
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-4 bg-white focus:outline-none focus:ring-1 focus:ring-brand-plum"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 bg-white focus:outline-none focus:ring-1 focus:ring-brand-plum"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-4 bg-white focus:outline-none focus:ring-1 focus:ring-brand-plum"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-4 bg-white focus:outline-none focus:ring-1 focus:ring-brand-plum"
              />
            </div>
            <textarea
              rows={4}
              placeholder="Message"
              className="w-full p-4 bg-white focus:outline-none focus:ring-1 focus:ring-brand-plum"
            />
            <button className="bg-brand-dark text-white px-8 py-4 text-sm uppercase hover:bg-gray-800 transition-colors mt-4">
              Send us a message
            </button>
          </form>
        </div>
        <div className="relative p-6">
          <div className="absolute inset-0 border-8 border-brand-plum translate-x-6 translate-y-6" />
          <div className="aspect-square bg-gray-300 relative z-10" />
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#1a1a1a] text-gray-300 py-16">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-gray-800 pb-12">
        <div>
          <h3 className="text-white text-2xl font-serif mb-6">Saloni</h3>
          <p className="text-sm leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-white text-black focus:outline-none"
            />
            <button className="bg-brand-peachDark text-brand-dark px-6 font-semibold">
              Subscribe
            </button>
          </div>
        </div>

        <div>
          <h4 className="text-white text-lg font-serif mb-6">Useful links</h4>
          <div className="grid grid-cols-2 gap-y-3 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Pricing Plan
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact Us
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Gallery
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Our Team
            </a>
            <a href="#" className="hover:text-white transition-colors">
              FAQ's
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white text-lg font-serif mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-brand-peachDark mt-1">📍</span>
              San Francisco City Hall, San Francisco, CA
            </li>
            <li className="flex items-center gap-3">
              <span className="text-brand-peachDark">✉️</span>
              contact123@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <span className="text-brand-peachDark">📞</span>
              (654) 321-7654
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>Copyright © 2026 Thewebmax</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">
            Terms & Condition
          </a>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main Export ---

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Gallery />
      <Services />
      <Pricing />
      <OfferBanner />
      <Team />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
