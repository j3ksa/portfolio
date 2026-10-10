import React, { useState, useEffect, useRef, useCallback } from "react";
import { Box } from "@chakra-ui/react";
import { GameState, ShapeInstance, HitEffect, Particle } from "./types";
import { SHAPES, NEON_COLORS, calculateWindowMs } from "./constants";
import { playSound } from "./sound";
import { GameHud } from "./GameHud";
import { GameArena } from "./GameArena";

export const GeometryGame: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>("idle");
  const [score, setScore] = useState(0);
  const [fastestReaction, setFastestReaction] = useState<number | null>(null);
  const [totalReaction, setTotalReaction] = useState(0);
  const [activeShape, setActiveShape] = useState<ShapeInstance | null>(null);
  const [hitEffects, setHitEffects] = useState<HitEffect[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [bestScore, setBestScore] = useState(0);
  const [bestReactionTime, setBestReactionTime] = useState<number | null>(null);

  const arenaRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const spawnIdRef = useRef(0);
  const prevPositionRef = useRef<{ x: number; y: number } | null>(null);

  // Load high score from localStorage
  useEffect(() => {
    try {
      const savedScore = localStorage.getItem("geo_reflex_best_score");
      const savedReaction = localStorage.getItem("geo_reflex_best_reaction");
      if (savedScore) setBestScore(parseInt(savedScore, 10));
      if (savedReaction) setBestReactionTime(parseInt(savedReaction, 10));
    } catch {
      // Ignore localStorage access restrictions
    }
  }, []);

  const clearActiveTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const handleGameOver = useCallback(() => {
    clearActiveTimer();
    setActiveShape(null);
    setGameState("gameover");
    playSound("gameover", soundEnabled);

    setScore((currentScore) => {
      // Update best score
      try {
        const savedScore = localStorage.getItem("geo_reflex_best_score");
        const prevBest = savedScore ? parseInt(savedScore, 10) : 0;
        if (currentScore > prevBest) {
          setBestScore(currentScore);
          localStorage.setItem(
            "geo_reflex_best_score",
            currentScore.toString()
          );
        }
      } catch {
        // Ignore
      }
      return currentScore;
    });

    setFastestReaction((currentFastest) => {
      if (currentFastest !== null) {
        try {
          const savedReaction = localStorage.getItem(
            "geo_reflex_best_reaction"
          );
          const prevBestReaction = savedReaction
            ? parseInt(savedReaction, 10)
            : Infinity;
          if (currentFastest < prevBestReaction) {
            setBestReactionTime(currentFastest);
            localStorage.setItem(
              "geo_reflex_best_reaction",
              currentFastest.toString()
            );
          }
        } catch {
          // Ignore
        }
      }
      return currentFastest;
    });
  }, [soundEnabled]);

  const spawnShape = useCallback(
    (currentScore: number) => {
      clearActiveTimer();
      const arena = arenaRef.current;
      const arenaWidth = arena ? arena.clientWidth : 560;
      const arenaHeight = arena ? arena.clientHeight : 320;

      // Adjust shape size slightly with score (64px down to 50px)
      const size = Math.max(50, Math.round(64 - currentScore * 0.7));
      const padding = 20;

      const maxX = Math.max(padding, arenaWidth - size - padding);
      const maxY = Math.max(padding, arenaHeight - size - padding);

      // Generate random position, avoiding immediate re-spawn in exact same spot
      let x = padding + Math.random() * (maxX - padding);
      let y = padding + Math.random() * (maxY - padding);

      if (prevPositionRef.current) {
        for (let i = 0; i < 8; i++) {
          const dist = Math.hypot(
            x - prevPositionRef.current.x,
            y - prevPositionRef.current.y
          );
          if (dist > 80) break;
          x = padding + Math.random() * (maxX - padding);
          y = padding + Math.random() * (maxY - padding);
        }
      }

      prevPositionRef.current = { x, y };

      const type = SHAPES[Math.floor(Math.random() * SHAPES.length)];
      const color =
        NEON_COLORS[Math.floor(Math.random() * NEON_COLORS.length)];
      const windowMs = calculateWindowMs(currentScore);
      const spawnId = ++spawnIdRef.current;

      const newShape: ShapeInstance = {
        id: spawnId,
        type,
        color,
        x: Math.round(x),
        y: Math.round(y),
        size,
        spawnTime: performance.now(),
        windowMs,
      };

      setActiveShape(newShape);

      // Set timeout for this shape's showing window
      timerRef.current = setTimeout(() => {
        handleGameOver();
      }, windowMs);
    },
    [handleGameOver]
  );

  const startGame = () => {
    clearActiveTimer();
    setScore(0);
    setFastestReaction(null);
    setTotalReaction(0);
    setHitEffects([]);
    setParticles([]);
    setGameState("playing");
    playSound("start", soundEnabled);

    // Initial shape spawn
    setTimeout(() => {
      spawnShape(0);
    }, 120);
  };

  const handleShapeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeShape || gameState !== "playing") return;

    clearActiveTimer();
    const reactionTime = Math.round(
      performance.now() - activeShape.spawnTime
    );

    playSound("hit", soundEnabled);

    // Update stats
    const newScore = score + 1;
    setScore(newScore);
    setFastestReaction((prev) =>
      prev === null ? reactionTime : Math.min(prev, reactionTime)
    );
    setTotalReaction((prev) => prev + reactionTime);

    // Spawn floating feedback popup
    const effectId = Date.now() + Math.random();
    setHitEffects((prev) => [
      ...prev.slice(-3),
      {
        id: effectId,
        text: `${reactionTime}ms`,
        x: activeShape.x + activeShape.size / 2,
        y: activeShape.y,
        color: activeShape.color,
      },
    ]);

    setTimeout(() => {
      setHitEffects((prev) => prev.filter((item) => item.id !== effectId));
    }, 600);

    // Spawn particle burst
    const newParticles: Particle[] = Array.from({ length: 6 }).map(
      (_, i) => ({
        id: effectId + i,
        x: activeShape.x + activeShape.size / 2,
        y: activeShape.y + activeShape.size / 2,
        angle: (i * (Math.PI * 2)) / 6,
        color: activeShape.color,
      })
    );
    setParticles((prev) => [...prev.slice(-12), ...newParticles]);
    setTimeout(() => {
      setParticles((prev) =>
        prev.filter((p) => !newParticles.some((np) => np.id === p.id))
      );
    }, 400);

    // Spawn next shape after small delay (80ms) for smooth rhythm
    setTimeout(() => {
      spawnShape(newScore);
    }, 80);
  };

  useEffect(() => {
    return () => {
      clearActiveTimer();
    };
  }, []);

  return (
    <Box
      width="100%"
      maxW="640px"
      mx="auto"
      position="relative"
      borderRadius="xl"
      border="1px solid"
      borderColor="gray.800"
      bg="rgba(13, 17, 26, 0.9)"
      backdropFilter="blur(16px)"
      boxShadow="0 12px 36px -8px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.06)"
      overflow="hidden"
    >
      {/* Subtle Glowing Corner Accents */}
      <Box
        position="absolute"
        top="-1px"
        left="-1px"
        width="16px"
        height="16px"
        borderTop="2px solid"
        borderLeft="2px solid"
        borderColor="green.500"
        borderTopLeftRadius="xl"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        top="-1px"
        right="-1px"
        width="16px"
        height="16px"
        borderTop="2px solid"
        borderRight="2px solid"
        borderColor="green.500"
        borderTopRightRadius="xl"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-1px"
        left="-1px"
        width="16px"
        height="16px"
        borderBottom="2px solid"
        borderLeft="2px solid"
        borderColor="green.500"
        borderBottomLeftRadius="xl"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        bottom="-1px"
        right="-1px"
        width="16px"
        height="16px"
        borderBottom="2px solid"
        borderRight="2px solid"
        borderColor="green.500"
        borderBottomRightRadius="xl"
        pointerEvents="none"
      />

      {/* Top HUD Component */}
      <GameHud
        gameState={gameState}
        score={score}
        fastestReaction={fastestReaction}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled(!soundEnabled)}
        activeShape={activeShape}
      />

      {/* Main Interactive Arena Component */}
      <GameArena
        arenaRef={arenaRef}
        gameState={gameState}
        activeShape={activeShape}
        hitEffects={hitEffects}
        particles={particles}
        onShapeClick={handleShapeClick}
        onStart={startGame}
        onPlayAgain={startGame}
        onViewRules={() => setGameState("idle")}
        score={score}
        fastestReaction={fastestReaction}
        totalReaction={totalReaction}
        bestScore={bestScore}
        bestReactionTime={bestReactionTime}
      />
    </Box>
  );
};
