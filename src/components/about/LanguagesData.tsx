import NextJs1 from "../../../public/nextjs1.png";
import Css1 from "../../../public/css1.png";
import Express1 from "../../../public/express1.png";
import Express2 from "../../../public/express2.png";
import Html1 from "../../../public/html1.png";
import Js1 from "../../../public/js1.png";
import Mongodb1 from "../../../public/mongodb.png";
import Mongodb2 from "../../../public/mongodb2.svg";
import Mongodb3 from "../../../public/mongodb3.svg";
import Mongodb4 from "../../../public/mongodb4.svg";
import Mysql1 from "../../../public/mysql1.png";
import Nodejs1 from "../../../public/nodejs1.png";
import Nodejs2 from "../../../public/nodejs2.png";
import NextJs2 from "../../../public/nextjs2.png";
import NextJs2Svg from "../../../public/nextjs2.svg";
import React1 from "../../../public/react1.png";
import React2 from "../../../public/react2.png";
import React3 from "../../../public/react3.png";
import Tailwind1 from "../../../public/tailwind1.png";
import Tailwind2 from "../../../public/tailwind2.png";
import Tailwind3 from "../../../public/tailwind3.png";
import C from "../../../public/c.png";
import Python from "../../../public/python.png";
import Java from "../../../public/java.png";
import ScoketIo from "../../../public/socketio.svg";
import JWT from "../../../public/jwt1.svg";
import { ValueOf } from "next/dist/shared/lib/constants";

export const LanguagesShowcase = [
  {
    name: "Next.js",
    image: NextJs2Svg,
    position: "top-[50%] left-[50%] h-[6rem] w-[6rem] ",
    animatePosition: {
      isXAxis: false,
      initial: "-45%",
      animate: "-55%",
    },
  },
  {
    name: "React",
    image: React1,
    position: "top-[45%] left-[25%] h-[6rem] w-[6rem]  ",
  },
  {
    name: "Node.js",
    image: Nodejs1,
    position: "top-[55%] left-[80%] h-[6rem] w-[6rem]  ",
  },
  {
    name: "CSS",
    image: Css1,
    position: "top-[15%] left-[85%] h-[6rem] w-[6rem]  ",
  },
  {
    name: "Express.js",
    image: Express2,
    position: "top-[10%] left-[25%] h-[6rem] w-[6rem]  ",
  },
  {
    name: "HTML",
    image: Html1,
    position: "top-[5%] left-[55%] h-[6rem] w-[6rem]  ",
  },
  {
    name: "Javascript",
    image: Js1,
    position: "top-[25%] left-[45%] h-[6rem] w-[6rem]  ",
  },
  {
    name: "MongoDB",
    image: Mongodb3,
    position: "top-[70%] left-[20%] h-[6rem] w-[6rem]  ",
  },
  {
    name: "MySQL",
    image: Mysql1,
    position: "top-[75%] left-[50%] h-[6rem] w-[6rem]  ",
  },
  {
    name: "TailwindCSS",
    image: Tailwind1,
    position: "top-[80%] left-[75%] h-[6rem] w-[6rem]  ",
  },
  {
    name: "C",
    image: C,
    position: "top-[30%] left-[65%] h-[6rem] w-[6rem]  ",
  },
  {
    name: "Python",
    image: Python,
    position: "top-[37%] left-[95%] h-[5rem] w-[5rem]  ",
  },
  {
    name: "Java",
    image: Java,
    position: "top-[90%] left-[35%] h-[5rem] w-[5rem]  ",
  },
];

export const TechniquesData = {
  html: { name: "HTML", image: Html1 },
  css: { name: "CSS", image: Css1 },
  javascript: { name: "Javascript", image: Js1 },
  nextjs: { name: "Next.js", image: NextJs2Svg },
  expressjs: { name: "Express", image: Express2 },
  mongodb: { name: "MongoDB", image: Mongodb3 },
  mysql: { name: "MySQL", image: Mysql1 },
  nodejs: { name: "Node.js", image: Nodejs1 },
  react: { name: "React", image: React1 },
  tailwindcss: { name: "TailwindCSS", image: Tailwind1 },
  c: { name: "C", image: C },
  python: { name: "Python", image: Python },
  java: { name: "Java", image: Java },
  socketio: { name: "Java", image: ScoketIo },
  jwt: { name: "JWT", image: JWT },
};

type A = typeof TechniquesData;

type SkillsType = {
  name: string;
  techniques: Array<keyof A>;
}[];

export const skills: SkillsType = [
  {
    name: "Frontend",
    techniques: ["html", "css", "javascript", "tailwindcss", "react", "nextjs"],
  },
  {
    name: "Backend",
    techniques: ["nodejs", "expressjs", "mongodb", "mysql"],
  },
  {
    name: "Programming Languages",
    techniques: ["c", "python", "java"],
  },
];
