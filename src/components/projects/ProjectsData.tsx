import Ebuddy1 from "../../../public/ebuddy1.png";
import Ebuddy2 from "../../../public/ebuddy2.png";
import Ebuddy3 from "../../../public/ebuddy3.png";

export const Projects = [
  {
    images: [
      {
        image: Ebuddy2,
        position:
          "left-6 top-6 group-hover:left-9 group-hover:top-9  group-hover:-rotate-6",
        z: 20,
        animate: {
          translateY: 0,
          opacity: 1,
          translateX: -100,
          scale: 1,
          rotate: 0,
        },
      },
      {
        image: Ebuddy2,
        position:
          "left-0 top-0 group-hover:left-0 group-hover:top-0 group-hover:-rotate-6",
        z: 10,
        animate: {
          translateY: 0,
          opacity: 1,
          translateX: -300,
        },
      },
      {
        image: Ebuddy2,
        position:
          "-left-6 -top-6 group-hover:-left-9 group-hover:-top-9 group-hover:-rotate-6",
        z: 0,
        animate: {
          translateY: 0,
          opacity: 1,
          translateX: -500,
          scale: 1,
          // rotate: 360,
        },
      },
    ],
  },
];
