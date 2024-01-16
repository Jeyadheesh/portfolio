"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import PhoneBg from "./PhoneBg";
import Ebuddy1 from "../../../public/ebuddy1.png";
import Ebuddy2 from "../../../public/ebuddy2.png";
import Ebuddy3 from "../../../public/ebuddy3.png";
import Tech1 from "../../../public/React_Logo_SVG.svg";
import Image from "next/image";
import { Projects } from "./ProjectsData";

type Props = {};

const ProjectBox = (props: Props) => {
  const [imgIndex, setImgIndex] = useState([0, 1, 2]);

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

  useEffect(() => {
    // console.log(imgIndex);
  }, [imgIndex]);
  var a = 1;
  var b = 2;

  return (
    <div
      className={` borde  flex   min-h-[80vh] items-center justify-around border-white`}
    >
      {/* <PhoneBg /> */}
      {/* <div className="box !bg-white"></div> */}
      <div
        onClick={showNextImg}
        className={`${a == b ? "order-1" : "order-none"}`}
      >
        <div className="borde  group relative h-[20rem] w-[35rem]  cursor-pointer border-white transition-all duration-100 hover:scale-[1.03] active:scale-100 active:transition-all active:duration-100">
          {/* 1 */}
          {imgIndex.map((data, i) => {
            return (
              <AnimatePresence key={i}>
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 0 }}
                  exit={{ opacity: 0 }}
                  key={i}
                  style={{ zIndex: Projects[0].images[i].z }}
                  className={`${Projects[0].images[i].position}  absolute h-full w-full  border-2 border-priClr transition-all  duration-100 group-hover:shadow-md group-hover:shadow-orange-400`}
                >
                  <div className="relative">
                    <Image
                      style={{}}
                      src={Projects[0].images[data].image}
                      className="object-contain"
                      alt="Project Image"
                    />
                  </div>
                  {/* <div>{data}</div> */}
                </motion.div>
              </AnimatePresence>
            );
          })}

          {/* 2 */}
        </div>
      </div>

      {/* Content */}
      <div className="flex w-5/12 flex-col gap-3">
        <motion.h1
          initial={
            {
              // letterSpacing: "2px",
            }
          }
          whileInView={
            {
              // letterSpacing: "0px",
              // transition: {
              //   duration: 0.5,
              // },
            }
          }
          className="w-fit text-5xl font-extrabold text-priClr"
        >
          Project Name
        </motion.h1>
        <p className="text-lg font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt asdf
          adsfjklsadfas jeytiy yi
        </p>
        <div>
          <div className="flex ">
            <h1 className="mb-2 flex text-2xl font-semibold text-orange-400 ">
              Technologies
            </h1>
            {/* <motion.h1 className="borde spin my-auto h-fit  w-fit animate-spin border-white text-2xl">
              ⚙️
            </motion.h1> */}
          </div>
          <ul className="flex select-none flex-wrap items-center  gap-3">
            <div
              // key={ii}
              className=" bg-orange-10 overflow- flex cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-purple-600 p-2 px-3  transition-all duration-100 hover:scale-[1.06] hover:bg-gradient-to-tr hover:from-violet-500 hover:to-violet-600 hover:shadow-sm hover:shadow-white"
            >
              <div className=" ">
                <Image
                  alt="Image"
                  className="h-fit w-10 rounded-full  bg-white object-contain"
                  src={Tech1}
                />
              </div>
              <h1 className="font-semibold">{"React"}</h1>
            </div>
            <li className="h-20 w-20 cursor-pointer rounded-lg bg-gray-300 p-2 transition-all duration-100 hover:scale-110 hover:duration-100">
              <div className="relative mx-auto h-[75%] w-[75%]">
                <Image alt="Technologies Image" fill className="" src={Tech1} />
              </div>
              <p className="text-center font-semibold text-black">React</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
