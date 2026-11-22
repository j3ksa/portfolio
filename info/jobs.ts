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
    time: "czerwiec 2025 - teraz",
    role: "Full-stack .NET Developer",
    color: "#E53E3E",
    description: `Obecnie pracuję jako Full-stack .NET Developer w strukturach Rockwool. \n
Rozwijam i utrzymuję krytyczne aplikacje wewnętrzne oraz zaawansowane oprogramowanie dedykowane fabrykom i liniom produkcyjnym. \n
Praca w ekosystemie C# i .NET nad systemami o wysokiej niezawodności i wymaganiach przemysłowych doskonale łączy się z moją pasją do programowania gier i logiki systemowej w silniku Unity.`,
    monthsInWork: 12,
    technologies: ["C#", ".NET", "Full-stack", "Industrial Software", "System Architecture", "SQL"],
  },
  {
    id: "cogen",
    name: "Co-GEN",
    time: "październik 2024 - marzec 2025",
    role: "Full-stack Developer",
    color: "#9F7AEA",
    description: `Jako Full-stack Developer w Co-GEN brałem udział w rozwoju innowacyjnego projektu AI mającego na celu ułatwienie i automatyzację składania wniosków o dofinansowania. \n
Moim głównym osiągnięciem było zaprojektowanie i wdrożenie od podstaw wydajnego parsera plików PDF, radzącego sobie ze złożonymi, wielkimi plikami i ekstrakcją danych pod modele sztucznej inteligencji. \n
Odpowiadałem za pełny stos technologiczny – integrację backendu, endpointów i warstwy prezentacji.`,
    monthsInWork: 6,
    technologies: ["Full-stack", "TypeScript", "Node.js", "AI Integration", "High-Volume PDF Parser", "REST API"],
  },
  {
    id: "bitpeak",
    name: "BitPeak",
    time: "grudzień 2023 - styczeń 2026",
    role: "Frontend Developer",
    color: "#38B2AC",
    description: `W BitPeak pracowałem jako Frontend Developer przy zaawansowanym projekcie dla sektora lotniczego, operującym na architekturze Big Data. \n
Zajmowałem się projektowaniem, optymalizacją oraz implementacją interfejsów do prezentacji i wizualizacji ogromnych zbiorów danych w czasie rzeczywistym. \n
Odpowiadałem za wydajność renderowania, płynne zarządzanie stanem i bezawaryjną obsługę asynchronicznych strumieni danych.`,
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
    description: `Niezwykłe dwa lata, podczas których byłem nie tylko programistą React, ale także współzałożycielem i osobą odpowiedzialną za rozwój platformy muzycznej "Soundoshi". \n
Odpowiadałem za projektowanie i budowę front-endu w Next.js/React, integrację API, optymalizację wydajności oraz dostosowywanie interfejsu do potrzeb muzyków i fanów z całego świata. \n
To doświadczenie nauczyło mnie zarządzania produktem, pracy w dynamicznym zespole i łączenia pasji z inżynierią.`,
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
    description: `Praca na stanowisku React Frontend Developera w Banach Group, gdzie tworzyłem aplikacje internetowe i interfejsy związane z technologią blockchain. \n
Projektowałem komponenty React, prototypowałem UI/UX oraz współpracowałem z zespołem inżynierów nad architekturą aplikacji internetowych. \n
Głęboko rozwinąłem umiejętności rozwiązywania problemów technicznych, pracy zespołowej w metodykach zwinnych oraz adaptacji do szybko zmieniających się wymagań rynku.`,
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
    description: `Działalność jako niezależny programista, realizujący dedykowane strony oraz responsywne aplikacje internetowe w Next.js i React dla klientów biznesowych. \n
Samodzielna realizacja pełnego cyklu życia projektów: od analizy wymagań klienta, przez implementację, po deployment i monitoring.`,
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
