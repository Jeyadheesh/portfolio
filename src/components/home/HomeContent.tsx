"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Programmer from "../../../public/prgmr6.png";
import ReactImage from "../../../public/React_Logo_SVG.svg";
import ThreeLine from "../elements/ThreeLine";
import { motion } from "framer-motion";
import BackgroundSvg from "../about/BackgroundSvg";

type Props = {};

const HomeContent = (props: Props) => {
  const [XY, setXY] = useState<XY>({ X: "left-0", Y: "top-0" });
  const [text] = useTypewriter({
    words: ["Full Stack Developer", "Web Developer", "Programmer", "Coder"],
    loop: 0,
  });

  useEffect(() => {
    // const unsub = () => {
    //   document.addEventListener("mousemove", (e) => {
    //     const X = e.pageX;
    //     const Y = e.pageY;
    //     setXY({ X: X, Y: Y });
    //     console.log(X, Y, e.clientX, e.clientY);
    //   });
    // };
    // return () => {
    //   unsub();
    // };
  }, []);

  return (
    <div className="relative flex h-full overflow-hidden bg-gray-900 pt-[13vh]">
      {/* <div
        // style={{ top: XY.Y, left: XY.X }}
        className={`fixed bottom-20 left-20 h-[10rem] w-[10rem] rounded-full bg-priClr blur-[90px]`}
      ></div> */}

      <motion.div
        initial={{ translateX: -300, scale: 0 }}
        whileInView={{ translateX: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="borde flex h-full w-[60%] items-center  justify-center   border-red-700"
      >
        <div className=" borde   flex w-[70%] flex-col overflow-hidden rounded-xl border-priClr  text-5xl  font-bold text-slate-50 shadow-md shadow-priClr dark:text-slate-200">
          <div className=" z-10  bg-vscodeClr1 shadow-sm shadow-black">
            <div className="flex h-full  w-fit  gap-1 bg-vscodeClr p-3">
              <Image alt="ReactImage" src={ReactImage} width={20} height={20} />
              <p className="text-sm font-medium">HomeContent.tsx</p>
            </div>
          </div>
          <div className="flex flex-col gap-1 bg-vscodeClr p-3">
            <div>
              <p className=" text-2xl ">Hello!</p>
              <div className="flex gap-3">
                <p>I&apos;m </p>
                <div className="relative ">
                  <p className="italic text-priClr">Jeyadheesh</p>
                  <ThreeLine
                    width={30}
                    height={30}
                    className="-right-7 -top-3"
                  />
                </div>
              </div>
            </div>
            <span className="text-2xl">and</span>
            <p className="">
              I&apos;m a{" "}
              <span className="italic text-priClr">
                {text}
                <Cursor cursorStyle="|" />
              </span>
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ translateX: 1000, scale: 0 }}
        exit={{ scale: 0 }}
        animate={{ translateX: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="borde justify- flex h-full w-[40%] items-center border-red-700"
      >
        <div className=" programmer shadowImg relative h-[70%]  w-[70%]  overflow-hidden rounded-full border-4 border-actClr object-contain p-5">
          <Image className="z-10" fill alt="Image" src={Programmer} />
          {/* <div className="borde  absolute h-full w-full border-white object-contain">
            <BackgroundSvg />
          </div> */}
        </div>
      </motion.div>
    </div>
  );
};

export default HomeContent;
