"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import PhoneBg from "./PhoneBg";
import ProjectBox from "./ProjectBox";
import axios from "axios";
// import { decode } from "base64-js";

type Props = {};

const ProjectsContent = (props: Props) => {
  const [readmeContent, setReadmeContent] = useState("");
  const [projectsData, setProjectsData] = useState<GitInfoProp[] | []>([]);

  const owner = "Jeyadheesh";
  const repo = "EBuddy";
  const path = "README.md";
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  // console.log(token);

  const urlRegex = /\((https?:\/\/[^\s)]+)\)/g;

  const fetchGitInfo = async () => {
    console.log("in");

    try {
      const { data: gitInfo } = await axios.get<Array<GitInfoProp>>(
        "https://api.github.com/users/Jeyadheesh/starred",
      );
      // console.log(gitInfo);
      let finalInfo = gitInfo;
      finalInfo.forEach(async (data, i) => {
        const readMeData = await fetchReadme(data.name);
        // console.log(readMeData);
        finalInfo[i] = { ...data, readmedata: readMeData };
      });
      // console.log(finalInfo);
      setProjectsData(finalInfo);
    } catch (error) {
      console.log("Error fetching GitInfo:", error.message);
    }
  };

  const fetchReadme = async (repo: string) => {
    try {
      const { data: rawReadME } = await axios.get(
        `https://api.github.com/repos/${owner}/${repo}/readme`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github.raw+json",
          },
        },
      );

      const matches: Array<string> = rawReadME.match(urlRegex);
      // console.log("matches : ", matches);

      if (matches) {
        const links = matches.map((match) => match.split("(")[1].split(")")[0]);
        // console.log(links);
        return links;
      } else {
        console.log("No links found in the input text.");
      }
      return [""];
      // Set the README content in state
      // setReadmeContent(decodedContent);
    } catch (error) {
      console.log("Error fetching README:", error.message);
    }
  };

  useEffect(() => {
    // Call the fetchReadme function
    // fetchReadme();
    fetchGitInfo();
  }, []);

  useEffect(() => {
    console.log("projectsData : ", projectsData);
  }, [projectsData]);

  return (
    <div className=" text-white">
      {/* <PhoneBg /> */}
      {/* <pre>{readmeContent}</pre> */}
      {/* <div className="box !bg-white"></div> */}
      <div>
        <h1 className="p-5  text-center text-6xl font-bold">Projects</h1>
        {/* <h1>{projectsData.length}</h1> */}
        <div className="mt-[15rem] flex flex-col gap-[10rem] ">
          {projectsData.length != 0 &&
            projectsData.map((data, i) => {
              return (
                <div key={i}>
                  <ProjectBox
                    keyy={i}
                    isLeft={(i + 1) % 2 == 0 ? false : true}
                    projectData={data}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsContent;
