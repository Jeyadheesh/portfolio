"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import PhoneBg from "./PhoneBg";
import ProjectBox from "./ProjectBox";
import axios from "axios";

type Props = {};

const ProjectsContent = (props: Props) => {
  const [readmeContent, setReadmeContent] = useState("");

  const owner = "Jeyadheesh";
  const repo = "EBuddy";
  const path = "README.md";
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  console.log(token);

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
          `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/vnd.github.v3.raw",
            },
          },
        );

        // Safely decode base64-encoded content
        const decodedContent = decodeBase64(response.data.content);
        console.log(decodedContent);

        setReadmeContent(decodedContent);
      } catch (error) {
        console.error("Error fetching README:", error.message);
      }
    };

    fetchReadme();
  }, []);

  const decodeBase64 = (content: any) => {
    try {
      return atob(content);
    } catch (error: any) {
      console.log("Error decoding base64 content:", error.message);
      return "";
    }
  };
  return (
    <div className="text-white">
      {/* <PhoneBg /> */}
      {/* <pre>{readmeContent}</pre> */}
      {/* <div className="box !bg-white"></div> */}
      <div>
        <h1 className="p-5 text-center text-6xl font-bold">Projects</h1>
        <div className="flex flex-col gap-10">
          <ProjectBox />
          <ProjectBox />
          <ProjectBox />
        </div>
      </div>
    </div>
  );
};

export default ProjectsContent;
