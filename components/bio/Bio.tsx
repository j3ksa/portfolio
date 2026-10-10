import {
  Box,
  Text,
  Code,
  VStack,
  HStack,
  Highlight,
  Link,
} from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import { welcomePhrases } from "info";
import { scroll } from "utils";
import { GeometryGame } from "components/geometryGame";
import { BioDescription } from "./BioDescription";

interface Props {
  contactRef?: React.MutableRefObject<HTMLDivElement>;
}

export const Bio = ({ contactRef }: Props) => {
  const n = 1;
  const phrasesWithDelay = welcomePhrases.reduce((list, el, i) => {
    list.push(el);
    if ((i + 1) % n === 0) list.push(1000);
    return list;
  }, []);

  return (
    <Box
      as="section"
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      py={{ base: 4, md: 6 }}
      gap={{ base: 8, md: 10 }}
    >
      <VStack
        spacing={4}
        color="white"
        align="center"
        textAlign="center"
        width="100%"
        maxW="640px"
      >
        <Text
          display="flex"
          fontSize={{ base: 28, md: 36 }}
          fontWeight="bold"
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
          gap={2}
        >
          Hey, I'm
          <Highlight
            query={["Łukasz Jęksa"]}
            styles={{
              bg: "green.500",
              color: "black",
              rounded: "lg",
              px: 3,
              py: 0.5,
            }}
          >
            Łukasz Jęksa
          </Highlight>
        </Text>
        <Text fontSize={{ base: 22, md: 26 }} color="gray.200">
          a developer
        </Text>
        <Text fontSize={{ base: 18, md: 20 }} color="gray.400">
          and this is page about me.
        </Text>
        <Code
          variant="outline"
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          color="white"
          p={2.5}
          rounded="md"
          borderColor="gray.700"
          fontSize={{ base: "xs", md: "sm" }}
          maxW="100%"
          overflowX="auto"
        >
          console
          <Text as="span" color={"blue.400"}>
            .log
          </Text>
          <Text as="span" color={"pink.500"} fontWeight={700}>
            (
          </Text>
          <Text as="span" color="blue.200">'</Text>
          <TypeAnimation
            sequence={phrasesWithDelay}
            speed={99}
            deletionSpeed={99}
            repeat={Infinity}
          />
          <Text as="span" color="blue.200">'</Text>
          <Text as="span" color={"pink.500"} fontWeight={700}>
            )
          </Text>
        </Code>
        <HStack spacing={6} pt={2} justify="center">
          <Box
            as="button"
            bg="green.500"
            color="black"
            fontWeight="bold"
            px={5}
            py={2.5}
            borderRadius={8}
            cursor="pointer"
            _hover={{
              backgroundColor: "white",
              transform: "translateY(-1px)",
            }}
            transition="all 200ms ease"
            onClick={() => contactRef && scroll("contact", [contactRef])}
          >
            Contact me
          </Box>
          <Link
            href="/cv/CVŁukaszJęksa.pdf"
            download="Łukasz Jęksa - CV"
            color="pink.400"
            fontWeight="semibold"
            _hover={{ color: "pink.300", textDecoration: "underline" }}
          >
            Download CV
          </Link>
        </HStack>
      </VStack>

      <BioDescription />

      <GeometryGame />
    </Box>
  );
};
