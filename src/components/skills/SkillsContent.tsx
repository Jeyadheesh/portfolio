"use client";
import {
  AnimatePresence,
  VariantLabels,
  Variants,
  delay,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import DashedLine from "./DashedLine";
import Image from "next/image";

import { aboutData } from "./SkillsData";
import { useTypewriter } from "react-simple-typewriter";
import SingleLine from "./SingleLine";
import BackgroundSvg from "./BackgroundSvg copy";
import NextJs1 from "../../../public/about1.png";
import { LanguagesShowcase, TechniquesData, skills } from "./LanguagesData";

interface Props {}

const AboutContent = (props: Props) => {
  const [hoverElement, setHoverElement] = useState("");
  const divRef = useRef<HTMLDivElement>(null);

  const onHoverEffect = (e: Event) => {
    // console.log((e.target as HTMLElement)?.children[1]?.textContent);

    setHoverElement(
      (e.target as HTMLElement)?.children[1]?.textContent as string,
    );
  };

  useEffect(() => {
    // setInterval(() => {
    //   divRef.current?.focus();
    //   console.log(2);
    // }, 1000);
  }, []);

  return (
    <div className="borde w-full overflow-hidden  border-white">
      {/* Title */}
      <div className="borde w-full border-white">
        <h1 className=" p-5 text-center text-5xl font-bold">Skills</h1>
      </div>

      <div className="flex justify-center">
        {/* Left */}
        <div className="w-[50vw]">
          <div className="flex flex-col gap-5">
            {skills.map((skill, i) => {
              return (
                <div
                  key={i}
                  className="w-[80%] rounded-lg border-2 border-gray-700 px-2 py-5 shadow shadow-white"
                >
                  <h1 className="mb-3 text-center text-3xl font-bold text-priClr">
                    {skill.name}
                  </h1>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {skill.techniques.map((data, ii) => {
                      return (
                        <motion.div
                          onHoverStart={(e) => onHoverEffect(e)}
                          onHoverEnd={(e) => setHoverElement("")}
                          key={ii}
                          className=" bg-orange-10 flex cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-xl border-2 border-purple-600 px-3 py-3 transition-all duration-100 hover:scale-[1.06] hover:bg-gradient-to-tr hover:from-violet-500 hover:to-violet-600 hover:shadow-sm hover:shadow-white"
                        >
                          <div className="">
                            <Image
                              alt="Image"
                              className="h-10 w-10 rounded-full bg-white  object-contain p-[0.11rem]"
                              src={TechniquesData[data].image}
                            />
                          </div>
                          <h1 className="text- font-semibold">
                            {TechniquesData[data].name}
                          </h1>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className=" borde relative h-[45vw] w-[45vw] border-white">
          <BackgroundSvg className="borde h-full w-full rounded-full border-priClr" />

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
                    className={`${data.position} ${
                      data.name == hoverElement && "hovered"
                    } card borde-2 absolute cursor-pointer rounded-full border-white bg-white p-0.5 transition-all duration-150 hover:scale-110 hover:transition-all hover:duration-150`}
                  >
                    <div
                      className={`${
                        data.name == hoverElement && "hoveredCard"
                      } card-inner `}
                    >
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
