import { StaticImageData } from "next/image";

export interface Job {
  id: string;
  name: string;
  time: string;
  image?: StaticImageData;
  color: string;
  description: string;
  monthsInWork: number;
  projects: Project[];
}

export interface Project {
  id: string;
  name: string;
  image: StaticImageData;
  link: string;
}
