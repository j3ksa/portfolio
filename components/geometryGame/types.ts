export type GameState = "idle" | "playing" | "gameover";

export type ShapeType =
  | "circle"
  | "square"
  | "triangle"
  | "diamond"
  | "hexagon"
  | "pentagon"
  | "star"
  | "octagon";

export interface ShapeInstance {
  id: number;
  type: ShapeType;
  color: string;
  x: number;
  y: number;
  size: number;
  spawnTime: number;
  windowMs: number;
}

export interface HitEffect {
  id: number;
  text: string;
  x: number;
  y: number;
  color: string;
}

export interface Particle {
  id: number;
  x: number;
  y: number;
  angle: number;
  color: string;
}
