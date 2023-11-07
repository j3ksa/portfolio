import { useState } from "react"
import { Box, Flex, Text, HStack, Highlight } from "@chakra-ui/react"
import { jobs } from "info/jobs"
import { JobDescription } from "./JobDescription";

export const Timeline = () => {
    const [timelineId, setTimelineId] = useState('freelance')
    const workingMonths = 36
    const currentJob = jobs.find(job => job.id === timelineId)

    return (
        <Flex direction='column' alignItems='center' justifyContent='center' marginTop={20} marginBottom={20} width='100%'>
            <Text display='flex' fontSize={32} alignItems='center'>
                <Highlight
                    query={['My timeline']}
                    styles={{ bg: 'green.500', rounded: 'lg', p: 1, marginLeft: 2 }}
                >
                    My timeline
                </Highlight>
            </Text>
            <HStack
                spacing={8}
                marginTop={10}
                borderTop={1}
                borderBottom={1}
                borderColor='gray.500'
                borderStyle='solid'
                paddingLeft={4}
                paddingRight={4}
                width='67%'
                position='relative'
            >
                {jobs.map(job => (
                    <Box
                        key={job.id}
                        as="button"
                        width={`${job.monthsInWork * 100 / workingMonths}%`}
                        border={2}
                        borderColor={job.color}
                        borderStyle='solid'
                        bg={timelineId === job.id && job.color}
                        borderRadius={8} p={2}
                        fontWeight={700}
                        color={timelineId === job.id ? 'black' : 'white'}
                        cursor='pointer'
                        userSelect='none'
                        textAlign='center'
                        _hover={timelineId !== job.id && { bg: job.color, color: 'black' }}
                        onClick={() => setTimelineId(job.id)}
                    >
                        {job.name}
                    </Box>
                ))}
                <Text position='absolute' bottom={-10} left={-10} color='gray.500'>
                    Oct 2020
                </Text>
                <Text position='absolute' bottom={-10} left={24} color='gray.500'>
                    Feb 2020
                </Text>
                <Text position='absolute' bottom={-10} left='33.5%' color='gray.500'>
                    Oct 2021
                </Text>
                <Text position='absolute' bottom={-10} right={-10} color='gray.500'>
                    Oct 2023
                </Text>
            </HStack>
            <JobDescription currentJob={currentJob} />
        </Flex>
    )
}