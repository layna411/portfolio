import thumbnailAstrapg from "../../../assets/thumbnails/astrapg.png";
import thumbnailMicrogreenz from "../../../assets/thumbnails/microgreenz.png";
import thumbnailRobokolam from "../../../assets/thumbnails/robokolam.png";
import thumbnailSmartjaw from "../../../assets/thumbnails/smartjaw.png";
import thumbnailGokart from "../../../assets/thumbnails/gokart.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Astra Co PG",
    slug: "astrapg",
    thumbnail: thumbnailAstrapg,
    description: "Co-living & PG booking platform",
  },
  {
    title: "A2ZEE MicroGreenz",
    slug: "microgreenz",
    thumbnail: thumbnailMicrogreenz,
    description: "Microgreens e-commerce platform",
  },
  {
    title: "RoboKolam",
    slug: "robokolam",
    thumbnail: thumbnailRobokolam,
    description: "IoT robotic drawing system",
  },
  {
    title: "Smart Jaw",
    slug: "smartjaw",
    thumbnail: thumbnailSmartjaw,
    description: "Jaw rehab smart sensor application",
  },
  {
    title: "GoKart",
    slug: "gokart",
    thumbnail: thumbnailGokart,
    description: "Real-time GoKart IoT telemetry dashboard",
  },
] as const satisfies ProjectPreview[];
