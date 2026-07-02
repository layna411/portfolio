import gokartImg from "../../../assets/thumbnails/gokart.png";
import type { ProjectContent } from "../../types";

export default {
  title: "GoKart",
  theme: "dark",
  tags: ["android", "firebase", "iot", "esp32", "rest"],
  videoBorder: false,
  source: "https://github.com/layna411/GoKart",
  description:
    "A real-time GoKart monitoring application that connects with IoT devices to display telemetry such as speed, battery status, temperature, GPS location, and live performance data.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: gokartImg,
        alt: "GoKart Telemetry Monitor",
        caption: "Live dashboard demonstrating speed, battery health, and temperature updates.",
      },
    },
  ],
} as const satisfies ProjectContent;
