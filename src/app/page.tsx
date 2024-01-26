"use client";
import Navbar from "@/components/navbar/Navbar";
import HomeContent from "@/components/home/HomeContent";
import Image from "next/image";
import AboutContent from "@/components/about/AboutContent";
import ProjectsContent from "@/components/projects/ProjectsContent";
import ContactContent from "@/components/contact/ContactContent";
import EducationContent from "@/components/education/EducationContent";
import ScrollDetector from "@/components/elements/ScrollUp";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavbar } from "@/store/useNavbar";
import { useIsVisible } from "@/components/elements/useIsVisible";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const { activeElement, setActiveElement } = useNavbar();

  const viewEnter = (e: any) => {
    setActiveElement(e.target.id);
  };
  useEffect(() => {
    // console.log(inView, entry?.target.id);
  }, []);

  return (
    <div className="bg-gray-900 text-slate-50">
      {/* Home */}
      <Navbar />
      <motion.div
        onViewportEnter={(e) => viewEnter(e)}
        id="home"
        className="borde relative h-[100vh] border-white"
      >
        <HomeContent />
      </motion.div>

      {/* About */}
      <motion.div
        onViewportEnter={(e) => viewEnter(e)}
        id="skills"
        className="borde flex min-h-[100vh] flex-col items-center justify-center border-white pb-5"
      >
        <AboutContent />
      </motion.div>

      {/* Education */}
      <motion.div
        onViewportEnter={(e) => viewEnter(e)}
        id="education"
        className="  min-h-[100vh] flex-col items-center justify-center border-white pb-5"
      >
        <EducationContent />
      </motion.div>

      {/* Projects */}
      <motion.div
        onViewportEnter={(e) => viewEnter(e)}
        id="projects"
        className="min-h-screen overflow-hidden"
      >
        <ProjectsContent />
      </motion.div>

      {/* Contact */}
      <motion.div
        onViewportEnter={(e) => viewEnter(e)}
        id="contact"
        className="items- flex min-h-screen justify-center "
      >
        <ContactContent />
      </motion.div>
    </div>
  );
}
