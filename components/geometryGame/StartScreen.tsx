import React from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Button,
  Badge,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { FiPlay, FiTarget, FiZap, FiAward } from "react-icons/fi";

interface StartScreenProps {
  onStart: () => void;
  bestScore: number;
  bestReactionTime: number | null;
}

export const StartScreen: React.FC<StartScreenProps> = ({
  onStart,
  bestScore,
  bestReactionTime,
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
        colorScheme="green"
        variant="subtle"
        rounded="full"
        px={3}
        py={0.5}
        mb={2}
        fontSize="xs"
        letterSpacing="wider"
      >
        MINI-GAME
      </Badge>
      <Text
        fontSize={{ base: "xl", md: "2xl" }}
        fontWeight="bold"
        color="white"
        mb={1}
      >
        Geometry Reflex
      </Text>
      <Text fontSize="sm" color="gray.400" maxW="420px" mb={4}>
        Click each geometric structure as fast as possible. Each next
        construct shortens your window!
      </Text>

      {/* Simple Rules Card */}
      <Box
        bg="rgba(255, 255, 255, 0.03)"
        border="1px solid"
        borderColor="gray.800"
        rounded="lg"
        p={3}
        maxW="420px"
        width="100%"
        mb={5}
      >
        <VStack align="start" spacing={1.5} fontSize="xs" color="gray.300">
          <HStack>
            <Icon as={FiTarget} color="green.400" />
            <Text>
              <strong>Target:</strong> 2D geometric constructs pop up
              randomly.
            </Text>
          </HStack>
          <HStack>
            <Icon as={FiZap} color="yellow.400" />
            <Text>
              <strong>Window:</strong> The timer shrinks with every
              successful hit.
            </Text>
          </HStack>
          <HStack>
            <Icon as={FiAward} color="pink.400" />
            <Text>
              <strong>Reflex:</strong> Miss once and game is over — beat
              your fastest reaction!
            </Text>
          </HStack>
        </VStack>
      </Box>

      <HStack spacing={4}>
        <Button
          leftIcon={<FiPlay />}
          bg="green.500"
          color="black"
          fontWeight="bold"
          px={6}
          py={2}
          rounded="lg"
          _hover={{
            bg: "white",
            transform: "translateY(-1px)",
            boxShadow: "0 0 16px rgba(16, 185, 129, 0.5)",
          }}
          transition="all 0.2s"
          onClick={onStart}
        >
          Start Game
        </Button>
      </HStack>

      {bestScore > 0 && (
        <Text fontSize="xs" color="gray.500" mt={3}>
          Best Record: <strong>{bestScore}</strong> constructs
          {bestReactionTime !== null && (
            <>
              {" "}
              • Fastest: <strong>{bestReactionTime}ms</strong>
            </>
          )}
        </Text>
      )}
    </Flex>
  );
};
