import { motion } from "framer-motion";
import React from "react";

type Props = {};

const BackgroundSvg = (props: Props) => {
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
    <div className=" object-contain">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 700 700"
        style={{ overflow: "scroll", display: "block" }}
        width="700"
        height="700"
      >
        <defs></defs>
        <g id="two-0" transform="matrix(1 0 0 1 0 0)" opacity="1">
          <path
            transform="matrix(1 0 0 1 350 350)"
            id="two-12"
            d="M 226.158339 66.40608 C 243.075529 109.521764 325.524281 154.933718 294.275084 189.119113 C 242.730933 245.506392 146.030047 52.741368 82.615872 95.343799 C 57.556532 112.178974 112.012526 172.716388 85.302787 186.78705 C 61.700452 199.220736 45.685721 131.911715 20.003992 139.130826 C -30.949957 153.453936 11.456226 291.445412 -41.312922 287.337682 C -84.902001 283.94456 -36.544031 183.55706 -72.407632 158.550596 C -92.106682 144.815121 -128.89173 185.067934 -144.690087 166.981261 C -164.544533 144.250996 -102.663794 101.581636 -121.977614 78.390252 C -162.122659 30.185432 -290.763314 150.663305 -311.62257 91.500642 C -329.176287 41.713404 -183.522365 52.698776 -180.401309 0 C -178.081303 -39.173121 -276.501779 -40.491279 -269.233205 -79.054002 C -263.18634 -111.135063 -191.218925 -84.284858 -176.461432 -113.404876 C -155.584067 -154.600846 -248.296753 -216.105062 -214.876894 -247.981155 C -184.601194 -276.858329 -133.102701 -190.753719 -94.742511 -207.45716 C -58.541658 -223.220345 -84.988466 -316.101806 -45.506612 -316.505435 C 8.13717 -317.053844 -23.41446 -194.056421 24.405034 -169.740745 C 41.790164 -160.900601 63.90461 -174.734706 82.493878 -180.636399 C 124.948181 -194.114727 173.217139 -267.817534 205.216537 -236.832509 C 242.15628 -201.063747 118.758696 -137.402097 144.940061 -93.147322 C 166.354025 -56.950962 255.183049 -118.458209 271.679682 -79.772353 C 284.745571 -49.131852 216.750022 -32.583698 209.8319 -0.000001 C 205.145068 22.074529 217.915722 45.398687 226.158339 66.40608 Z "
            fill="hsl(205, 69%, 50%)"
            stroke="undefined"
            strokeWidth="1"
            strokeOpacity="1"
            fillOpacity="1"
            visibility="visible"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default BackgroundSvg;
