import smartjawImg from "../../../assets/thumbnails/smartjaw.png";
import type { ProjectContent } from "../../types";

export default {
  title: "Smart Jaw",
  theme: "dark",
  tags: ["android", "kotlin", "websockets", "python", "flask", "ble", "iot"],
  videoBorder: false,
  source: "https://github.com/layna411/Jaw_Android",
  description:
    "An intelligent jaw rehabilitation application that communicates with wearable sensors using Bluetooth and WebSockets for real-time monitoring, visualization, and patient recovery analytics.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: smartjawImg,
        alt: "Smart Jaw Rehabilitation App",
        caption: "Real-time jaw movement tracking and analytics dashboard visualization.",
      },
    },
  ],
} as const satisfies ProjectContent;
