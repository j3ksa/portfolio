export interface BioHighlight {
  label: string;
  category: "engineering" | "gamedev" | "passion";
}

export const bioData = {
  title: "About Me",
  subtitle: "Engineering background · Game development focus",
  intro:
    "Adaptable Software Engineer with 5+ years of full-stack development experience, actively transitioning into game development. Solid foundation in C# programming, Unity engine fundamentals, and interactive audio implementation using FMOD. Combines strong software architecture principles, debugging practices, and professional team experience with a dedicated focus on gameplay mechanics and game design.",
  interests:
    "My journey into games started way back with my first copy of CD-Action—spending countless hours diving into cover disc demos and reading about new game worlds. Over the years, that early fascination grew into a deep love for indie games that take bold creative risks and deliver standout atmosphere, as well as turn-based strategy games where tactical depth, deliberate decision-making, and emergent systems shine. I love dissecting what makes games engaging and bringing that same creative curiosity, coupled with solid software engineering discipline, into crafting memorable gameplay experiences.",
  tags: [
    { label: "Unity & C#", iconName: "unity" },
    { label: "FMOD Interactive Audio", iconName: "fmod" },
    { label: "Indie Games", iconName: "indie" },
    { label: "Turn-Based Strategy", iconName: "strategy" },
    { label: "CD-Action Generation", iconName: "cdaction" },
    { label: "Full-Stack Architecture", iconName: "code" },
  ],
};
