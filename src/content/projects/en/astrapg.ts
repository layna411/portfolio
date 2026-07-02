import astrapgImg from "../../../assets/thumbnails/astrapg.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Astra Co PG",
  theme: "dark",
  tags: ["react", "firebase", "tailwind", "javascript"],
  videoBorder: false,
  live: "https://astrapgcolive.com/",
  description:
    "A modern co-living and PG booking platform designed with a clean, responsive UI. Features include room listings, amenities, booking inquiries, contact forms, and an optimized user experience for students and professionals.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: astrapgImg,
        alt: "Astra Co PG Booking Platform",
        caption: "Modern co-living room listings and booking inquiries dashboard.",
      },
    },
  ],
} as const satisfies ProjectContent;
