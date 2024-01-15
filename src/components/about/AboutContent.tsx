"use client";
import { AnimatePresence, Variants, delay, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import DashedLine from "./DashedLine";
import Image from "next/image";

import { aboutData } from "./AboutData";
import { useTypewriter } from "react-simple-typewriter";
import SingleLine from "./SingleLine";
import BackgroundSvg from "./BackgroundSvg copy";
import NextJs1 from "../../../public/about1.png";
import { LanguagesShowcase, TechniquesData, skills } from "./LanguagesData";

interface Props {}

const AboutContent = (props: Props) => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // setInterval(() => {
    //   divRef.current?.focus();
    //   console.log(2);
    // }, 1000);
  }, []);

  return (
    <div id="about" className="borde w-full overflow-hidden  border-white">
      {/* Title */}
      <div className="borde w-full border-white">
        <h1 className=" p-5 text-center text-5xl font-bold">Skills</h1>
      </div>

      <div className="flex justify-center">
        {/* Left */}
        <div className="w-[45vw]">
          <div className="flex flex-col gap-5">
            {skills.map((skill, i) => {
              return (
                <div className="w-[80%] rounded-lg border-2 border-gray-700 p-5 shadow shadow-white">
                  <h1 className="mb-3 text-center text-3xl font-bold text-priClr">
                    {skill.name}
                  </h1>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {skill.techniques.map((data, ii) => {
                      return (
                        <div className=" bg-orange-10 flex cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-xl border-2 border-purple-600 p-3 transition-all duration-100 hover:scale-[1.06] hover:bg-gradient-to-tr hover:from-violet-500 hover:to-violet-600 hover:shadow-sm hover:shadow-white">
                          <div>
                            <Image
                              alt="Image"
                              className="h-10 w-10  rounded-full bg-white object-contain"
                              src={TechniquesData[data].image}
                            />
                          </div>
                          <h1 className="text- font-semibold">
                            {TechniquesData[data].name}
                          </h1>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className=" borde relative h-screen w-[45vw] border-white">
          <BackgroundSvg className="borde absolute left-0 top-0 h-full w-full border-priClr" />

          {/* Languages */}
          <div
            ref={divRef}
            className="borde absolute left-0 top-0  z-10 h-full w-full border-white"
          >
            <div className="borde relative h-full w-full select-none border-white">
              {/* 1 */}
              {LanguagesShowcase.map((data, i) => {
                return (
                  <motion.div
                    // initial={{ translateY: "-45%" }}
                    // animate={{ translateY: "-55%" }}
                    // transition={{
                    //   repeat: Infinity,
                    //   repeatType: "reverse",
                    //   duration: 1,
                    //   ease: "easeOut",
                    // }}
                    key={i}
                    style={{ translateX: "-50%", translateY: "-50%" }}
                    className={`${data.position} card absolute cursor-pointer rounded-full border-2 border-white bg-white transition-all duration-150 hover:scale-110 hover:transition-all hover:duration-150`}
                  >
                    <div className="card-inner">
                      <div className="card-face front relative h-full  w-full ">
                        <Image
                          alt="Image"
                          fill
                          className="rounded-full object-contain"
                          src={data.image}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <div className="card-face back rounded-full">
                        {data.name}
                      </div>
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
