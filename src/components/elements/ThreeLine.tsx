"use client";
import React from "react";
import { Variants, motion } from "framer-motion";

interface Props {
  className: string;
  width: number;
  height: number;
}

const ThreeLine = ({ className, width, height }: Props) => {
  const draw: Variants = {
    hidden: {
      pathLength: 0,
      transition: {
        duration: 200,
      },
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 200,
      },
    },
  };
  return (
    <div
      className={`${className} borde absolute  rotate-[100deg] border-black`}
    >
      <motion.svg
        width={width}
        height={height}
        viewBox="0 0 36 42"
        fill="ly"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        // animate="visible"
      >
        <motion.path
          // variants={draw}
          // style={{ pathLength: 0 }}
          d="M27.5249 6.55257C27.1158 6.8252 26.8187 7.25027 26.699 7.73427C26.5792 8.21826 26.6466 8.72153 26.8863 9.13337L30.0191 14.516C30.2587 14.9278 30.6511 15.2145 31.1098 15.3129C31.5686 15.4113 32.0561 15.3135 32.4652 15.0409C32.8742 14.7682 33.1713 14.3431 33.2911 13.8591C33.4108 13.3751 33.3435 12.8719 33.1038 12.4601L29.971 7.07744C29.731 6.66602 29.3386 6.37971 28.88 6.28131C28.4214 6.18291 27.9341 6.28046 27.5249 6.55257Z"
          fill="red"
        ></motion.path>
        <motion.path
          variants={draw}
          d="M21.3172 24.3705C21.6223 23.9713 21.7755 23.4665 21.7431 22.967C21.7107 22.4674 21.4953 22.0142 21.1443 21.7069L9.37136 10.3676C9.02036 10.0604 8.56253 9.92423 8.09857 9.98921C7.63461 10.0542 7.20254 10.3149 6.89741 10.7141C6.59227 11.1132 6.43908 11.6181 6.47151 12.1176C6.50394 12.6171 6.71934 13.0704 7.07034 13.3776L18.8432 24.717C19.1944 25.0237 19.6522 25.1595 20.116 25.0945C20.5798 25.0296 21.0118 24.7692 21.3172 24.3705Z"
          fill="red"
        ></motion.path>
        <motion.path
          variants={draw}
          d="M13.9635 36.3389C14.1083 35.847 14.0753 35.3173 13.8718 34.8664C13.6683 34.4156 13.311 34.0804 12.8784 33.9346L3.09994 30.1461C2.6674 30.0003 2.19507 30.0559 1.78686 30.3007C1.37864 30.5454 1.06798 30.9592 0.92322 31.4511C0.778456 31.943 0.811449 32.4726 1.01494 32.9235C1.21842 33.3744 1.57574 33.7096 2.00828 33.8554L11.7868 37.6439C12.2193 37.7891 12.6914 37.7332 13.0995 37.4885C13.5076 37.2439 13.8183 36.8304 13.9635 36.3389Z"
          fill="red"
        ></motion.path>
      </motion.svg>
    </div>
  );
};

export default ThreeLine;
