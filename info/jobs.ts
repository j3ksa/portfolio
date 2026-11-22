import Auction from "public/projects/auction.png";
import Banach from "public/projects/banachLanding.png";
import Diamond from "public/projects/diamond.png";
import KupBSV from "public/projects/kupBsv.png";
import PayBSV from "public/projects/PayBsv.png";
import Pondemia from "public/projects/pondemia.png";
import Soundoshi from "public/projects/soundoshi.png";
import Varomax from "public/projects/varomax.png";
import Guestline from "public/projects/guestline.png";
import GigaClear from "public/projects/gigaclear.png";
import BanachLogo from "public/logos/banachLogo.png";
import SoundoshiLogo from "public/logos/soundhoshiLogo.svg";
import { Job } from "types";

export const jobs: Job[] = [
  {
    id: "rockwool",
    name: "Rockwool",
    time: "1 year and ongoing",
    role: "Full-stack .NET Developer",
    color: "#E53E3E",
    description: `I currently work as a Full-Stack .NET Developer at Rockwool. \n
I develop and maintain critical internal applications as well as advanced software dedicated to factories and production lines. \n
Working in the C# and .NET ecosystem on highly reliable systems designed to meet industrial standards perfectly complements my passion for game development and system logic in the Unity engine.`,
    monthsInWork: 12,
    technologies: ["C#", ".NET", "Full-stack", "Industrial Software", "System Architecture", "SQL"],
  },
  {
    id: "cogen",
    name: "Co-GEN",
    time: "6 months",
    role: "Full-stack Developer",
    color: "#9F7AEA",
    description: `As a Full-stack Developer at Co-GEN, I contributed to the development of an innovative AI project aimed at simplifying and automating the process of submitting funding applications. \n
My main achievement was designing and implementing a high-performance PDF parser from scratch, capable of handling complex, large files and extracting data for machine learning models. \n
I was responsible for the entire tech stack – integrating the backend, endpoints, and presentation layer.`,
    monthsInWork: 6,
    technologies: ["Full-stack", "TypeScript", "Node.js", "AI Integration", "High-Volume PDF Parser", "REST API"],
  },
  {
    id: "bitpeak",
    name: "BitPeak",
    time: "2 years 1 month",
    role: "Frontend Developer",
    color: "#38B2AC",
    description: `As a Frontend Developer at BitPeak, I worked on an advanced project for the aviation sector, operating on a Big Data architecture. \n
I was involved in designing, optimizing, and implementing interfaces for presenting and visualizing vast datasets in real-time. \n
I was responsible for rendering performance, seamless state management, and faultless handling of asynchronous data streams.`,
    monthsInWork: 25,
    technologies: ["React", "TypeScript", "Big Data", "Data Visualization", "Async Streams", "Optimization"],
  },
  {
    id: "soundoshi",
    name: "Soundoshi",
    time: "2 years",
    role: "Co-founder & Frontend Developer",
    image: SoundoshiLogo,
    color: "#F16564",
    description: `Unusual two years, during which I was not only a React developer but also a co-founder and person responsible for the development of the music platform "Soundoshi". \n
I was responsible for designing and building the front-end in Next.js/React, API integration, performance optimization, and adapting the interface to the needs of musicians and fans around the world. \n
This experience taught me product management, working in a dynamic team, and combining passion with engineering.`,
    monthsInWork: 24,
    projects: [
      {
        id: "soundoshi",
        name: "Soundoshi",
        image: Soundoshi,
        link: "https://www.soundoshi.com/",
      },
      {
        id: "auction",
        name: "Auction",
        image: Auction,
        link: "https://pray-for-ukraine.vercel.app/",
      },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Audio Platform", "WebSockets"],
  },
  {
    id: "banach",
    name: "Banach Group",
    time: "8 months",
    role: "React Frontend Developer",
    image: BanachLogo,
    color: "white",
    description: `Working as a React Frontend Developer at Banach Group, where I created web applications and interfaces related to blockchain technology. \n
I designed React components, prototyped UI/UX, and collaborated with engineering teams to develop the architecture of web applications. \n
I significantly improved my skills in solving technical problems, team collaboration in agile methodologies, and adapting to rapidly changing market requirements.`,
    monthsInWork: 8,
    projects: [
      {
        id: "szyfr",
        name: "WieszCzemuMówiSięTuSzyfrem",
        image: Pondemia,
        link: "https://wieszczemumowisietuszyfrem.vercel.app/",
      },
      {
        id: "banach",
        name: "BanachGroup",
        image: Banach,
        link: "https://landingbanach.vercel.app/en",
      },
      {
        id: "kup",
        name: "KupBSV",
        image: KupBSV,
        link: "https://kupbsv.vercel.app/",
      },
      {
        id: "pay",
        name: "PayBSV",
        image: PayBSV,
        link: "https://paybsv.vercel.app/",
      },
    ],
    technologies: ["React", "JavaScript", "UI/UX Prototyping", "State Management"],
  },
  {
    id: "freelance",
    name: "Freelance",
    time: "4 months",
    role: "Freelance Developer",
    color: "green.300",
    description: `I work as a freelance developer, creating custom websites and responsive web applications using Next.js and React for business clients. \n
I independently manage the entire project lifecycle: from analyzing client requirements, through implementation, to deployment and monitoring.`,
    monthsInWork: 4,
    projects: [
      {
        id: "varomax",
        name: "Varomax",
        image: Varomax,
        link: "https://www.varomax.pl/",
      },
      {
        id: "diamond",
        name: "Diamond Fleet",
        image: Diamond,
        link: "https://www.diamondfleet.pl/",
      },
      {
        id: "hotels",
        name: "Hotels",
        image: Guestline,
        link: "https://hotels-j3ksa.vercel.app/",
      },
      {
        id: "gigaclear",
        name: "Gigaclear Code Challenge",
        image: GigaClear,
        link: "https://gigaclear-code-challenge.vercel.app/",
      },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Performance"],
  },
];
