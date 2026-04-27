export type DropdownItem = {
  label: string;
  href: string;
};

export type NavItem = {
  title: string;
  href?: string;
  dropdown?: DropdownItem[];
};

export const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
    dropdown: [
      { label: "Home 1", href: "/home-1" },
      { label: "Home 2", href: "/home-2" },
      { label: "Home 3", href: "/home-3" },
      { label: "Home 4", href: "/home-4" },
    ],
  },
  {
    title: "About",
    href: "/AboutUs",
  },
  {
    title: "Services",
    href: "/Services",
    dropdown: [
      { label: "Service One", href: "/services/service-one" },
      { label: "Service Two", href: "/services/service-two" },
      { label: "Service Details", href: "/services/details" },
    ],
  },
  {
    title: "Gallery",
    href: "/Gallery",
    dropdown: [
      { label: "Gallery Grid", href: "/gallery/grid" },
      { label: "Gallery Masonry", href: "/gallery/masonry" },
      { label: "Gallery Carousel", href: "/gallery/carousel" },
    ],
  },
  {
    title: "blog",
    href: "/blog",
    dropdown: [
      { label: "Blog Grid", href: "/blog/grid" },
      { label: "Blog List", href: "/blog/list" },
      { label: "Blog Post", href: "/blog/post" },
    ],
  },
  {
    title: "Pages",
    dropdown: [
      { label: "About Us", href: "/AboutUs" },
      { label: "Pricing Plan", href: "/pricing" },
      { label: "Icon Font", href: "/icons" },
      { label: "Error 404", href: "/404" },
      { label: "FAQ", href: "/faq" },
      { label: "Team", href: "/team" },
      { label: "Team Single", href: "/team/single" },
    ],
  },
  {
    title: "Contact Us",
    href: "/ContactUs",
  },
  {
    title: "Booking",
    href: "/booking",
  },
];
export const mobileMenu = [
  {
    key: "home",
    title: "Home",
    href: "/",
    dropdown: [
      { label: "Home 1", href: "/home-1" },
      { label: "Home 2", href: "/home-2" },
      { label: "Home 3", href: "/home-3" },
      { label: "Home 4", href: "/home-4" },
    ],
  },
  {
    title: "About",
    href: "/AboutUs",
  },
  {
    key: "services",
    title: "Services",
    href: "/Services",
    dropdown: [
      { label: "Service One", href: "/services/service-one" },
      { label: "Service Two", href: "/services/service-two" },
      { label: "Service Details", href: "/services/details" },
    ],
  },
  {
    key: "gallery",
    title: "Gallery",
    href: "/Gallery",
    dropdown: [
      { label: "Gallery Grid", href: "/gallery/grid" },
      { label: "Gallery Masonry", href: "/gallery/masonry" },
      { label: "Gallery Carousel", href: "/gallery/carousel" },
    ],
  },
  {
    key: "blog",
    title: "Blog",
    href: "/Blog",
    dropdown: [
      { label: "Blog Grid", href: "/blog/grid" },
      { label: "Blog List", href: "/blog/list" },
      { label: "Blog Post", href: "/blog/post" },
    ],
  },
  {
    key: "pages",
    title: "Pages",
    dropdown: [
      { label: "About Us", href: "/about-us" },
      { label: "Pricing Plan", href: "/pricing" },
      { label: "Icon Font", href: "/icons" },
      { label: "Error 404", href: "/404" },
      { label: "FAQ", href: "/faq" },
      { label: "Team", href: "/team" },
      { label: "Team Single", href: "/team/single" },
    ],
    height: "max-h-[350px]",
  },
  {
    title: "Contact",
    href: "/ContactUs",
  },
  {
    title: "Booking",
    href: "/booking",
  },
];
