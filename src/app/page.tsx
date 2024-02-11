"use client";
import Navbar from "@/components/navbar/Navbar";
import HomeContent from "@/components/home/HomeContent";
import Image from "next/image";
import AboutContent from "@/components/skills/SkillsContent";
import ProjectsContent from "@/components/projects/ProjectsContent";
import ContactContent from "@/components/contact/ContactContent";
import EducationContent from "@/components/education/EducationContent";
import ScrollDetector from "@/components/elements/ScrollUp";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavbar } from "@/store/useNavbar";
// import { useIsVisible } from "@/components/elements/useIsVisible";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const { activeElement, setActiveElement } = useNavbar();
  const [topElementId, setTopElementId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollDir, setScrollDir] = useState("up");

  // let refs = [
  //   useRef<HTMLDivElement>(),
  //   useRef<HTMLDivElement>(),
  //   useRef<HTMLDivElement>(),
  //   useRef<HTMLDivElement>(),
  //   useRef<HTMLDivElement>(),
  // ];

  // const viewEnter = (e: any) => {
  //   setActiveElement(e.target.id);
  // };

  useEffect(() => {
    let previousScrollYPosition = window.scrollY;

    const handleScroll = () => {
      const currentScrollYPosition = window.scrollY;

      if (currentScrollYPosition > previousScrollYPosition) {
        setScrollDir("down");
      } else {
        setScrollDir("up");
      }

      previousScrollYPosition = currentScrollYPosition;
      if (containerRef.current) {
        const scrollTop = window.scrollY;
        const divElements = containerRef.current.children;

        let maxTop = -Infinity;
        let currentTopElementId: number | null = null;

        for (let i = 1; i < divElements.length; i++) {
          const rect = (divElements[i] as HTMLElement).getBoundingClientRect();

          if (
            (rect.top <= 150 && rect.top >= 0) ||
            (rect.bottom >= 350 && rect.bottom <= 400)
          ) {
            setActiveElement(divElements[i].id as Pages);
          }
          // if (i == 2) {
          //   console.log(rect.top, rect.bottom, scrollTop);
          // }
        }

        setTopElementId(currentTopElementId);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", () => {
      setScrollDir("down");
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.addEventListener("click", () => {
        setScrollDir("down");
      });
    };
  }, []);

  useEffect(() => {
    // console.log(inView, entry?.target.id);
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-gray-900 text-slate-50">
      {/* Home */}
      <Navbar scrollDir={scrollDir} />
      <motion.div
        // ref={(e) => (refs[0] = e)}
        // onViewportEnter={(e) => viewEnter(e)}
        id="home"
        className="borde relative h-[100vh] border-white"
      >
        <HomeContent />
      </motion.div>

      {/* Skills */}
      <motion.div
        // ref={(e) => (refs[1] = e)}
        // onViewportEnter={(e) => viewEnter(e)}
        id="skills"
        className="borde flex min-h-[100vh] flex-col items-center justify-center border-white pb-5"
      >
        <AboutContent />
      </motion.div>

      {/* Education */}
      <motion.div
        // ref={(e) => (refs[2] = e)}
        // onViewportEnter={(e) => viewEnter(e)}
        id="education"
        className="min-h-[100vh] flex-col items-center justify-center  border-white pb-5"
      >
        <EducationContent />
      </motion.div>

      {/* Projects */}
      <motion.div
        // ref={(e) => (refs[3] = e)}
        // onViewportEnter={(e) => viewEnter(e)}
        id="projects"
        className="min-h-screen overflow-hidden"
      >
        <ProjectsContent />
      </motion.div>

      {/* Contact */}
      <motion.div
        // ref={(e) => (refs[4] = e)}
        // onViewportEnter={(e) => viewEnter(e)}
        id="contact"
        className="items- flex min-h-screen w-full rotate-180 justify-center bg-svgBg1 bg-cover "
      >
        <ContactContent />
      </motion.div>
    </div>
  );
}
