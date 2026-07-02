import robokolamImg from "../../../assets/thumbnails/robokolam.png";
import type { ProjectContent } from "../../types";

export default {
  title: "RoboKolam",
  theme: "dark",
  tags: ["android", "java", "bluetooth", "arduino", "python", "opencv", "iot"],
  videoBorder: false,
  source: "https://github.com/layna411/RoboKolam",
  description:
    "An IoT-powered robotic Kolam drawing system that converts uploaded images into CNC-compatible G-Code and controls the drawing robot through Bluetooth from an Android application.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: robokolamImg,
        alt: "RoboKolam Robotic Arm System",
        caption: "IoT-powered robotic drawing setup controlled via Android application.",
      },
    },
  ],
} as const satisfies ProjectContent;
