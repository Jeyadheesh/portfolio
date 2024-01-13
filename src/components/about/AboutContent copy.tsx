"use client";
import { AnimatePresence, Variants, delay, motion } from "framer-motion";
import React, { useState } from "react";
import DashedLine from "./DashedLine";
import Image from "next/image";

import { aboutData } from "./AboutData";
import { useTypewriter } from "react-simple-typewriter";
import SingleLine from "./SingleLine";
import BackgroundSvg from "./BackgroundSvg copy";
import NextJs1 from "../../../public/nextjs1.png";
import { Languages } from "./LanguagesData";

interface Props {}

const AboutContent = (props: Props) => {
  const [isDo, setIsDoe] = useState<boolean>(true);
  // const [text] = useTypewriter({
  //   words: ["Full Stack Developer"],
  //   loop: 1,
  // });

  const container: Variants = {
    hidden: {
      opacity: 1,
      transition: {
        delay: 0,
        delayChildren: 0,
        staggerChildren: 0,
      },
    },
    visible: {
      opacity: 1,

      transition: {
        // delay: 1,
        delayChildren: 0.2,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      transition: {
        delay: 0,
      },
    },
    visible: {
      opacity: 1,
    },
  };

  const imgItem = {
    hidden: {
      scale: 0,
      opacity: 0,
      rotate: 50,
      transition: {
        delay: 0,
      },
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      // transition: {
      //   stiffness: 120,
      // },
    },
  };
  const itemBox: Variants = {
    hidden: {
      x: 300,
      opacity: 0,
      transition: {
        delay: 0,
      },
    },
    visible: {
      x: 0,
      opacity: 1,
      // transition: {
      //   delay: 0,
      // },
      // transition: {
      //   stiffness: 120,
      // },
    },
  };

  const path = {
    hidden: {
      transition: {
        delay: 0,
      },
    },
    visible: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <div id="about" className="borde w-full overflow-hidden  border-white">
      {/* Title */}
      <div className="borde w-full border-white">
        <h1 className=" p-5 text-center text-5xl font-bold">About Me</h1>
        <button
          onClick={() => {
            setIsDoe((prev) => !prev);
          }}
          className="mx-auto w-fit rounded-lg bg-priClr p-2"
        >
          do
        </button>
      </div>

      <div className="flex justify-center">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView={isDo ? "visible" : "hidden"}
          exit="hidden"
          // viewport={{ once: true }}
          className="mx-aut borderr w-[50%] border-white text-black"
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
                    variants={imgItem}
                    transition={{
                      delay: i == 0 ? 0.1 : i == 1 ? 1.3 : 2.5,
                    }}
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
                      // exit={"hidden"}
                      transition={{
                        delay: i == 0 ? 0.5 : i == 1 ? 1.7 : 2.9,
                      }}
                      // style={{ background: data.bgClr }}
                      className="borde-[3px] relative w-[25rem] rounded-xl border-white p-3.5  "
                    >
                      <h2 className=" font-semibold ">{data.institution}</h2>
                      <p className="text-lg font-semibold text-priClr">
                        {data.course}
                      </p>

                      {/* <div className="triShape absolute -left-8 top-[30%] h-8 w-8 bg-white"></div> */}
                    </motion.div>
                  </div>
                </motion.div>
                {i != 2 && (
                  <motion.div className="borde w-20 border-white">
                    <SingleLine delay={i == 0 ? 0.7 : 1.9} />
                    <SingleLine delay={i == 0 ? 0.9 : 2.1} />
                    <SingleLine delay={i == 0 ? 1.1 : 2.3} />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        <div className="borde relative w-[45%] border-white">
          <BackgroundSvg className="absolute left-0 top-0 h-full w-full" />

          {/* Languages */}
          <div className="borde absolute left-0 top-0 z-10 h-full w-full border-red-900">
            <div className="borde relative h-full w-full border-white ">
              {/* 1 */}
              {Languages.map((data, i) => {
                return (
                  <motion.div
                    initial={{ translateY: "-45%" }}
                    animate={{ translateY: "-55%" }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 1,
                      ease: "easeOut",
                    }}
                    key={i}
                    style={{ translateX: "-50%", translateY: "-50%" }}
                    className={`${data.position} absolute rounded-full bg-white object-contain `}
                  >
                    <div className="relative h-full w-full ">
                      <Image
                        alt="Image"
                        fill
                        className="rounded-full object-contain"
                        src={data.image}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
