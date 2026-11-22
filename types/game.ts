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
  myContribution: string[];
  tools: string[];
  itchUrl: string;
  githubUrl?: string;
  coverImage: string;
  screenshots: string[];
  highlights: string[];
}
