import { Link } from "@chakra-ui/next-js"
import { HStack, Highlight, Text, VStack, Divider, Box } from "@chakra-ui/react"
import { contacts } from "info/contact"
import { FaRegCopyright } from 'react-icons/fa'

export const Footer = () => {
    const year = new Date().getFullYear()
    const handleCopy = () => {
        navigator.clipboard.writeText('lukasz@j3ksa.icu')
    }
    return (
        <VStack width='100%' spacing={4} marginTop={5}>
            <Text display='flex' fontSize={32} alignItems='center' marginBottom={4}>
                <Highlight
                    query={['Contact']}
                    styles={{ bg: 'green.500', rounded: 'lg', px: 3, marginLeft: 2 }}
                >
                    Contact
                </Highlight>
            </Text>
            {contacts.map(contact => {

                return (
                    <HStack key={contact.id} display='flex'>
                        <HStack color='white' fontSize={20}>
                            <Text>
                                {contact.text}
                            </Text>
                            {
                                contact.id === 'mail' &&
                                <Text cursor='pointer' _hover={{ textDecor: 'underline' }} onClick={contact.id === 'mail' ? handleCopy : undefined}>
                                    {contact.text2}
                                </Text>
                            }
                            {
                                contact.id === 'mail' &&
                                <Text>
                                    {contact.text3}
                                </Text>
                            }
                        </HStack>

                        <Link href={contact.link} target="_blank">
                            <contact.icon style={{ color: contact.color }} fontSize={32} />
                        </Link>
                    </HStack>
                )
            })}
            <Divider orientation='horizontal' />
            <Text color='white' fontSize={12}>
                Developer + Designed by Łukasz Jęksa
            </Text>
            <HStack color='white' spacing={2} marginBottom={4} fontSize={13}>
                <Text>
                    COPYRIGHT
                </Text>
                <FaRegCopyright />
                <Text>
                    {year}
                </Text>
                <Text>
                    Łukasz Jęksa
                </Text>
            </HStack>
        </VStack>
    )
}