import React from "react";
import {
  Box,
  Flex,
  Text,
  Highlight,
  SimpleGrid,
  Image,
  Badge,
  HStack,
  VStack,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { games } from "info/games";
import { SiItchdotio } from "react-icons/si";
import { FaArrowRight, FaGamepad } from "react-icons/fa";

interface Props {
  projectsRef?: React.MutableRefObject<HTMLDivElement>;
}

export const ProjectsSection = ({ projectsRef }: Props) => {
  const marginValue = useBreakpointValue({
    base: 8,
    md: 16,
  });

  return (
    <Flex
      as="section"
      ref={projectsRef}
      id="projects"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      marginTop={marginValue}
      marginBottom={marginValue}
      width="100%"
    >
      <VStack spacing={3} textAlign="center" marginBottom={10}>
        <Text fontSize={{ base: 28, md: 36 }} fontWeight="bold" color="white">
          <Highlight
            query={["Private / Passion Projects"]}
            styles={{ bg: "green.500", color: "black", rounded: "lg", px: 3, py: 1 }}
          >
            Private / Passion Projects
          </Highlight>
        </Text>
        <Text color="gray.300" fontSize={{ base: 14, md: 16 }} maxW="720px">
          Grywalne projekty gier stworzone w Unity i C# z pełną dokumentacją,
          opisem wkładu oraz linkami do pobrania / zagrania na platformie itch.io.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} width="100%">
        {games.map((game) => (
          <Box
            key={game.id}
            bg="gray.900"
            borderWidth="1px"
            borderColor="gray.800"
            borderRadius="xl"
            overflow="hidden"
            display="flex"
            flexDirection="column"
            transition="all 0.3s ease"
            _hover={{
              transform: "translateY(-6px)",
              borderColor: "green.400",
              boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.2)",
            }}
          >
            {/* Thumbnail */}
            <Box position="relative" height="220px" width="100%" overflow="hidden">
              <Image
                src={game.coverImage}
                alt={game.title}
                objectFit="cover"
                width="100%"
                height="100%"
                transition="transform 0.4s ease"
                _hover={{ transform: "scale(1.05)" }}
              />
              <Badge
                position="absolute"
                top={3}
                left={3}
                bg="blackAlpha.800"
                color="green.300"
                px={2.5}
                py={1}
                borderRadius="md"
                fontSize="xs"
                textTransform="uppercase"
                letterSpacing="wider"
              >
                {game.genre}
              </Badge>
              <Badge
                position="absolute"
                top={3}
                right={3}
                bg="blackAlpha.800"
                color="gray.200"
                px={2}
                py={1}
                borderRadius="md"
                fontSize="xs"
              >
                {game.year}
              </Badge>
            </Box>

            {/* Content */}
            <VStack p={6} align="flex-start" spacing={4} flex="1" justify="space-between">
              <VStack align="flex-start" spacing={2} width="100%">
                <Text fontSize="2xl" fontWeight="bold" color="white">
                  {game.title}
                </Text>
                <Text fontSize="sm" color="green.400" fontWeight="medium">
                  Rola: {game.role}
                </Text>
                <Text fontSize="sm" color="gray.300" noOfLines={3} lineHeight="tall">
                  {game.description}
                </Text>
              </VStack>

              {/* Tools Badges */}
              <HStack spacing={2} wrap="wrap">
                {game.tools.slice(0, 4).map((tool) => (
                  <Badge
                    key={tool}
                    bg="whiteAlpha.100"
                    color="gray.300"
                    borderRadius="full"
                    px={2.5}
                    py={0.5}
                    fontSize="xs"
                  >
                    {tool}
                  </Badge>
                ))}
              </HStack>

              {/* Action Buttons */}
              <VStack spacing={2.5} width="100%" pt={2}>
                <Link
                  href={`/projects/${game.slug}`}
                  width="100%"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    width="100%"
                    bg="green.500"
                    color="black"
                    rightIcon={<FaArrowRight />}
                    _hover={{ bg: "green.400" }}
                    size="md"
                    fontWeight="bold"
                  >
                    Osobna podstrona projektu
                  </Button>
                </Link>

                <Link
                  href={game.itchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  width="100%"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    width="100%"
                    variant="outline"
                    borderColor="#FA5C5C"
                    color="#FA5C5C"
                    leftIcon={<SiItchdotio />}
                    _hover={{ bg: "#FA5C5C", color: "white" }}
                    size="md"
                    fontWeight="semibold"
                  >
                    Zagraj na itch.io
                  </Button>
                </Link>
              </VStack>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>

      {/* Embedded interactive game callout */}
      <Box
        mt={10}
        p={5}
        bg="gray.900"
        borderWidth="1px"
        borderColor="gray.800"
        borderRadius="xl"
        width="100%"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        gap={4}
      >
        <HStack spacing={4}>
          <Box p={3} bg="green.500" color="black" borderRadius="lg">
            <FaGamepad size={24} />
          </Box>
          <VStack align="flex-start" spacing={0}>
            <Text color="white" fontWeight="bold" fontSize="lg">
              Bonusowy projekt interaktywny: Geometry Reflex
            </Text>
            <Text color="gray.400" fontSize="sm">
              Szybka zręcznościowa minigra reakcyjna zaimplementowana bezpośrednio w React/SVG (dostępna wyżej w sekcji Bio).
            </Text>
          </VStack>
        </HStack>
        <Link href="#about">
          <Button variant="ghost" color="green.400" _hover={{ bg: "whiteAlpha.100" }}>
            Zagraj powyżej ↑
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};
