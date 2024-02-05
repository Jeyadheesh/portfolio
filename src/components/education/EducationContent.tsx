"use client";
import { Variants, motion } from "framer-motion";
import React, { useState } from "react";
import { educationData } from "./EducationData";
import Image from "next/image";
import SingleLine from "../skills/SingleLine";
import TooltipLink from "../elements/TooltipLink";

type Props = {};

const EducationContent = (props: Props) => {
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

  const doAnimation = () => {
    setIsDoe(false);
    setTimeout(() => {
      setIsDoe(true);
    }, 400);
  };

  return (
    <div className="overflow-hidden">
      {/* Title */}
      <div className="flex items-center justify-center gap-0 ">
        <div className="borde border-white">
          <h1 className=" p-5 text-center text-3xl font-bold md:text-5xl">
            Education
          </h1>
        </div>
        {/* <button
          onClick={() => {
            setIsDoe(false);
            setTimeout(() => {
              setIsDoe(true);
            }, 400);
          }}
          className=" w-fit rounded-lg bg-priClr p-2"
        >
          do
        </button> */}
        <div>
          <TooltipLink
            image="/animation1.svg"
            onClickFun={doAnimation}
            name="Animate"
            size="md:h-9 md:w-9 w-7 h-7"
          />
        </div>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView={isDo ? "visible" : "hidden"}
        exit="hidden"
        viewport={{ once: true }}
        className="borde  mx-auto border-white text-black"
      >
        {educationData.map((data, i) => {
          return (
            <motion.div
              key={i}
              variants={item}
              className="borde mx-auto flex  w-fit  flex-col  gap-2 border-red-900 pb-3 text-slate-50 md:gap-3"
            >
              {/* Box */}
              <motion.div
                className={`borde item-center  group relative  flex justify-center gap-7 border-white`}
              >
                {data.images?.map((d, i) => {
                  return (
                    <div
                      key={i}
                      className={`${d.position} absolute opacity-50 transition-transform duration-200  `}
                    >
                      <div className="relative h-8 w-8 md:h-16 md:w-16">
                        <Image
                          alt="Image"
                          fill
                          src={`${d.name}`}
                          className=" object-contain"
                        />
                      </div>
                    </div>
                  );
                })}

                <motion.div
                  variants={imgItem}
                  transition={{
                    delay: i == 0 ? 0.1 : i == 1 ? 1.3 : 2.5,
                  }}
                  // initial={{ opacity: 0, translateY: 100 }}
                  // whileInView={{ opacity: 1, translateY: 0 }}
                  // transition={{ duration: 0.4 }}
                  className="borde flex  flex-col border-white  "
                >
                  <div className="relative mx-auto h-[20vw] w-[16vw] md:mx-0  md:h-32 md:w-24">
                    <Image
                      alt="Image"
                      className=" borde rounded-lg  border-white object-contain"
                      src={data.image}
                      fill
                    />
                  </div>
                  <h1 className="borde w-[120%] text-nowrap border-white text-xs  font-semibold md:text-base  ">
                    {data.batch}
                  </h1>
                </motion.div>

                <div className="borde  border-white">
                  <motion.div
                    variants={itemBox}
                    // exit={"hidden"}
                    transition={{
                      delay: i == 0 ? 0.5 : i == 1 ? 1.7 : 2.9,
                    }}
                    // style={{ background: data.bgClr }}
                    className="relative w-[65vw] cursor-pointer  rounded-xl border-2 border-gray-400 bg-gray-800 p-2 md:w-[50vw] md:border-[3px] md:p-3.5  "
                  >
                    <div className="mb-0.5 flex items-center gap-1 md:mb-2 md:gap-3">
                      <div className="borde relative hidden h-5 w-5 border-white md:block md:h-[2.2rem] md:w-[2.2rem]  ">
                        <Image
                          alt="Image"
                          src={"/college3.svg"}
                          className="object-contain"
                          fill
                        />
                      </div>
                      <h2 className="text-[0.75rem] font-normal leading-5 md:text-3xl md:font-semibold md:leading-snug">
                        {data.institution}
                      </h2>
                    </div>
                    <div className="flex items-center gap-1 md:gap-3">
                      <div className="relative hidden h-5 w-5 md:block md:h-[2.2rem] md:w-[2.2rem]  ">
                        <Image
                          alt="Image"
                          src={"/course1.svg"}
                          className="object-contain"
                          fill
                        />
                      </div>
                      <p className="text-[0.75rem] font-normal leading-5 text-priClr md:text-3xl md:font-semibold md:leading-snug">
                        {data.course}
                      </p>
                    </div>

                    <div className="triShape absolute -left-5 top-[30%] h-5 w-5 bg-[rgb(156_163_175)] md:-left-8 md:top-[30%] md:h-8 md:w-8"></div>

                    {/* <div className="triShape absolute -left-8 top-[30%] h-8 w-8 bg-white"></div> */}
                  </motion.div>
                </div>
              </motion.div>
              {i != 2 && (
                <motion.div className="borde w-12 border-white md:w-20">
                  <SingleLine delay={i == 0 ? 0.7 : 1.9} />
                  <SingleLine delay={i == 0 ? 0.9 : 2.1} />
                  <SingleLine delay={i == 0 ? 1.1 : 2.3} />
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default EducationContent;
