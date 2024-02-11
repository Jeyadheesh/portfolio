"use client";
import { delay, motion } from "framer-motion";
import React from "react";
import DashedLine from "./DashedLine";
import Image from "next/image";

import { educationData } from "../education/EducationData";
import { useTypewriter } from "react-simple-typewriter";
import SingleLine from "./SingleLine";
import About1 from "../../../public/about1.png";

interface Props {}

const AboutContent = (props: Props) => {
  // const [text] = useTypewriter({
  //   words: ["Full Stack Developer"],
  //   loop: 1,
  // });

  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        // delay: 1,
        delayChildren: 0.2,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const itemBox = {
    hidden: { x: 600, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div id="skills" className="borde w-full overflow-hidden  border-white">
      <div>
        <h1 className="p-5 text-center text-5xl font-bold">Skills</h1>
      </div>
      <motion.div
        // variants={container}
        // initial="hidden"
        // whileInView="visible"
        className="borde  mx-auto w-[50%] border-white text-black"
      >
        {/* main */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="borde grid grid-cols-[30%_70%] grid-rows-5 place-content-center place-items-center  border-white *:border  *:border-white"
        >
          {/* Box */}

          {/* Image and batch */}
          <motion.div variants={item} className="relative w-20  ">
            <Image
              alt="Image"
              className=" borde w-fit rounded-lg border-white"
              src={About1}
            />
            <h1 className="borde w-[120%] border-white  font-semibold">
              {"data.batch"}
            </h1>
          </motion.div>

          {/* details */}
          <motion.div
            variants={item}
            // variants={itemBox}
            // style={{ background: data.bgClr }}
            className="relative w-full content-start rounded-xl border-[3px] border-white p-3.5 odd:bg-red-50  "
          >
            <h2 className=" font-semibold ">{"data.institution"}</h2>
            <p className="text-lg font-semibold text-priClr">{"data.course"}</p>

            <div className="triShape absolute -left-8 top-[30%] h-8 w-8 bg-white"></div>
          </motion.div>

          <motion.div variants={item} className=" ">
            <DashedLine />
          </motion.div>

          <div></div>

          {/* Box */}

          {/* Image and batch */}
          <motion.div variants={item} className="relative w-20 ">
            <Image
              alt="Image"
              className=" borde w-fit rounded-lg border-white"
              src={About1}
            />
            <h1 className="borde w-[120%] border-white  font-semibold">
              {"data.batch"}
            </h1>
          </motion.div>

          {/* details */}
          <motion.div
            variants={item}
            // variants={itemBox}
            // style={{ background: data.bgClr }}
            className="relative w-full rounded-xl border-[3px] border-white p-3.5  "
          >
            <h2 className=" font-semibold ">{"data.institution"}</h2>
            <p className="text-lg font-semibold text-priClr">{"data.course"}</p>

            <div className="triShape absolute -left-8 top-[30%] h-8 w-8 bg-white"></div>
          </motion.div>

          <motion.div variants={item} className=" ">
            <DashedLine />
          </motion.div>

          <div></div>

          {/* Box */}

          {/* Image and batch */}
          <motion.div variants={item} className="relative w-20 ">
            <Image
              alt="Image"
              className=" borde w-fit rounded-lg border-white"
              src={About1}
            />
            <h1 className="borde w-[120%] border-white  font-semibold">
              {"data.batch"}
            </h1>
          </motion.div>

          {/* details */}
          <motion.div
            variants={item}
            // variants={itemBox}
            // style={{ background: data.bgClr }}
            className="relative w-full rounded-xl border-[3px] border-white p-3.5  "
          >
            <h2 className=" font-semibold ">{"data.institution"}</h2>
            <p className="text-lg font-semibold text-priClr">{"data.course"}</p>

            <div className="triShape absolute -left-8 top-[30%] h-8 w-8 bg-white"></div>
          </motion.div>

          {2 != 2 && (
            <div>
              <DashedLine />
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutContent;
