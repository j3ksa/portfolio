import { Highlight, VStack, Text, Grid, GridItem } from "@chakra-ui/react";
import { skills } from "info/skills";

interface Props {
  techStackRef: React.MutableRefObject<HTMLDivElement>;
}

export const TechStack = ({ techStackRef }: Props) => {
  return (
    <VStack ref={techStackRef} id="tech" marginBottom={10} width="100%">
      <Text display="flex" fontSize={32} alignItems="center" marginBottom={10}>
        <Highlight
          query={["My tech stack"]}
          styles={{ bg: "green.500", rounded: "lg", px: 3 }}
        >
          My tech stack
        </Highlight>
      </Text>
      <Grid
        templateColumns={{ base: "repeat(3, 1fr)", md: "repeat(5, 1fr)" }}
        gap={{ base: 4, md: 10 }}
      >
        {skills.map((skill) => (
          <GridItem
            key={skill.id}
            color={skill.color}
            fontSize={40}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            _hover={{ transform: "scale(1.1)" }}
          >
            <skill.icon />
            <Text color="white" fontSize={20} textAlign="center">
              {skill.name}
            </Text>
          </GridItem>
        ))}
      </Grid>
    </VStack>
  );
};
