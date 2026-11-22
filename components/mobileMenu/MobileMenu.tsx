import { Link } from "@chakra-ui/next-js";
import {
  Button,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useBreakpointValue,
  Drawer,
  Highlight,
  VStack,
} from "@chakra-ui/react";
import { categories } from "info";
import { scroll } from "utils";
import { BiMenu } from "react-icons/bi";

interface Props {
  refs: React.MutableRefObject<HTMLDivElement>[];
}

export const MobileMenu = ({ refs }: Props) => {
  const mobile = useBreakpointValue({
    base: "block",
    md: "none",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleScroll = (id: string) => {
    onClose();
    scroll(id, refs);
  };

  return (
    <>
      <Button bg="green.500" onClick={onOpen} display={mobile} px={2}>
        <BiMenu
          fontSize={32}
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
      </Button>
      <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="gray.800">
          <DrawerHeader
            borderBottomWidth="1px"
            borderColor="gray.500"
            cursor="default"
          >
            <Highlight
              query={["j3ksa.icu"]}
              styles={{
                fontSize: 32,
                bg: "green.500",
                rounded: "lg",
                px: 3,
                py: 2,
              }}
            >
              j3ksa.icu
            </Highlight>
          </DrawerHeader>
          <DrawerBody display="flex" flexDir="column" py={6}>
            <VStack align="flex-start" spacing={5}>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/#${category.id}`}
                  id={category.id}
                  onClick={() => handleScroll(category.id)}
                  color="white"
                  fontSize={22}
                  _hover={{ color: "green.400" }}
                >
                  {category.name}
                </Link>
              ))}

              <Link
                href="/cv/Lukasz_Jeksa_CV.pdf"
                download="Lukasz_Jeksa_CV.pdf"
                onClick={onClose}
                style={{ textDecoration: "none", width: "100%", marginTop: "16px" }}
              >
                <Button
                  width="100%"
                  bg="green.500"
                  color="black"
                  fontWeight="bold"
                  _hover={{ bg: "green.400" }}
                >
                  Pobierz CV (PDF)
                </Button>
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
