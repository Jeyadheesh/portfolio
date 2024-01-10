import { motion } from "framer-motion";
import React from "react";

type Props = {
  className?: string;
};

const BackgroundSvg = ({ className }: Props) => {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "hsl(43, 97%, 49%)",
    },
  };
  return (
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration: 25,
        ease: "linear",
      }}
      className={`${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 800 800"
      >
        <defs>
          <linearGradient
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
            id="vvvortex-grad"
          >
            <stop
              stop-color="hsl(221, 0%, 67%)"
              stop-opacity="1"
              offset="0%"
            ></stop>
            <stop
              stop-color="hsl(316, 73%, 52%)"
              stop-opacity="1"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <g stroke="url(#vvvortex-grad)" fill="none" stroke-linecap="round">
          <circle
            r="384"
            cx="400"
            cy="400"
            stroke-width="11"
            stroke-dasharray="35 45"
            stroke-dashoffset="25"
            transform="rotate(6, 400, 400)"
            opacity="0.05"
          ></circle>
          <circle
            r="336"
            cx="400"
            cy="400"
            stroke-width="10"
            stroke-dasharray="24 39"
            stroke-dashoffset="25"
            transform="rotate(257, 400, 400)"
            opacity="0.19"
          ></circle>
          <circle
            r="288"
            cx="400"
            cy="400"
            stroke-width="9"
            stroke-dasharray="38 32"
            stroke-dashoffset="25"
            transform="rotate(37, 400, 400)"
            opacity="0.32"
          ></circle>
          <circle
            r="240"
            cx="400"
            cy="400"
            stroke-width="8"
            stroke-dasharray="13 49"
            stroke-dashoffset="25"
            transform="rotate(49, 400, 400)"
            opacity="0.46"
          ></circle>
          <circle
            r="192"
            cx="400"
            cy="400"
            stroke-width="8"
            stroke-dasharray="51 22"
            stroke-dashoffset="25"
            transform="rotate(50, 400, 400)"
            opacity="0.59"
          ></circle>
          <circle
            r="144"
            cx="400"
            cy="400"
            stroke-width="7"
            stroke-dasharray="42 40"
            stroke-dashoffset="25"
            transform="rotate(197, 400, 400)"
            opacity="0.73"
          ></circle>
          <circle
            r="96"
            cx="400"
            cy="400"
            stroke-width="6"
            stroke-dasharray="14 45"
            stroke-dashoffset="25"
            transform="rotate(45, 400, 400)"
            opacity="0.86"
          ></circle>
          <circle
            r="48"
            cx="400"
            cy="400"
            stroke-width="5"
            stroke-dasharray="20 23"
            stroke-dashoffset="25"
            transform="rotate(340, 400, 400)"
            opacity="1.00"
          ></circle>
        </g>
      </svg>
    </motion.div>
  );
};

export default BackgroundSvg;
