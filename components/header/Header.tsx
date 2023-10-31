import { Flex, Spacer, HStack } from "@chakra-ui/react"
import { Link } from "@chakra-ui/next-js"
import { categories } from "info"

export const Header = () => {
    const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const element = document.getElementById((e.target as HTMLInputElement).id)
        element.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        })
    }
    return (
        <Flex bg='black' width='100%' p={6}>
            <Link href='/' fontSize={24} color='green.500' _hover={{ color: 'white' }} fontWeight='600'>
                j3ksa.icu
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