import { Box, Highlight, Center, SimpleGrid, Text } from "@chakra-ui/react";
import { basics as defaultBasics } from "info/basics";
import { Basics } from "types";

interface Props {
  basics?: Basics[];
}

export const Summary = ({ basics = defaultBasics }: Props) => {
  return (
    <Center
      as="section"
      bg="gray.800"
      width="100%"
      py={6}
      px={{ base: 4, md: 8 }}
      borderRadius={8}
      marginTop="-2"
    >
      <SimpleGrid
        columns={{ base: 2, md: 3, lg: 6 }}
        spacing={{ base: 6, md: 6, lg: 4 }}
        width="100%"
        justifyItems="center"
      >
        {basics.map((info) => (
          <Box
            key={info.id}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="flex-start"
            color="white"
            maxW={{ base: "140px", lg: "160px" }}
            textAlign="center"
          >
            <Highlight
              query={[info.value]}
              styles={{
                bg: "green.500",
                rounded: "lg",
                px: "8px",
                py: "2px",
                fontSize: { base: "24px", md: "28px", lg: "32px" },
                fontWeight: "bold",
                marginBottom: "6px",
                display: "inline-block",
                color: "black",
              }}
            >
              {info.value}
            </Highlight>
            <Text
              fontSize={{ base: "12px", md: "13px", lg: "14px" }}
              color="gray.300"
              lineHeight="1.3"
            >
              {info.description}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Center>
  );
};
