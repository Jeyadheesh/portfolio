import { Variants } from "framer-motion";
import Ebuddy1 from "../../../public/ebuddy1.png";
import Ebuddy2 from "../../../public/ebuddy2.png";
import Ebuddy3 from "../../../public/ebuddy3.png";

export const ProjectsImageTemplate = [
  {
    image: Ebuddy1,
    lposition: "group-hover:left-3 group-hover:top-3  -rotate-6",
    rposition: "group-hover:right-3 group-hover:top-3  rotate-6",
    z: 20,
    linitial: {
      translateX: 500,
      // top: 0,
      // left: "-10rem",
      // transition: {
      //   duration: 0,
      // },
    },
    rinitial: {
      translateX: 500,
      // top: 0,
      // right: "-10rem",
      // transition: {
      //   duration: 0,
      // },
    },
    lanimate: [
      { top: "0rem", left: "0rem" },
      { top: "1.5rem", left: "1.5rem" },
    ],
    ranimate: [
      { top: "0rem", right: "0rem" },
      { top: "1.5rem", right: "1.5rem" },
    ],
  },
  {
    image: Ebuddy2,
    lposition: "group-hover:left-0 group-hover:top-0 -rotate-6",
    rposition: "group-hover:right-0 group-hover:top-0 rotate-6",
    z: 10,
    linitial: {
      top: 0,
      left: "-15rem",
      transition: {
        duration: 0,
      },
    },
    rinitial: {
      top: 0,
      right: "-15rem",
      transition: {
        duration: 0,
      },
    },
    lanimate: [
      { top: "0rem", left: "0rem" },
      { top: "0rem", left: "0rem" },
    ],
    ranimate: [
      { top: "0rem", right: "0rem" },
      { top: "0rem", right: "0rem" },
    ],
  },
  {
    image: Ebuddy2,
    lposition: "group-hover:-left-3 group-hover:-top-3 -rotate-6",
    rposition: "group-hover:-right-3 group-hover:-top-3 rotate-6",
    z: 0,
    linitial: {
      top: 0,
      left: "-20rem",
      transition: {
        duration: 0,
      },
    },
    rinitial: {
      top: 0,
      right: "-20rem",
      transition: {
        duration: 0,
      },
    },
    lanimate: [
      { top: "0rem", left: "0rem" },
      { top: "-1.5rem", left: "-1.5rem" },
    ],
    ranimate: [
      { top: "0rem", right: "0rem" },
      { top: "-1.5rem", right: "-1.5rem" },
    ],
  },
];
