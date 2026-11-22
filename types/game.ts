export interface DevlogSection {
  title: string;
  subtitle?: string;
  content: string[];
  image?: string;
  imageCaption?: string;
  isVideoPlaceholder?: boolean;
  videoPlaceholderDetails?: {
    title: string;
    description: string;
    note?: string;
  };
  keyTakeaways?: string[];
  codeSnippet?: string;
}

export interface GameProject {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  genre: string;
  role: string;
  platform: string;
  year: string;
  description: string;
  primaryFocus: string;
  myContribution: string[];
  tools: string[];
  itchUrl: string;
  githubUrl?: string;
  coverImage: string;
  screenshots: string[];
  highlights: string[];
  devlog: DevlogSection[];
}
