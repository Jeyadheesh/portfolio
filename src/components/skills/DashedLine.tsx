import { motion } from "framer-motion";
import React from "react";

type Props = {};

const DashedLine = (props: Props) => {
  return (
    <div className="w-20 ">
      <div className="after:h-3 after:w-10 after:bg-white after:content-[''] ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 800 800"
        >
          <g
            // animate={{ stroke: "red" }}
            strokeWidth="54"
            stroke="hsl(227, 71%, 57%)"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="111 86"
            transform="matrix(0.7071067811865476,0.7071067811865475,-0.7071067811865475,0.7071067811865476,399.99999999999994,38.31457505076196)"
          >
            <line
              x1="11.5"
              y1="11.5"
              x2="788.5"
              y2="788.5"
              markerEnd="url(#SvgjsMarker2162)"
            ></line>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default DashedLine;
