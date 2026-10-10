import React from "react";
import { ShapeType } from "./types";

interface ShapeSvgProps {
  type: ShapeType;
  color: string;
  size: number;
}

export const ShapeSvg: React.FC<ShapeSvgProps> = ({ type, color, size }) => {
  const translucentColor = `${color}25`;

  const renderGeometry = () => {
    switch (type) {
      case "circle":
        return (
          <>
            <circle
              cx="30"
              cy="30"
              r="22"
              stroke={color}
              strokeWidth="2.5"
              fill={translucentColor}
            />
            <circle cx="30" cy="30" r="7" fill={color} />
            <line
              x1="30"
              y1="4"
              x2="30"
              y2="10"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="30"
              y1="50"
              x2="30"
              y2="56"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="4"
              y1="30"
              x2="10"
              y2="30"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="50"
              y1="30"
              x2="56"
              y2="30"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </>
        );
      case "square":
        return (
          <>
            <rect
              x="9"
              y="9"
              width="42"
              height="42"
              rx="4"
              stroke={color}
              strokeWidth="2.5"
              fill={translucentColor}
            />
            <rect
              x="22"
              y="22"
              width="16"
              height="16"
              rx="2"
              fill={color}
            />
            <circle cx="15" cy="15" r="2" fill={color} />
            <circle cx="45" cy="15" r="2" fill={color} />
            <circle cx="15" cy="45" r="2" fill={color} />
            <circle cx="45" cy="45" r="2" fill={color} />
          </>
        );
      case "triangle":
        return (
          <>
            <polygon
              points="30,8 53,49 7,49"
              stroke={color}
              strokeWidth="2.5"
              strokeLinejoin="round"
              fill={translucentColor}
            />
            <polygon
              points="30,22 41,43 19,43"
              fill={color}
              strokeLinejoin="round"
            />
          </>
        );
      case "diamond":
        return (
          <>
            <polygon
              points="30,6 54,30 30,54 6,30"
              stroke={color}
              strokeWidth="2.5"
              strokeLinejoin="round"
              fill={translucentColor}
            />
            <polygon
              points="30,18 42,30 30,42 18,30"
              fill={color}
              strokeLinejoin="round"
            />
          </>
        );
      case "hexagon":
        return (
          <>
            <polygon
              points="30,6 52,18 52,42 30,54 8,42 8,18"
              stroke={color}
              strokeWidth="2.5"
              strokeLinejoin="round"
              fill={translucentColor}
            />
            <polygon
              points="30,17 41,24 41,36 30,43 19,36 19,24"
              fill={color}
              strokeLinejoin="round"
            />
          </>
        );
      case "pentagon":
        return (
          <>
            <polygon
              points="30,7 52,23 44,49 16,49 8,23"
              stroke={color}
              strokeWidth="2.5"
              strokeLinejoin="round"
              fill={translucentColor}
            />
            <polygon
              points="30,18 42,27 37,42 23,42 18,27"
              fill={color}
              strokeLinejoin="round"
            />
          </>
        );
      case "star":
        return (
          <>
            <polygon
              points="30,6 36,22 53,23 39,34 44,51 30,41 16,51 21,34 7,23 24,22"
              stroke={color}
              strokeWidth="2"
              strokeLinejoin="round"
              fill={translucentColor}
            />
            <circle cx="30" cy="30" r="5" fill={color} />
          </>
        );
      case "octagon":
        return (
          <>
            <polygon
              points="17,7 43,7 53,17 53,43 43,53 17,53 7,43 7,17"
              stroke={color}
              strokeWidth="2.5"
              strokeLinejoin="round"
              fill={translucentColor}
            />
            <polygon
              points="22,17 38,17 43,22 43,38 38,43 22,43 17,38 17,22"
              fill={color}
              strokeLinejoin="round"
            />
          </>
        );
    }
  };

  return (
    <svg
      viewBox="0 0 60 60"
      width={size}
      height={size}
      style={{
        filter: `drop-shadow(0 0 10px ${color})`,
        overflow: "visible",
      }}
    >
      {renderGeometry()}
    </svg>
  );
};
