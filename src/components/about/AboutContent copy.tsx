"use client";
import { motion } from "framer-motion";
import React from "react";
import DashedLine from "./DashedLine";
import Image from "next/image";

import { aboutData } from "./AboutData";
import { useTypewriter } from "react-simple-typewriter";
import SingleLine from "./SingleLine";

interface Props {}

const AboutContent = (props: Props) => {
  // const [text] = useTypewriter({
  //   words: ["Full Stack Developer"],
  //   loop: 1,
  // });

  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
      transition: {
        origin: "top left",
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        // delay: 1,
        delayChildren: 0.2,
        staggerChildren: 0.3,
        origin: "top left",
      },
    },
  };

  const item = {
    hidden: { y: 200, opacity: 0 },
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
    <div id="about" className="borde w-full overflow-hidden  border-white">
      <div>
        <h1 className="p-5 text-center text-5xl font-bold">About Me</h1>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="borde   mx-auto w-[70%] border-white text-black"
      >
        {aboutData.map((data, i) => {
          return (
            <motion.div
              key={i}
              variants={item}
              className="borde mx-auto flex w-fit  flex-col  gap-3 border-red-900 pb-3 text-slate-50"
            >
              {/* Box */}
              <motion.div
                className={` borde flex h-[8re] items-center justify-center gap-7 border-white`}
              >
                <motion.div
                  // initial={{ opacity: 0, translateY: 100 }}
                  // whileInView={{ opacity: 1, translateY: 0 }}
                  // transition={{ duration: 0.4 }}
                  className="relative w-20"
                >
                  <Image
                    alt="Image"
                    className=" borde w-fit rounded-lg border-white"
                    src={data.image}
                  />
                  <h1 className="borde w-[120%] border-white  font-semibold">
                    {data.batch}
                  </h1>
                </motion.div>
                <div>
                  <motion.div
                    variants={itemBox}
                    transition={{
                      delay: (i + 1) * 0.3 + 1,
                    }}
                    // style={{ background: data.bgClr }}
                    className="relative w-[25rem] rounded-xl border-[3px] border-white p-3.5  "
                  >
                    <h2 className=" font-semibold ">{data.institution}</h2>
                    <p className="text-lg font-semibold text-priClr">
                      {data.course}
                    </p>

                    <div className="triShape absolute -left-8 top-[30%] h-8 w-8 bg-white"></div>
                  </motion.div>
                </div>
              </motion.div>
              {i != 2 && (
                <div className="borde w-20 border-white">
                  <SingleLine />
                  <SingleLine />
                  <SingleLine />
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default AboutContent;
