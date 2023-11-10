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
  timelineRef: React.MutableRefObject<HTMLDivElement>;
}

export const Timeline = ({ timelineRef }: Props) => {
  const [timelineId, setTimelineId] = useState("freelance");
  const workingMonths = 36;
  const currentJob = jobs.find((job) => job.id === timelineId);

  const marinValue = useBreakpointValue({
    base: 4,
    md: 20,
  });

  return (
    <Flex
      as="section"
      ref={timelineRef}
      id="exp"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      marginTop={marinValue}
      marginBottom={marinValue}
      width="100%"
    >
      <Text display="flex" fontSize={32} alignItems="center">
        <Highlight
          query={["My timeline"]}
          styles={{ bg: "green.500", rounded: "lg", px: 1 }}
        >
          My timeline
        </Highlight>
      </Text>
      <HStack
        spacing={{ base: 10, md: 8 }}
        marginTop={10}
        borderWidth={{ base: "0 1px 0 1px", md: "1px 0 1px 0" }}
        borderColor="gray.500"
        borderStyle="solid"
        padding={{ base: "4 0 4 0", md: "0 4 0 4" }}
        width={{ base: "90%", md: "100%" }}
        flexDir={{ base: "column", md: "row" }}
      >
        {jobs.map((job) => (
          <Box
            key={job.id}
            as="button"
            width={{
              base: "100%",
              md: `${(job.monthsInWork * 100) / workingMonths}%`,
            }}
            minW={{ base: "100%", md: "100px" }}
            border={2}
            borderColor={job.color}
            borderStyle="solid"
            bg={timelineId === job.id && job.color}
            borderRadius={8}
            p={2}
            fontWeight={700}
            color={timelineId === job.id ? "black" : "white"}
            cursor="pointer"
            userSelect="none"
            textAlign="center"
            whiteSpace="nowrap"
            position="relative"
            transitionDuration="300ms"
            _hover={timelineId !== job.id && { bg: job.color, color: "black" }}
            onClick={() => setTimelineId(job.id)}
          >
            {job.name}
            <Text
              position="absolute"
              bottom={{ base: -8, md: -10 }}
              left="50%"
              color="gray.500"
              transform="translate(-50%, 0)"
              fontWeight="400"
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
