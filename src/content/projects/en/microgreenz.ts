import microgreenzImg from "../../../assets/thumbnails/microgreenz.png";
import type { ProjectContent } from "../../types";

export default {
  title: "A2ZEE MicroGreenz",
  theme: "dark",
  tags: ["react", "android", "firebase", "javascript"],
  videoBorder: false,
  live: "https://a2ze.netlify.app/",
  description:
    "A complete e-commerce platform for fresh microgreens with dedicated web and Android applications. Includes product browsing, order management, user authentication, and a scalable cloud backend.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: microgreenzImg,
        alt: "A2ZEE MicroGreenz Platform",
        caption: "E-commerce platform interface for ordering fresh microgreens.",
      },
    },
  ],
} as const satisfies ProjectContent;
