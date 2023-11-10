import { Skill } from "@types";
import { TbBrandNextjs, TbBrandReact } from "react-icons/tb";
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoRedux,
  BiLogoSass,
  BiLogoDocker,
  BiLogoGraphql,
  BiSolidCloud,
  BiLogoGit,
} from "react-icons/bi";
import { SiJest, SiStorybook } from "react-icons/si";
import { RiBearSmileFill } from "react-icons/ri";
import { GiOctopus } from "react-icons/gi";

export const skills: Skill[] = [
  {
    id: "next",
    name: "Next.js",
    icon: TbBrandNextjs,
    color: "white",
  },
  {
    id: "react",
    name: "React",
    icon: TbBrandReact,
    color: "#61DBFB",
  },
  {
    id: "js",
    name: "javascript",
    icon: BiLogoJavascript,
    color: "#F0DB4F",
  },
  {
    id: "ts",
    name: "typescript",
    icon: BiLogoTypescript,
    color: "#007acc ",
  },
  {
    id: "tailwind",
    name: "tailwindCSS",
    icon: BiLogoTailwindCss,
    color: "#06b6d4",
  },
  {
    id: "sass",
    name: "Sass",
    icon: BiLogoSass,
    color: "#c69",
  },
  {
    id: "redux",
    name: "Redux",
    icon: BiLogoRedux,
    color: "#00a7e5",
  },
  {
    id: "zustand",
    name: "Zustand",
    icon: RiBearSmileFill,
    color: "#ECB63F",
  },
  {
    id: "jest",
    name: "Jest",
    icon: SiJest,
    color: "#C63D14",
  },
  {
    id: "reactTesting",
    name: "RTL",
    icon: GiOctopus,
    color: "#FC4544",
  },
  {
    id: "storybook",
    name: "StoryBook",
    icon: SiStorybook,
    color: "#FF4785",
  },
  {
    id: "graph",
    name: "GraphQl",
    icon: BiLogoGraphql,
    color: "#e535ab",
  },
  {
    id: "rest",
    name: "RestApi",
    icon: BiSolidCloud,
    color: "#002C51",
  },
  {
    id: "docker",
    name: "Docker",
    icon: BiLogoDocker,
    color: "#0db7ed",
  },
  {
    id: "git",
    name: "Git",
    icon: BiLogoGit,
    color: "#F1502F",
  },
];
