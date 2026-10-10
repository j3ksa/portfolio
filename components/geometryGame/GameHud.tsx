import React from "react";
import {
  Box,
  Text,
  HStack,
  Badge,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiZap, FiVolume2, FiVolumeX } from "react-icons/fi";
import { GameState, ShapeInstance } from "./types";

interface GameHudProps {
  gameState: GameState;
  score: number;
  fastestReaction: number | null;
  soundEnabled: boolean;
  onToggleSound: () => void;
  activeShape: ShapeInstance | null;
}

export const GameHud: React.FC<GameHudProps> = ({
  gameState,
  score,
  fastestReaction,
  soundEnabled,
  onToggleSound,
  activeShape,
}) => {
  return (
    <>
      <HStack
        justify="space-between"
        px={4}
        py={2.5}
        borderBottom="1px solid"
        borderColor="gray.800"
        bg="rgba(0, 0, 0, 0.4)"
      >
        <HStack spacing={2}>
          <Box
            w={2.5}
            h={2.5}
            rounded="full"
            bg={gameState === "playing" ? "green.400" : "gray.600"}
            boxShadow={
              gameState === "playing"
                ? "0 0 8px var(--chakra-colors-green-400)"
                : "none"
            }
          />
          <Text
            fontSize="xs"
            fontWeight="bold"
            letterSpacing="wider"
            textTransform="uppercase"
            color="gray.400"
          >
            2D Geometry Reflex
          </Text>
        </HStack>

        <HStack spacing={3}>
          {gameState === "playing" && (
            <>
              <HStack spacing={1}>
                <Text fontSize="xs" color="gray.400">
                  Smashed:
                </Text>
                <Badge
                  colorScheme="green"
                  variant="solid"
                  borderRadius="md"
                  px={1.5}
                  fontSize="xs"
                >
                  {score}
                </Badge>
              </HStack>
              <HStack spacing={1}>
                <Icon as={FiZap} color="yellow.400" w={3} h={3} />
                <Text fontSize="xs" color="yellow.300" fontWeight="semibold">
                  {fastestReaction !== null ? `${fastestReaction}ms` : "--"}
                </Text>
              </HStack>
            </>
          )}

          <IconButton
            aria-label="Toggle Sound"
            size="xs"
            variant="ghost"
            color="gray.400"
            _hover={{ color: "white", bg: "whiteAlpha.200" }}
            icon={soundEnabled ? <FiVolume2 /> : <FiVolumeX />}
            onClick={onToggleSound}
          />
        </HStack>
      </HStack>

      {/* Shrinking Time Window Bar (Visible during active gameplay) */}
      <Box height="3px" width="100%" bg="transparent" position="relative">
        {gameState === "playing" && activeShape && (
          <motion.div
            key={activeShape.id}
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{
              duration: activeShape.windowMs / 1000,
              ease: "linear",
            }}
            style={{
              height: "100%",
              backgroundColor: activeShape.color,
              boxShadow: `0 0 10px ${activeShape.color}`,
            }}
          />
        )}
      </Box>
    </>
  );
};
