import React from "react";
import { Box } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { ShapeSvg } from "./ShapeSvg";
import { StartScreen } from "./StartScreen";
import { GameOverScreen } from "./GameOverScreen";
import { GameState, ShapeInstance, HitEffect, Particle } from "./types";

interface GameArenaProps {
  arenaRef: React.RefObject<HTMLDivElement>;
  gameState: GameState;
  activeShape: ShapeInstance | null;
  hitEffects: HitEffect[];
  particles: Particle[];
  onShapeClick: (e: React.MouseEvent) => void;
  onStart: () => void;
  onPlayAgain: () => void;
  onViewRules: () => void;
  score: number;
  fastestReaction: number | null;
  totalReaction: number;
  bestScore: number;
  bestReactionTime: number | null;
}

export const GameArena: React.FC<GameArenaProps> = ({
  arenaRef,
  gameState,
  activeShape,
  hitEffects,
  particles,
  onShapeClick,
  onStart,
  onPlayAgain,
  onViewRules,
  score,
  fastestReaction,
  totalReaction,
  bestScore,
  bestReactionTime,
}) => {
  return (
    <Box
      ref={arenaRef}
      position="relative"
      height={{ base: "310px", md: "350px" }}
      width="100%"
      backgroundImage="radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)"
      backgroundSize="22px 22px"
      userSelect="none"
      overflow="hidden"
    >
      {/* Floating Reaction Text Badges */}
      <AnimatePresence>
        {hitEffects.map((effect) => (
          <motion.div
            key={effect.id}
            initial={{ opacity: 1, y: 0, scale: 0.8 }}
            animate={{ opacity: 0, y: -30, scale: 1.15 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: effect.x,
              top: effect.y,
              transform: "translate(-50%, -100%)",
              pointerEvents: "none",
              fontWeight: "bold",
              fontSize: "13px",
              color: effect.color,
              textShadow: `0 0 8px ${effect.color}`,
              zIndex: 20,
            }}
          >
            ⚡ {effect.text}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Particle Sparks on Hit */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ x: p.x, y: p.y, opacity: 1, scale: 1 }}
          animate={{
            x: p.x + Math.cos(p.angle) * 36,
            y: p.y + Math.sin(p.angle) * 36,
            opacity: 0,
            scale: 0.2,
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          style={{
            position: "absolute",
            width: 5,
            height: 5,
            borderRadius: "50%",
            backgroundColor: p.color,
            boxShadow: `0 0 8px ${p.color}`,
            pointerEvents: "none",
            zIndex: 15,
          }}
        />
      ))}

      {/* ACTIVE SHAPE (During gameplay) */}
      {gameState === "playing" && activeShape && (
        <motion.div
          key={activeShape.id}
          initial={{ scale: 0, rotate: -25, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 600, damping: 24 }}
          onClick={onShapeClick}
          style={{
            position: "absolute",
            left: activeShape.x,
            top: activeShape.y,
            cursor: "crosshair",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ShapeSvg
            type={activeShape.type}
            color={activeShape.color}
            size={activeShape.size}
          />
        </motion.div>
      )}

      {/* START / IDLE SCREEN */}
      {gameState === "idle" && (
        <StartScreen
          onStart={onStart}
          bestScore={bestScore}
          bestReactionTime={bestReactionTime}
        />
      )}

      {/* GAME OVER SCREEN */}
      {gameState === "gameover" && (
        <GameOverScreen
          score={score}
          fastestReaction={fastestReaction}
          totalReaction={totalReaction}
          onPlayAgain={onPlayAgain}
          onViewRules={onViewRules}
        />
      )}
    </Box>
  );
};
