type Card = {
  title: string;
  description: string;
  href: string;
  type: "image" | "video";
  src: string;
  poster?: string; // only for video
  alt?: string; // only for image
};

export const NAV_LINK_LIST = [
  { title: "about", url: "/about" },
  { title: "cases", url: "/case" },
  { title: "tech", url: "/tech" },
  { title: "contact", url: "/contact" },
];
export const TECH_CARDS: Card[] = [
  {
    title: "About",
    description: "Your trusted partner for e-commerce solutions",
    href: "/about",
    type: "image",
    src: "https://a.storyblok.com/f/327902/2000x2200/2aff3b63a8/pholc-mockup-compressed.webp/m/3840x0/filters:quality(75)",
    alt: "About Image",
  },
  {
    title: "Tech",
    description: "Seamless integrations for Centra, Brink & Shopify",
    href: "/tech",
    type: "video",
    src: "https://a.storyblok.com/f/327902/x/506d9d543c/seamlessly-connected.mp4",
    poster:
      "https://a.storyblok.com/f/327902/1000x1100/e68cb4f99f/plug-and-play-image.webp",
  },
  {
    title: "Our solutions",
    description: "E-commerce and native apps - ready-made or customized",
    href: "/tech#solutions",
    type: "image",
    src: "https://a.storyblok.com/f/327902/2000x2200/cf6e0d714a/native-app-mockup-1.webp/m/3840x0/filters:quality(75)",
    alt: "Solutions Image",
  },
];
export const FOOTER_LIST = [
  { label: "Email", href: "mailto:hello@rivercode.se" },
  { label: "Phone", href: "tel:+4633-7206990" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/rivercode-ab" },
];
export const SLIDER_LIST = [
  {
    image:
      "https://a.storyblok.com/f/327902/4098x5464/8c2d064a20/morris-stockholm-compressed.webp/m/3840x0/filters:quality(75)",
    label: "( MORRIS STOCKHOLM )",
  },
  {
    image:
      "https://a.storyblok.com/f/327902/x/8fa9943717/arakii.avif/m/3840x0/filters:quality(75)",
    label: "( ARAKII )",
  },
  {
    image:
      "https://a.storyblok.com/f/327902/1200x1530/f0194dd7f6/axel-arigato.jpg/m/3840x0/filters:quality(75)",
    label: "( AXEL ARIGATO )",
  },
  {
    image:
      "https://a.storyblok.com/f/327902/2039x2718/e2e2ec9525/pholc.webp/m/3840x0/filters:quality(75)",
    label: "( PHOLC )",
  },
  {
    image:
      "https://a.storyblok.com/f/327902/4128x6192/4012fde7ef/maya-delorez-compressed.webp/m/3840x0/filters:quality(75)",
    label: "( MAYA DELOREZ )",
  },
  {
    image:
      "https://a.storyblok.com/f/327902/1080x1533/fa79620ba0/holdit-compressed.webp/m/3840x0/filters:quality(75)",
    label: "( HOLDIT )",
  },
  {
    image:
      "https://a.storyblok.com/f/327902/720x1080/2610998a46/adsgn-compressed.webp/m/3840x0/filters:quality(75)",
    label: "( A-DSGN )",
  },
];
