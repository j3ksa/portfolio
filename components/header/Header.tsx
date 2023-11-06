import { Flex, Spacer, HStack, Highlight } from "@chakra-ui/react"
import { Link } from "@chakra-ui/next-js"
import { categories } from "info"
import { smoothScroll } from "utils"

export const Header = () => {
    return (
        <Flex as='nav' bg='black' width='100%' p={6}>
            <Link href='/' fontSize={24}  fontWeight='600'>
                <Highlight
                    query={['j3ksa.icu']}
                    styles={{ bg: 'green.500', rounded: 'lg', p: 1, marginLeft: 2, _hover: {color: 'white', bg: 'transparent'} }}
                >
                    j3ksa.icu
                </Highlight>
            </Link>
            <Spacer />
            <HStack spacing={10}>
                {categories.map(category => (
                    <Link key={category.id} href='' id={category.id} onClick={smoothScroll} color='white' _hover={{ color: 'green.500' }}>
                        {category.name}
                    </Link>
                ))}
            </HStack>
        </Flex>
    )
}