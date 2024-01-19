import Ebuddy1 from "../../../public/ebuddy1.png";
import Ebuddy2 from "../../../public/ebuddy2.png";
import Ebuddy3 from "../../../public/ebuddy3.png";

export const ProjectsImageTemplate = [
  {
    image: Ebuddy2,
    position: "group-hover:left-3 group-hover:top-3  -rotate-6",
    z: 20,
    animate: {
      translateY: 0,
      opacity: 1,
      translateX: -100,
      scale: 1,
      rotate: 0,
    },
    ini: { top: "1.5rem", left: "1.5rem" },
  },
  {
    image: Ebuddy2,
    position: "group-hover:left-0 group-hover:top-0 -rotate-6",
    z: 10,
    animate: {
      translateY: 0,
      opacity: 1,
      translateX: -300,
    },
    ini: { top: "0", left: "0" },
  },
  {
    image: Ebuddy2,
    position: "group-hover:-left-3 group-hover:-top-3 -rotate-6",
    z: 0,
    animate: {
      translateY: 0,
      opacity: 1,
      translateX: -500,
      scale: 1,
      // rotate: 360,
    },
    ini: { top: "-1.5rem", left: "-1.5rem" },
  },
];
