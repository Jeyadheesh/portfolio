import { Variants } from "framer-motion";
import Ebuddy1 from "../../../public/ebuddy1.png";
import Ebuddy2 from "../../../public/ebuddy2.png";
import Ebuddy3 from "../../../public/ebuddy3.png";

export const ProjectsImageTemplate: ProjectsImageTemplateProp[] = [
  {
    image: Ebuddy1,
    lposition:
      "group-hover:translate-x-4 group-hover:translate-y-4   -rotate-0",
    rposition: "group-hover:right-3 group-hover:top-3  rotate-6",
    z: 20,
    varient1: {
      linitial1: {
        translateX: -500,
        translateY: 20,
      },
      linitial2: {
        translateX: 20,
        translateY: 20,
      },
    },
    rinitial: {
      translateX: 400,
    },
    lanimate: { translateX: 20, translateY: 20 },
    ranimate: [
      { top: "0rem", right: "0rem" },
      { top: "1.5rem", right: "1.5rem" },
    ],
  },
  {
    image: Ebuddy2,
    lposition:
      "group-hover:translate-x-0 group-hover:translate-y-0   -rotate-0",
    rposition: "group-hover:right-0 group-hover:top-0 rotate-6",
    z: 10,
    varient1: {
      linitial1: {
        translateX: -500,
        translateY: 20,
      },
      linitial2: {
        translateX: 0,
        translateY: 0,
      },
    },
    rinitial: {
      top: 0,
      right: "-15rem",
      transition: {
        duration: 0,
      },
    },
    lanimate: { translateX: 0, translateY: 0 },
    ranimate: [
      { top: "0rem", right: "0rem" },
      { top: "0rem", right: "0rem" },
    ],
  },
  {
    image: Ebuddy2,
    lposition:
      "group-hover:-translate-x-4 group-hover:-translate-y-4   -rotate-0",
    rposition: "group-hover:-right-3 group-hover:-top-3 rotate-6",
    z: 0,
    varient1: {
      linitial1: {
        translateX: -500,
        translateY: 20,
      },
      linitial2: {
        translateX: -500,
        translateY: 20,
      },
    },
    rinitial: {
      top: 0,
      right: "-20rem",
      transition: {
        duration: 0,
      },
    },
    lanimate: { translateX: -20, translateY: -20 },
    ranimate: [
      { top: "0rem", right: "0rem" },
      { top: "-1.5rem", right: "-1.5rem" },
    ],
  },
];
