import { Highlight, VStack, Text, Grid, GridItem } from "@chakra-ui/react"
import { skills } from "info/skills"

export const TechStack = () => {
    return (
        <VStack marginBottom={10} width='100%'>
            <Text display='flex' fontSize={32} alignItems='center' marginBottom={10}>
                <Highlight
                    query={['My tech stack']}
                    styles={{ bg: 'green.500', rounded: 'lg', p: 1, marginLeft: 2 }}
                >
                    My tech stack
                </Highlight>
            </Text>
            <Grid templateColumns='repeat(5, 1fr)' gap={10}>
                {skills.map(skill => (
                    <GridItem color={skill.color} fontSize={40} display='flex' flexDirection='column' alignItems='center' justifyContent='center' _hover={{ transform: 'scale(1.1)'}}>
                        <skill.icon />
                        <Text color='white' fontSize={20}>
                            {skill.name}
                        </Text>
                    </GridItem>
                ))}
            </Grid>
        </VStack>
    )
}