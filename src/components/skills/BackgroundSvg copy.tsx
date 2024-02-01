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
              stopColor="hsl(221, 0%, 67%)"
              stopOpacity="1"
              offset="0%"
            ></stop>
            <stop
              stopColor="hsl(316, 73%, 52%)"
              stopOpacity="1"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <g stroke="url(#vvvortex-grad)" fill="none" strokeLinecap="round">
          <circle
            r="384"
            cx="400"
            cy="400"
            strokeWidth="11"
            strokeDasharray="35 45"
            strokeDashoffset="25"
            transform="rotate(6, 400, 400)"
            opacity="0.05"
          ></circle>
          <circle
            r="336"
            cx="400"
            cy="400"
            strokeWidth="10"
            strokeDasharray="24 39"
            strokeDashoffset="25"
            transform="rotate(257, 400, 400)"
            opacity="0.19"
          ></circle>
          <circle
            r="288"
            cx="400"
            cy="400"
            strokeWidth="9"
            strokeDasharray="38 32"
            strokeDashoffset="25"
            transform="rotate(37, 400, 400)"
            opacity="0.32"
          ></circle>
          <circle
            r="240"
            cx="400"
            cy="400"
            strokeWidth="8"
            strokeDasharray="13 49"
            strokeDashoffset="25"
            transform="rotate(49, 400, 400)"
            opacity="0.46"
          ></circle>
          <circle
            r="192"
            cx="400"
            cy="400"
            strokeWidth="8"
            strokeDasharray="51 22"
            strokeDashoffset="25"
            transform="rotate(50, 400, 400)"
            opacity="0.59"
          ></circle>
          <circle
            r="144"
            cx="400"
            cy="400"
            strokeWidth="7"
            strokeDasharray="42 40"
            strokeDashoffset="25"
            transform="rotate(197, 400, 400)"
            opacity="0.73"
          ></circle>
          <circle
            r="96"
            cx="400"
            cy="400"
            strokeWidth="6"
            strokeDasharray="14 45"
            strokeDashoffset="25"
            transform="rotate(45, 400, 400)"
            opacity="0.86"
          ></circle>
          <circle
            r="48"
            cx="400"
            cy="400"
            strokeWidth="5"
            strokeDasharray="20 23"
            strokeDashoffset="25"
            transform="rotate(340, 400, 400)"
            opacity="1.00"
          ></circle>
        </g>
      </svg>
    </motion.div>
  );
};

export default BackgroundSvg;
