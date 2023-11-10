import { Box, HStack, Highlight, Center } from "@chakra-ui/react";
import { basics } from "info/basics";

export const Summary = () => {
  return (
    <Center
      as="section"
      bg={"gray.800"}
      width="100%"
      py={6}
      borderRadius={8}
      marginTop="-2"
    >
      <HStack
        spacing={{ base: 4, md: 32 }}
        flexDir={{ base: "column", md: "row" }}
      >
        {basics.map((info) => (
          <Box
            key={info.id}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            color="white"
            maxW={140}
            textAlign="center"
          >
            <Highlight
              query={[info.value]}
              styles={{
                bg: "green.500",
                rounded: "lg",
                paddingX: "5px",
                fontSize: "32px",
                marginBottom: "4px",
              }}
            >
              {info.value}
            </Highlight>
            {info.description}
          </Box>
        ))}
      </HStack>
    </Center>
  );
};
