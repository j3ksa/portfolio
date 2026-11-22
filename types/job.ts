import { StaticImageData } from "next/image";

export interface Job {
  id: string;
  name: string;
  time: string;
  role?: string;
  image?: StaticImageData;
  color: string;
  description: string;
  monthsInWork: number;
  projects?: Project[];
  technologies?: string[];
}

export interface Project {
  id: string;
  name: string;
  image: StaticImageData;
  link: string;
}
