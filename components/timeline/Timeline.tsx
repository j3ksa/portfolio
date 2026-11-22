import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  HStack,
  Highlight,
  useBreakpointValue,
} from "@chakra-ui/react";
import { jobs } from "info";
import { JobDescription } from "./JobDescription";

interface Props {
  timelineRef?: React.MutableRefObject<HTMLDivElement>;
}

export const Timeline = ({ timelineRef }: Props) => {
  const [timelineId, setTimelineId] = useState("rockwool");

  const currentJob = jobs.find((job) => job.id === timelineId) || jobs[0];

  const marginValue = useBreakpointValue({
    base: 6,
    md: 16,
  });

  return (
    <Flex
      as="section"
      ref={timelineRef}
      id="exp"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      marginTop={marginValue}
      marginBottom={marginValue}
      width="100%"
    >
      <Text display="flex" fontSize={32} alignItems="center" mb={2}>
        <Highlight
          query={["My timeline"]}
          styles={{ bg: "green.500", rounded: "lg", px: 2, color: "black", fontWeight: "bold" }}
        >
          My timeline
        </Highlight>
      </Text>
      <Text color="gray.400" fontSize="sm" mb={6}>
        Doświadczenie inżynieryjne w komercyjnych projektach enterprise, big data, AI oraz full-stack .NET
      </Text>

      <HStack
        spacing={{ base: 4, md: 3 }}
        borderWidth={{ base: "0 1px 0 1px", md: "1px 0 1px 0" }}
        borderColor="gray.700"
        borderStyle="solid"
        padding={{ base: "4 0 4 0", md: "6 3 6 3" }}
        width={{ base: "90%", md: "95%", xl: "85%" }}
        flexDir={{ base: "column", md: "row" }}
        flexWrap={{ md: "wrap", xl: "nowrap" }}
        justifyContent="center"
      >
        {jobs.map((job) => (
          <Box
            key={job.id}
            as="button"
            flex={{ base: "1 1 100%", md: "1 1 140px", xl: "1" }}
            minW={{ base: "100%", md: "130px" }}
            border="2px solid"
            borderColor={job.color}
            bg={timelineId === job.id ? job.color : "transparent"}
            borderRadius={8}
            p={2.5}
            fontWeight={700}
            fontSize={{ base: "sm", md: "md" }}
            color={timelineId === job.id ? "black" : "white"}
            cursor="pointer"
            userSelect="none"
            textAlign="center"
            whiteSpace="nowrap"
            position="relative"
            transitionDuration="250ms"
            _hover={timelineId !== job.id ? { bg: job.color, color: "black" } : undefined}
            onClick={() => setTimelineId(job.id)}
          >
            {job.name}
            <Text
              position="absolute"
              bottom={{ base: -6, md: -8 }}
              left="50%"
              color="gray.400"
              transform="translate(-50%, 0)"
              fontWeight="400"
              fontSize="xs"
              whiteSpace="nowrap"
            >
              {job.time}
            </Text>
          </Box>
        ))}
      </HStack>
      <JobDescription currentJob={currentJob} />
    </Flex>
  );
};
