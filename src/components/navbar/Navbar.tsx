"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "../../../public/logo2.png";
import Link from "next/link";
import ThreeLine from "../elements/ThreeLine";
import { motion } from "framer-motion";
import { navbarData } from "./NavbarData";
import { useNavbar } from "@/store/useNavbar";

interface Props {}

const Navbar = (props: Props) => {
  const { activeElement, setActiveElement } = useNavbar();
  const [scrollDir, setScrollDir] = useState("up");

  useEffect(() => {
    let previousScrollYPosition = window.scrollY;

    const handleScroll = () => {
      const currentScrollYPosition = window.scrollY;

      if (currentScrollYPosition > previousScrollYPosition) {
        setScrollDir("down");
        // console.log("down");
      } else {
        setScrollDir("up");
        // console.log("up");
      }

      previousScrollYPosition = currentScrollYPosition;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(activeElement);
  }, [activeElement]);

  return (
    <div
      className={`${
        scrollDir == "down" ? "-translate-y-full" : "translate-y-0"
      } shado-lg fixed top-0 z-50 block h-[13vh] w-full  bg-gray-900 text-slate-50 shadow-white transition-transform duration-200 `}
    >
      <div className="flex h-full items-center justify-around font-semibold ">
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
                  className="peer capitalize"
                  href={data.link}
                >
                  {data.name}
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
