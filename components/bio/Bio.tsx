import { Box, Text, Code, VStack, HStack, Spacer } from "@chakra-ui/react"
import { SuperImage } from "components/utils"
import { Link } from "@chakra-ui/react"

export const Bio = () => {
    return (
        <Box display='flex' alignContent='center' alignItems='center'>
            <SuperImage
                src='/assets/profileRemovedBG.png'
                alt="portfolioImg"
                width={400}
                height={400}
                quality={100}
            />
            <VStack spacing={3} color='white' align='start' marginLeft={4}>
                <Text fontSize={32} display='flex'>
                    Hey, I'm
                    <Text color='green.500' marginLeft={2}>
                        Łukasz Jęksa
                    </Text>
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
                    <Text>
                        welcome
                    </Text>
                    <Text color='blue.200'>
                        '
                    </Text>
                    <Text color={"pink.800"} fontWeight={700}>
                        )
                    </Text>
                </Code>
                <Spacer/>
                <HStack width='100%'>
                    <Box as='button' bg='green.500' p={2} borderRadius={8}>
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
        </Box >
    )
}