import { Box, Text, Code, VStack, HStack, Spacer, Highlight } from "@chakra-ui/react"
import { Link } from "@chakra-ui/react"
import { TypeAnimation } from "react-type-animation"
import { welcomePhrases } from "info"

export const Bio = () => {
    const n = 1
    const phrasesWithDelay = welcomePhrases.reduce((list, el, i) => {
        list.push(el);
        if ((i + 1) % n === 0) list.push(1000)
        return list
    }, [])

    return (
        <Box display='flex' justifyContent='space-around' alignItems='center' width='100%'>
            <VStack spacing={3} color='white' align='start'>
                <Text display='flex' fontSize={32} alignItems='center'>
                    <Highlight
                        query={['Łukasz Jęksa']}
                        styles={{ bg: 'green.500', rounded: 'lg', px: 3, marginLeft: 2 }}
                    >
                        Hey, I'm Łukasz Jęksa
                    </Highlight>
                </Text>
                <Text fontSize={26}>
                    a frontend developer
                </Text>
                <Text fontSize={20}>
                    and this is page about me.
                </Text>
                <Code
                    variant='outline'
                    display='flex'
                    textAlign='center'
                    color='white'
                    p={2}
                >
                    console
                    <Text color={'blue.600'}>.log</Text>
                    <Text color={'pink.800'} fontWeight={700}>
                        (
                    </Text>
                    <Text color='blue.200'>
                        '
                    </Text>
                    <TypeAnimation
                        sequence={phrasesWithDelay}
                        speed={99}
                        deletionSpeed={99}
                        repeat={Infinity}
                    />
                    <Text color='blue.200'>
                        '
                    </Text>
                    <Text color={"pink.800"} fontWeight={700}>
                        )
                    </Text>
                </Code>
                <Spacer />
                <HStack width='100%'>
                    <Box as='button' bg='green.500' p={2} borderRadius={8} _hover={{ backgroundColor: 'white', color: 'green.500' }}>
                        Contact me
                    </Box>
                    <Spacer />
                    <Link
                        href='/cv/ENG.pdf'
                        download='Łukasz Jęksa - CV'
                        color='pink.700'
                    >
                        Download CV
                    </Link>
                </HStack>
            </VStack>
            <Box width={300} height={300} border={1} borderStyle='solid' borderColor='gray.500' color='white' display='flex' alignItems='center' justifyContent='center'>
                Coming soon
            </Box>
        </Box >
    )
}