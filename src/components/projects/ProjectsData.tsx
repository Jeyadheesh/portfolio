import Ebuddy1 from "../../../public/ebuddy1.png";
import Ebuddy2 from "../../../public/ebuddy2.png";
import Ebuddy3 from "../../../public/ebuddy3.png";

export const ProjectsImageTemplate = [
  {
    image: Ebuddy1,
    lposition: "group-hover:left-3 group-hover:top-3  -rotate-6",
    rposition: "group-hover:right-3 group-hover:top-3  rotate-6",
    z: 20,
    lanimate: {
      translateX: -100,
      top: 0,
      left: 0,
    },
    ranimate: {
      translateX: 0,
      top: 0,
      right: "-10rem",
    },
    lini: { top: "1.5rem", left: "1.5rem" },
    rini: { top: "1.5rem", right: "1.5rem" },
  },
  {
    image: Ebuddy2,
    lposition: "group-hover:left-0 group-hover:top-0 -rotate-6",
    rposition: "group-hover:right-0 group-hover:top-0 rotate-6",
    z: 10,
    lanimate: {
      translateX: -300,
      top: 0,
      left: 0,
    },
    ranimate: {
      // translateX: 300,
      top: 0,
      right: "-15rem",
    },
    lini: { top: "0", left: "0" },
    rini: { top: "0", right: "0" },
  },
  {
    image: Ebuddy2,
    lposition: "group-hover:-left-3 group-hover:-top-3 -rotate-6",
    rposition: "group-hover:-right-3 group-hover:-top-3 rotate-6",
    z: 0,
    lanimate: {
      translateX: -500,
      top: 0,
      left: 0,
    },
    ranimate: {
      // translateX: 500,
      top: 0,
      right: "-20rem",
    },
    lini: { top: "-1.5rem", left: "-1.5rem" },
    rini: { top: "-1.5rem", right: "-1.5rem" },
  },
];
