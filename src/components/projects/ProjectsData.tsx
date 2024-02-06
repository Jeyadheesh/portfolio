import { Variants } from "framer-motion";
import Ebuddy1 from "../../../public/ebuddy1.png";
import Ebuddy2 from "../../../public/ebuddy2.png";
import Ebuddy3 from "../../../public/ebuddy3.png";
// const isDesktop =

export const ProjectsImageTemplate: ProjectsImageTemplateProp[] = [
  {
    image: Ebuddy1,
    lposition:
      "md:group-hover:translate-x-3 md:group-hover:translate-y-3 group-hover:translate-x-1 group-hover:translate-y-1   -rotate-6",
    rposition:
      "md:group-hover:-translate-x-3 md:group-hover:translate-y-3 group-hover:-translate-x-1 group-hover:translate-y-1   rotate-6",
    z: 20,
    variant1: {
      linitial: {
        translateX: -280,
        translateY: 0,
        transition: { duration: 0 },
      },
      rinitial: {
        translateX: 280,
        translateY: 0,
        transition: { duration: 0 },
      },
      lanimate: [
        { translateX: 0, translateY: 0 },
        { translateX: 20, translateY: 20 },
      ],
      ranimate: [
        { translateX: 0, translateY: 0 },
        { translateX: -20, translateY: 20 },
      ],
    },
  },
  {
    image: Ebuddy2,
    lposition:
      "group-hover:translate-x-0 group-hover:translate-y-0   -rotate-6",
    rposition: "group-hover:translate-x-0 group-hover:translate-y-0   rotate-6",
    z: 10,
    variant1: {
      linitial: {
        translateX: -250,
        translateY: 0,
        transition: { duration: 0 },
      },
      rinitial: {
        translateX: 250,
        translateY: 0,
        transition: { duration: 0 },
      },
      lanimate: [
        { translateX: 0, translateY: 0 },
        { translateX: 0, translateY: 0 },
      ],
      ranimate: [
        { translateX: 0, translateY: 0 },
        { translateX: 0, translateY: 0 },
      ],
    },
  },
  {
    image: Ebuddy2,
    lposition:
      "md:group-hover:-translate-x-3 md:group-hover:-translate-y-3 group-hover:-translate-x-1 group-hover:-translate-y-1   -rotate-6",
    rposition:
      "md:group-hover:translate-x-3 md:group-hover:-translate-y-3 group-hover:translate-x-1 group-hover:-translate-y-1   rotate-6",
    z: 0,
    variant1: {
      linitial: {
        translateX: -150,
        translateY: 0,
        transition: { duration: 0 },
      },
      rinitial: {
        translateX: 150,
        translateY: 0,
        transition: { duration: 0 },
      },
      lanimate: [
        { translateX: 0, translateY: 0 },
        { translateX: -20, translateY: -20 },
      ],
      ranimate: [
        { translateX: 0, translateY: 0 },
        { translateX: 20, translateY: -20 },
      ],
    },
  },
];
