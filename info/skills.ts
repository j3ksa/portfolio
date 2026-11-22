import { Skill } from "types";
import { TbBrandNextjs, TbBrandReact } from "react-icons/tb";
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoDocker,
  BiSolidCloud,
  BiLogoGit,
} from "react-icons/bi";
import { SiJest, SiUnity, SiCsharp, SiBlender, SiFigma } from "react-icons/si";
import { FiVolume2 } from "react-icons/fi";
import { RiBearSmileFill } from "react-icons/ri";

export const skills: Skill[] = [
  {
    id: "unity",
    name: "Unity Engine",
    icon: SiUnity,
    color: "#FFFFFF",
  },
  {
    id: "csharp",
    name: "C#",
    icon: SiCsharp,
    color: "#9B4993",
  },
  {
    id: "fmod",
    name: "FMOD Audio",
    icon: FiVolume2,
    color: "#00A3E0",
  },
  {
    id: "git",
    name: "Git & GitHub",
    icon: BiLogoGit,
    color: "#F1502F",
  },
  {
    id: "blender",
    name: "Blender 3D",
    icon: SiBlender,
    color: "#EA7600",
  },
  {
    id: "figma",
    name: "Figma UI/UX",
    icon: SiFigma,
    color: "#A259FF",
  },
  {
    id: "ts",
    name: "TypeScript",
    icon: BiLogoTypescript,
    color: "#007acc",
  },
  {
    id: "js",
    name: "JavaScript",
    icon: BiLogoJavascript,
    color: "#F0DB4F",
  },
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
    id: "arch",
    name: "State Systems",
    icon: RiBearSmileFill,
    color: "#ECB63F",
  },
  {
    id: "docker",
    name: "Docker",
    icon: BiLogoDocker,
    color: "#0db7ed",
  },
  {
    id: "rest",
    name: "REST API",
    icon: BiSolidCloud,
    color: "#002C51",
  },
  {
    id: "jest",
    name: "Unit Testing",
    icon: SiJest,
    color: "#C63D14",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: BiLogoTailwindCss,
    color: "#06b6d4",
  },
];
