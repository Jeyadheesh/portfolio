import { Variants, motion } from "framer-motion";
import React from "react";

type Props = {
  delay?: number;
};

const SingleLine = ({ delay }: Props) => {
  const pathItem: Variants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        delay: delay,
      },
    },
  };
  return (
    <motion.div
      variants={pathItem}
      // transition={{ delay: 2 }}
      className="borde mx-auto w-6 border-purple-400 md:w-8"
    >
      <div className="after:h-3 after:w-10 after:bg-white after:content-[''] ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 100 100"
        >
          <g
            strokeWidth="14"
            stroke="rgb(217 21 154)"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="27.75 0"
            transform=""
          >
            <line
              x1="57"
              y1="15"
              x2="57"
              y2="85"
              markerEnd="url(#SvgjsMarker1682)"
            ></line>
          </g>
          <defs>
            <marker
              markerWidth="1"
              markerHeight="1"
              refX="0.5"
              refY="0.5"
              viewBox="0 0 1 1"
              orient="auto"
              id="SvgjsMarker1682"
            >
              <polygon
                points="0,1 0.16666666666666666,0.5 0,0 0.25,0.5"
                fill="hsl(227, 71%, 57%)"
              ></polygon>
            </marker>
          </defs>
        </svg>
      </div>
    </motion.div>
  );
};

export default SingleLine;
