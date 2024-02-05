"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Programmer from "../../../public/prgmr6.png";
import ReactImage from "../../../public/React_Logo_SVG.svg";
import ThreeLine from "../elements/ThreeLine";
import { motion, useMotionValueEvent } from "framer-motion";
import BackgroundSvg from "../skills/BackgroundSvg";
import HomeBgSvg from "../elements/HomeBgSvg";
import Link from "next/link";
import Button from "../elements/Button";
import useMousePosition from "@/hooks/useMousePosition";

type Props = {};

const HomeContent = (props: Props) => {
  const [XY, setXY] = useState<XY>({ X: "left-0", Y: "top-0" });
  const [text] = useTypewriter({
    words: ["Full Stack Developer", "Programmer"],
    loop: 0,
  });

  // const { x, y } = useMousePosition();
  // console.log(x, y);

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
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-svgBg4 bg-cover pt-[13vh]  md:pt-[13vh]">
      {/* <div
        style={{ top: y, left: x }}
        className="absolute  h-20 w-20 -translate-x-[50%] -translate-y-[50%]  bg-red-500 blur-3xl"
      ></div> */}
      {/* <div id="snow"></div> */}
      {/* <div
        style={{ top: y, left: x }}
        className={`fixed bottom-20 left-20 h-[10rem] w-[10rem] rounded-full bg-priClr blur-[90px]`}
      ></div> */}

      {/* <HomeBgSvg className="absolute left-0 top-0 h-full w-full" />
      <HomeBgSvg className="absolute left-[50%] top-0 h-full w-full" /> */}

      <motion.div
        // initial={{ translateX: -300, scale: 0 }}
        // whileInView={{ translateX: 0, scale: 1 }}
        // transition={{
        //   type: "spring",
        //   stiffness: 260,
        //   damping: 20,
        // }}
        className="borde z-10 flex h-full w-11/12 flex-col items-center justify-center  gap-10 border-red-700  md:w-[50%]"
      >
        {/* Terminal */}
        <div className=" rounde-xl flex w-full  flex-col overflow-hidden rounded-lg border-[3px] border-priClr text-xl font-bold  text-slate-50  shadow-md shadow-gray-950 md:w-[70%] md:text-4xl">
          {/* Head */}
          <div className=" z-10 flex justify-between  bg-vscodeClr1 shadow shadow-vscodeClr1">
            <div className="flex h-full  w-fit  gap-2 bg-vscodeClr p-3">
              <Image alt="ReactImage" src={ReactImage} width={20} height={20} />
              <p className="text-sm font-medium">Me.tsx</p>
            </div>
            <div className="my-auto mr-8 flex gap-3 text-base">
              <div className="h-4 w-4 rounded-full bg-red-600"></div>
              <div className="h-4 w-4 rounded-full bg-yellow-400"></div>
              <div className="h-4 w-4 rounded-full bg-green-600"></div>
            </div>
          </div>
          {/* Body */}
          <div className="flex flex-col gap-1 bg-vscodeClr p-3  tracking-tight md:tracking-normal">
            <div>
              <p className=" text-base md:text-xl ">
                <span className="mr-2 text-sm text-[#636c83]">1</span>Hello!
              </p>
              <div className="flex gap-3">
                <p className="">
                  <span className=" mr-2 h-fit text-sm text-[#636c83]">2</span>
                  I&apos;m{" "}
                </p>
                <div className="relative ">
                  <p className=" text-priClr">Jeyadheesh</p>
                  <ThreeLine
                    width={28}
                    height={28}
                    className="-right-7 -top-3"
                  />
                </div>
              </div>
            </div>
            <span className=" text-base md:text-xl">
              <span className="mr-2 text-sm text-[#636c83]">3</span>and
            </span>
            <p className="">
              <span className="">
                <span className="mr-2 text-sm text-[#636c83]">4</span>I&apos;m a{" "}
              </span>
              <span className="tracking-tighter  text-priClr md:tracking-normal">
                {text}
                <Cursor cursorStyle="|" />
              </span>
            </p>
          </div>
        </div>

        {/* About Description */}
        {/* <div className="w-full p-3 text-[1.1rem] font-bold ">
          <p>
            &ldquo; Proficient full stack developer with a passion for crafting
            innovative solutions, and I am ready to contribute my skills and
            expertise to exciting new projects. &rdquo;
          </p>
        </div> */}

        {/* btn */}
        <div className="flex gap-5 ">
          <Link
            className="fill-priClr"
            href={"/Jeyadheesh_Resume.pdf"}
            target="_blank"
            download
          >
            <Button text="Resume" />
          </Link>
          <Link href={"#contact"} className="fill-priClr">
            <Button text="Contact" />
          </Link>
        </div>
      </motion.div>

      {/* <motion.div
        initial={{ translateX: 1000, scale: 0 }}
        exit={{ scale: 0 }}
        animate={{ translateX: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="justify- borde z-10 flex h-full w-[40%] items-center border-red-700"
      >
        <div className=" programmer shadowImg relative h-[70%]  w-[70%]  overflow-hidden rounded-full border-4 border-priClr/60 bg-white/50 object-contain p-5">
          <Image className="z-10" fill alt="Image" src={Programmer} />
          {/* <div className="borde  absolute h-full w-full border-white object-contain">
            <BackgroundSvg />
          </div>
        </div>
      </motion.div> */}
    </div>
  );
};

export default HomeContent;
