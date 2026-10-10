import React from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  Tag,
  TagLeftIcon,
  TagLabel,
  Highlight,
} from "@chakra-ui/react";
import { bioData } from "info";
import { SiUnity } from "react-icons/si";
import { FaGamepad } from "react-icons/fa";
import { GiChessKnight, GiCompactDisc } from "react-icons/gi";
import { FiVolume2, FiCode } from "react-icons/fi";
import { IconType } from "react-icons";

const tagIconMap: Record<string, IconType> = {
  unity: SiUnity,
  fmod: FiVolume2,
  indie: FaGamepad,
  strategy: GiChessKnight,
  cdaction: GiCompactDisc,
  code: FiCode,
};

export const BioDescription: React.FC = () => {
  return (
    <Box
      as="article"
      width="100%"
      maxW="800px"
      bg="gray.900"
      borderWidth="1px"
      borderColor="gray.800"
      borderRadius="2xl"
      p={{ base: 6, md: 8 }}
      position="relative"
      overflow="hidden"
      boxShadow="0 10px 30px -10px rgba(0, 0, 0, 0.5)"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        bgGradient: "linear(to-r, green.400, pink.500, blue.400)",
      }}
    >
      <VStack spacing={6} align="stretch">
        {/* Header row */}
        <HStack spacing={3} align="center">
          <Box
            p={2}
            bg="green.500"
            color="black"
            borderRadius="lg"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <FaGamepad size={20} />
          </Box>
          <VStack align="flex-start" spacing={0}>
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
              color="white"
            >
              <Highlight
                query={["About Me"]}
                styles={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                About Me
              </Highlight>
            </Text>
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              color="gray.400"
              letterSpacing="wide"
            >
              {bioData.subtitle}
            </Text>
          </VStack>
        </HStack>

        {/* Description body */}
        <VStack spacing={4} align="stretch">
          <Text
            fontSize={{ base: "15px", md: "16px" }}
            lineHeight={{ base: "1.75", md: "1.8" }}
            color="gray.200"
          >
            <Highlight
              query={[
                "5+ years of full-stack development experience",
                "C# programming",
                "Unity engine",
                "FMOD",
                "gameplay mechanics and game design",
              ]}
              styles={{
                color: "green.400",
                fontWeight: "semibold",
                bg: "transparent",
              }}
            >
              {bioData.intro}
            </Highlight>
          </Text>

          <Text
            fontSize={{ base: "15px", md: "16px" }}
            lineHeight={{ base: "1.75", md: "1.8" }}
            color="gray.300"
          >
            <Highlight
              query={[
                "CD-Action",
                "indie games",
                "turn-based strategy games",
              ]}
              styles={{
                color: "pink.400",
                fontWeight: "semibold",
                bg: "transparent",
              }}
            >
              {bioData.interests}
            </Highlight>
          </Text>
        </VStack>

        {/* Focus / Interest Tags */}
        <Box pt={2}>
          <Wrap spacing={{ base: 2, md: 3 }}>
            {bioData.tags.map((tag) => {
              const IconComponent = tagIconMap[tag.iconName] || FaGamepad;
              return (
                <WrapItem key={tag.label}>
                  <Tag
                    size="lg"
                    bg="rgba(255, 255, 255, 0.04)"
                    color="gray.300"
                    px={3.5}
                    py={2}
                    borderRadius="full"
                    borderWidth="1px"
                    borderColor="gray.700"
                    transition="all 200ms ease"
                    _hover={{
                      borderColor: "green.400",
                      color: "white",
                      bg: "rgba(34, 197, 94, 0.12)",
                      transform: "translateY(-1px)",
                    }}
                  >
                    <TagLeftIcon
                      as={IconComponent}
                      color="green.400"
                      boxSize="15px"
                    />
                    <TagLabel fontSize={{ base: "xs", md: "sm" }}>
                      {tag.label}
                    </TagLabel>
                  </Tag>
                </WrapItem>
              );
            })}
          </Wrap>
        </Box>
      </VStack>
    </Box>
  );
};
