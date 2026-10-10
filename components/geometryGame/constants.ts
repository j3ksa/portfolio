import { ShapeType } from "./types";

export const SHAPES: ShapeType[] = [
  "circle",
  "square",
  "triangle",
  "diamond",
  "hexagon",
  "pentagon",
  "star",
  "octagon",
];

export const NEON_COLORS = [
  "#10B981", // Emerald green
  "#06B6D4", // Cyan
  "#EC4899", // Magenta/pink
  "#A855F7", // Purple
  "#EAB308", // Bright yellow
  "#F97316", // Neon orange
  "#38BDF8", // Sky blue
];

export const INITIAL_WINDOW_MS = 1800;
export const MIN_WINDOW_MS = 400;

// Calculate shrinking window based on current score
export const calculateWindowMs = (currentScore: number): number => {
  return Math.max(
    MIN_WINDOW_MS,
    Math.round(INITIAL_WINDOW_MS * Math.pow(0.93, currentScore))
  );
};

export const getRankBadge = (count: number) => {
  if (count >= 20) return { label: "Inhuman Precision 👑", color: "purple" };
  if (count >= 14) return { label: "Quantum Reflexes ⚡🔥", color: "pink" };
  if (count >= 9) return { label: "Cyber Ninja 🤖", color: "cyan" };
  if (count >= 5) return { label: "Speed Demon ⚡", color: "green" };
  if (count >= 2) return { label: "Agile Reflexes 🎯", color: "yellow" };
  return { label: "Warming Up 🌱", color: "gray" };
};
