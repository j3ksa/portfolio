import React from "react";
import {
  Box,
  Text,
  HStack,
  Button,
  Badge,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import { FiRotateCcw, FiInfo } from "react-icons/fi";
import { getRankBadge } from "./constants";

interface GameOverScreenProps {
  score: number;
  fastestReaction: number | null;
  totalReaction: number;
  onPlayAgain: () => void;
  onViewRules: () => void;
}

export const GameOverScreen: React.FC<GameOverScreenProps> = ({
  score,
  fastestReaction,
  totalReaction,
  onPlayAgain,
  onViewRules,
}) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      height="100%"
      px={6}
      textAlign="center"
    >
      <Badge
        colorScheme="red"
        variant="solid"
        rounded="full"
        px={3}
        py={0.5}
        mb={2}
        fontSize="xs"
        letterSpacing="wider"
      >
        GAME OVER
      </Badge>

      <Text
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="bold"
        color="white"
        mb={1}
      >
        Time's Up!
      </Text>

      <Text fontSize="xs" color="gray.400" mb={4}>
        The showing window expired before you caught the construct.
      </Text>

      {/* Results Grid */}
      <SimpleGrid
        columns={{ base: 2, md: 3 }}
        spacing={3}
        width="100%"
        maxW="440px"
        mb={5}
      >
        <Box
          bg="rgba(255, 255, 255, 0.04)"
          border="1px solid"
          borderColor="gray.800"
          p={2.5}
          rounded="lg"
        >
          <Text fontSize="xs" color="gray.400">
            Constructs
          </Text>
          <Text
            fontSize="22px"
            fontWeight="bold"
            color="green.400"
          >
            {score}
          </Text>
        </Box>

        <Box
          bg="rgba(255, 255, 255, 0.04)"
          border="1px solid"
          borderColor="gray.800"
          p={2.5}
          rounded="lg"
        >
          <Text fontSize="xs" color="gray.400">
            Fastest Reaction
          </Text>
          <Text
            fontSize="22px"
            fontWeight="bold"
            color="yellow.400"
          >
            {fastestReaction !== null ? `${fastestReaction}ms` : "--"}
          </Text>
        </Box>

        <Box
          bg="rgba(255, 255, 255, 0.04)"
          border="1px solid"
          borderColor="gray.800"
          p={2.5}
          rounded="lg"
          gridColumn={{ base: "span 2", md: "span 1" }}
        >
          <Text fontSize="xs" color="gray.400">
            Average Reaction
          </Text>
          <Text fontSize="22px" fontWeight="bold" color="cyan.400">
            {score > 0
              ? `${Math.round(totalReaction / score)}ms`
              : "--"}
          </Text>
        </Box>
      </SimpleGrid>

      {/* Rank Badge */}
      {score > 0 && (
        <Badge
          colorScheme={getRankBadge(score).color}
          variant="subtle"
          fontSize="xs"
          px={3}
          py={1}
          rounded="full"
          mb={4}
        >
          {getRankBadge(score).label}
        </Badge>
      )}

      <HStack spacing={3}>
        <Button
          leftIcon={<FiRotateCcw />}
          bg="green.500"
          color="black"
          fontWeight="bold"
          px={5}
          py={2}
          rounded="lg"
          _hover={{
            bg: "white",
            transform: "translateY(-1px)",
            boxShadow: "0 0 16px rgba(16, 185, 129, 0.5)",
          }}
          transition="all 0.2s"
          onClick={onPlayAgain}
        >
          Play Again
        </Button>
        <Button
          leftIcon={<FiInfo />}
          variant="outline"
          borderColor="gray.700"
          color="gray.300"
          _hover={{ bg: "whiteAlpha.100", color: "white" }}
          px={4}
          py={2}
          rounded="lg"
          onClick={onViewRules}
        >
          Rules
        </Button>
      </HStack>
    </Flex>
  );
};
