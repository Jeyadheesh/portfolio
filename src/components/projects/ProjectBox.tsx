"use client";
import {
  AnimatePresence,
  motion,
  useAnimate,
  useInView,
  usePresence,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import PhoneBg from "./PhoneBg";
import Ebuddy1 from "../../../public/ebuddy1.png";
import Ebuddy2 from "../../../public/ebuddy2.png";
import Ebuddy3 from "../../../public/ebuddy3.png";
import Tech1 from "../../../public/React_Logo_SVG.svg";
import Image from "next/image";
import { ProjectsImageTemplate } from "./ProjectsData";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import { TechniquesData } from "../about/LanguagesData";
import Link from "next/link";
import TooltipLink from "../elements/TooltipLink";

type Props = {
  keyy: number;
  isLeft: boolean;
  projectData: GitInfoProp;
};

const ProjectBox = ({ keyy, isLeft, projectData }: Props) => {
  // console.log("projectBox : ", projectData.readmedata);
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  let len = 3;
  // let len = projectData.readmedata?.length;
  const imgIn = len == 3 ? [0, 1, 2] : len == 2 ? [1, 2] : [1];
  const [imgIndex, setImgIndex] = useState(imgIn);
  const [ch, setCh] = useState("hai hello");
  const ref = useRef(null);
  const [text, helper] = useTypewriter({
    words: [ch],
    loop: 1,
  });
  // const isInView = useInView(ref);

  // useEffect(() => {
  //   console.log("Element is in view: ", isInView);
  // }, [isInView]);

  const showNextImg = () => {
    console.log("in");

    setImgIndex((prev) => {
      const newArr: Array<number> = [];
      prev.forEach((data) => {
        data == 2 ? newArr.push(0) : newArr.push(data + 1);
      });
      return newArr;
    });
  };

  const WriteText = () => {};

  const getIniAnimation = (data: number) => {
    let ans = isLeft
      ? ProjectsImageTemplate[data].lanimate
      : ProjectsImageTemplate[data].ranimate;
    return ans;
  };

  useEffect(() => {
    // console.log(imgIndex);
  }, [imgIndex]);

  // useEffect(() => {
  //   const check = async () => {
  //     await animate("li", { rotate: -5 });
  //     // await animate(scope.current, { scale: 0 });
  //     // await animate(scope.current, { rotate: 180 });
  //     // await animate(scope.current, { scale: 1 });
  //   };
  //   check();
  // }, [isInView]);

  return (
    <div
      key={keyy}
      className={`borde borde items-center justify-center border-white p-20  md:flex md:items-center md:justify-around`}
    >
      {/* <PhoneBg /> */}
      {/* <div className="box !bg-white"></div> */}
      <div
        // onClick={showNextImg}
        className={`${isLeft ? "md:order-none" : "md:order-1"}`}
      >
        <motion.div
          initial="linitial1"
          whileInView={"linitial2"}
          // ref={scope}
          className="borde  group relative min-h-[20rem] w-[35rem]  cursor-pointer border-white transition-all duration-100 hover:scale-[1.03] active:scale-100 active:transition-all active:duration-100"
        >
          {/* 1 */}
          {imgIndex.map((data, i) => {
            return (
              // <AnimatePresence key={i}>
              <motion.div
                variants={
                  isLeft
                    ? ProjectsImageTemplate[data].varient1
                    : ProjectsImageTemplate[data].varient1
                }
                // whileInView={
                //   // translateX: 0,
                //   isLeft
                //     ? ProjectsImageTemplate[data].lanimate
                //     : ProjectsImageTemplate[data].ranimate
                // }

                transition={{
                  // ease: [0.17, 0.67, 0.83, 0.67],
                  type: "spring",
                  // duration: 1,
                }}
                exit={
                  isLeft
                    ? ProjectsImageTemplate[data].linitial
                    : ProjectsImageTemplate[data].rinitial
                }
                key={i}
                style={{ zIndex: ProjectsImageTemplate[data].z }}
                className={`borde-[2px] absolute h-full w-full list-none  border-white  transition-all duration-200`}
              >
                <div
                  className={`${
                    isLeft
                      ? ProjectsImageTemplate[data].lposition
                      : ProjectsImageTemplate[data].rposition
                  } relative h-full w-full overflow-hidden border-[3px] border-priClr transition-all duration-200 group-hover:shadow-md group-hover:shadow-priClr`}
                >
                  <Image
                    style={{}}
                    fill
                    // Change this for image
                    // src={projectData.readmedata[i]}
                    src={projectData.readmedata[i]}
                    className="object-contain "
                    alt="Project Image"
                  />
                </div>
                {/* <div>{data}</div> */}
              </motion.div>
              // </AnimatePresence>
            );
          })}

          {/* 2 */}
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        // initial={{ scale: 0 }}
        // whileInView={{ scale: 1 }}
        // transition={{ type: "spring", duration: 0.7 }}
        className="flex w-5/12 flex-col gap-3"
      >
        <div className="flex items-center gap-3">
          <motion.h1
            // ref={scope}
            // initial={{
            //   scale: 0,
            //   opacity: 0,
            // }}
            // whileInView={{
            //   scale: 1,
            //   opacity: 1,
            //   // letterSpacing: "0px",
            //   // transition: {
            //   //   duration: 0.5,
            //   // },
            // }}
            className="w-fit text-5xl font-extrabold capitalize text-priClr"
          >
            {projectData.name}
          </motion.h1>
          <TooltipLink
            image={"/githubSvg4.svg"}
            link={projectData.homepage}
            name="Github"
            size="h-12 w-12"
          />
          <TooltipLink
            image={"/link1.svg"}
            link={projectData.homepage}
            name="Link"
            size="h-12 w-12"
          />
        </div>
        {/* <button onClick={WriteText} className="rounded-lg bg-priClr p-2">
          hai
        </button> */}
        <p className="text-lg font-semibold">{projectData.description}</p>
        <div>
          <div className="flex ">
            <h1 className="mb-2 flex text-2xl font-semibold text-orange-400 ">
              Technologies
            </h1>
            {/* <motion.h1 className="borde spin my-auto h-fit  w-fit animate-spin border-white text-2xl">
              ⚙️
            </motion.h1> */}
          </div>
          <ul className="flex select-none flex-wrap items-center  gap-3 ">
            {projectData?.topics?.map((data, i: number) => {
              return (
                <motion.div
                  key={i}
                  // initial={{ translateY: 100, opacity: 0 }}
                  // whileInView={{ translateY: 0, opacity: 1 }}
                  className="overflow- curso-pointer hover:scal-[1.06] bg-gradien-to-tr flex h-full cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-violet-600  bg-violet-500 from-violet-500 to-violet-600 p-2 px-3 transition-all duration-100 hover:shadow hover:shadow-purple-600  "
                >
                  {TechniquesData[data] && (
                    <div className="">
                      <Image
                        alt="Image"
                        className="h-7 w-7  rounded-full  bg-white object-contain"
                        src={TechniquesData[data].image}
                      />
                    </div>
                  )}
                  <h1 className="font-semibold ">{data}</h1>
                </motion.div>
              );
            })}
            {/* <li className="h-20 w-20 cursor-pointer rounded-lg bg-gray-300 p-2 transition-all duration-100 hover:scale-110 hover:duration-100">
              <div className="relative mx-auto h-[75%] w-[75%]">
                <Image alt="Technologies Image" fill className="" src={Tech1} />
              </div>
              <p className="text-center font-semibold text-black">React</p>
            </li> */}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectBox;
