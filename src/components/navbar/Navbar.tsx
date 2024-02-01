"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Logo from "../../../public/logo2.png";
import Link from "next/link";
import ThreeLine from "../elements/ThreeLine";
import { motion } from "framer-motion";
import { navbarData } from "./NavbarData";
import { useNavbar } from "@/store/useNavbar";

interface Props {
  scrollDir: string;
}

const Navbar = ({ scrollDir }: Props) => {
  const { activeElement, setActiveElement } = useNavbar();
  const tref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log(activeElement);
  }, [activeElement]);

  return (
    <div
      ref={tref}
      className={`${
        activeElement != "home" && scrollDir == "down"
          ? "-translate-y-full"
          : "translate-y-0"
      } shado-lg fixed top-0 z-50 block h-[13vh] w-full  bg-gray-900/80 text-slate-50 shadow-white backdrop-blur-sm transition-transform duration-500 `}
    >
      <div className="flex h-full items-center justify-around font-bold ">
        <Link href={"/"} className="borde  relative h-full w-24 border-white">
          <Image alt="Logo" src={Logo} fill className="object-contain" />
        </Link>
        <div className="flex gap-10">
          {/* lists */}
          {navbarData.map((data, i) => {
            return (
              <div key={i} className="borde relative border-black ">
                <Link
                  onClick={() => setActiveElement(data.name)}
                  className={`${
                    activeElement == data.name && "text-priClr"
                  } peer font-bold  hover:text-priClr`}
                  href={data.link}
                >
                  .{data.name}( )
                </Link>
                {activeElement == data.name && (
                  <ThreeLine
                    className="borde -right-4  -top-2 border-black transition-all duration-200 peer-hover:-right-5 peer-hover:-top-3"
                    width={20}
                    height={20}
                  />
                )}

                {/*  */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
