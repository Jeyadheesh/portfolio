"use client";
import { motion } from "framer-motion";
import React from "react";
import PhoneBg from "./PhoneBg";

type Props = {};

const ProjectBox = (props: Props) => {
  return (
    <div className="h-screen p-10">
      <motion.div className="check mx-auto h-[70%] w-[20rem] bg-white">
        <div className="m-auto h-10 w-10 bg-red-900"></div>
      </motion.div>
      {/* <PhoneBg /> */}
    </div>
  );
};

export default ProjectBox;
