"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import PhoneBg from "./PhoneBg";
import ProjectBox from "./ProjectBox";
import axios from "axios";
import Spinner from "../elements/Spinner";
// import { decode } from "base64-js";

type Props = {};

const ProjectsContent = (props: Props) => {
  // const [readmeContent, setReadmeContent] = useState("");
  const [projectsData, setProjectsData] = useState<GitInfoProp[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);

  const owner = "Jeyadheesh";
  const repo = "EBuddy";
  const path = "README.md";
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  // console.log(token);

  const urlRegex = /\((https?:\/\/[^\s)]+)\)/g;

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

  const fetchGitInfo = async () => {
    setIsLoading(true);
    // console.log("fetchGitInfo Called");

    try {
      const { data: gitInfo } = await axios.get<Array<GitInfoProp>>(
        "https://api.github.com/users/Jeyadheesh/starred",
      );
      // console.log(gitInfo);
      let finalInfo = gitInfo;

      for (let index = 0; index < gitInfo.length; index++) {
        if (gitInfo[index].name != "Jeyadheesh") {
          const element = await fetchReadme(gitInfo[index].name);
          finalInfo[index] = {
            ...gitInfo[index],
            readmedata: element as string[],
          };
        }
      }
      // console.log(finalInfo);
      setProjectsData(finalInfo);
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching GitInfo:", error.message);
    }
  };

  useEffect(() => {
    fetchGitInfo();
  }, []);

  // useEffect(() => {
  //   // console.log("projectsData : ", projectsData.length);
  // }, [projectsData]);

  return (
    <div className=" text-white">
      {/* <PhoneBg /> */}
      {/* <pre>{readmeContent}</pre> */}
      {/* <div className="box !bg-white"></div> */}
      <div>
        <h1 className="p-5  text-center text-3xl font-bold md:text-5xl">
          Projects
        </h1>
        {/* <h1>{projectsData.length}</h1> */}
        {isLoading ? (
          <div className="mt-10">
            <Spinner />
          </div>
        ) : (
          <div className="mt-10 flex flex-col gap-[10rem] md:mt-[15rem] ">
            {projectsData?.map((data, i) => {
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
        )}
      </div>
    </div>
  );
};

export default ProjectsContent;
