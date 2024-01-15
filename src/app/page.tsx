import Navbar from "@/components/navbar/Navbar";
import HomeContent from "@/components/home/HomeContent";
import Image from "next/image";
import AboutContent from "@/components/about/AboutContent";
import ProjectsContent from "@/components/projects/ProjectsContent";
import ContactContent from "@/components/contact/ContactContent";
import EducationContent from "@/components/education/EducationContent";

export default function Home() {
  return (
    <div className="bg-gray-900 text-slate-50">
      {/* Home */}
      <div className="relative h-[100vh]">
        <Navbar />
        <HomeContent />
      </div>

      {/* About */}
      <div className="borde flex min-h-[100vh] flex-col items-center justify-center border-white pb-5">
        <AboutContent />
      </div>

      {/* Education */}
      <div className="  min-h-[100vh] flex-col items-center justify-center border-white pb-5">
        <EducationContent />
      </div>

      {/* Projects */}
      <div className="min-h-screen">
        <ProjectsContent />
      </div>

      {/* Contact */}
      <div className="flex min-h-screen items-center justify-center">
        <ContactContent />
      </div>
    </div>
  );
}
