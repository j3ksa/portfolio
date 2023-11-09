import { Link } from "@chakra-ui/next-js"
import { Button, useDisclosure, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, useBreakpointValue, Drawer, Highlight } from "@chakra-ui/react"
import { categories } from "info"
import { scroll } from "utils"

interface Props {
    refs: React.MutableRefObject<HTMLDivElement>[]
}

export const MobileMenu = ({ refs }: Props) => {
    const mobile = useBreakpointValue(
        {
            base: 'block',
            md: 'none'
        },
    )
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handleScroll = (id: string) => {
        onClose()
        scroll(id, refs)
    }

    return (
        <>
            <Button bg='green.500' onClick={onOpen} display={mobile}>
                Open
            </Button>
            <Drawer placement={'right'} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent bg='gray.800'>
                    <DrawerHeader borderBottomWidth='1px' borderColor='gray.500' cursor='default'>
                        <Highlight
                            query={['j3ksa.icu']}
                            styles={{ fontSize: 32, bg: 'green.500', rounded: 'lg', px: 3, py: 2 }}
                        >
                            j3ksa.icu
                        </Highlight>
                    </DrawerHeader>
                    <DrawerBody display='flex' flexDir='column'>
                        {categories.map(category => (
                            <Link key={category.id} ref={refs[category.id]} href='' id={category.id} onClick={() => handleScroll(category.id)} color='white' fontSize={24}>
                                {category.name}
                            </Link>
                        ))}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}