"use client";
import Image from "next/image";
import React from "react";
import Logo from "../../../public/logo2.png";
import Link from "next/link";
import ThreeLine from "../elements/ThreeLine";
import { motion } from "framer-motion";

interface Props {}

const Navbar = (props: Props) => {
  return (
    <div className=" h-[13vh] bg-gray-900 text-slate-50 shadow-lg shadow-white ">
      <div className="flex h-full items-center justify-around font-semibold ">
        <Link href={"/"} className="borde  relative h-full w-24 border-white">
          <Image alt="Logo" src={Logo} fill className="object-contain" />
        </Link>
        <div className="flex gap-10">
          {/* lists */}
          <div className="borde relative border-black ">
            <Link className="peer" href={"/"}>
              Home
            </Link>
            <ThreeLine
              className="borde -right-4  -top-2 border-black transition-all duration-200 peer-hover:-right-5 peer-hover:-top-3"
              width={20}
              height={20}
            />

            {/*  */}
          </div>
          <div>Projects</div>
          <div>About</div>
          <div>Contact Us</div>
          <div>Dark Mode</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
