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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log(activeElement);
  }, [activeElement]);

  return (
    <div
      ref={tref}
      className={`${
        activeElement == "home"
          ? "bg-transparent backdrop-blur-[3px]"
          : scrollDir == "down"
            ? "-translate-y-full"
            : "translate-y-0  backdrop-blur-sm"
      } shado-lg   fixed top-0 z-50 block h-[10vh] w-full bg-gray-900/80   text-slate-50 shadow-white transition-transform duration-500  md:block md:h-[13vh] `}
    >
      <div className="flex h-full items-center justify-around font-bold ">
        <Link href={"/"} className="borde  relative h-full w-24 border-white">
          <Image alt="Logo" src={Logo} fill className="object-contain" />
        </Link>

        {/* Hamburger Menu Btn */}
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative z-50 flex cursor-pointer flex-col gap-2 *:transition-all *:duration-500 md:hidden [&:not(:last-child)]:rounded-full"
        >
          <span
            className={`${
              isMenuOpen && "translate-y-[0.7rem] rotate-[45deg]"
            } block h-0.5 w-8  bg-white`}
          ></span>
          <span
            className={`${isMenuOpen && "opacity-0"} block h-0.5 w-8  bg-white`}
          ></span>
          <span
            className={`${
              isMenuOpen && "-translate-y-[0.55rem] -rotate-[45deg]"
            } block h-0.5 w-8  bg-white`}
          ></span>

          {/* Animation */}
          <motion.div
            className={`${
              isMenuOpen
                ? "fixed right-0 top-0 z-50 h-screen w-screen rounded-none"
                : "fixed right-0 top-0 h-0 w-0 overflow-hidden rounded-none"
            } z-30 flex flex-col items-center justify-center gap-5 bg-gray-900/95`}
          >
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

                  <ThreeLine
                    className={`${
                      activeElement == data.name ? "block" : "hidden"
                    } borde -right-4 -top-2  border-black transition-all duration-200 peer-hover:block`}
                    width={20}
                    height={20}
                  />

                  {/*  */}
                </div>
              );
            })}
          </motion.div>
        </div>

        <div className="hidden gap-10 md:flex ">
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

                <ThreeLine
                  className={`${
                    activeElement == data.name ? "block" : "hidden"
                  } borde -right-4 -top-2  border-black transition-all duration-200 peer-hover:block`}
                  width={20}
                  height={20}
                />

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
