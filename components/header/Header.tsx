import { Flex, Spacer, HStack, Highlight, Button } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { categories } from "info";
import { MobileMenu } from "components/mobileMenu/MobileMenu";
import { scroll } from "utils";

interface Props {
  aboutRef?: React.MutableRefObject<HTMLDivElement>;
  projectsRef?: React.MutableRefObject<HTMLDivElement>;
  timelineRef?: React.MutableRefObject<HTMLDivElement>;
  techStackRef?: React.MutableRefObject<HTMLDivElement>;
  contactRef?: React.MutableRefObject<HTMLDivElement>;
}

export const Header = ({
  aboutRef,
  projectsRef,
  timelineRef,
  techStackRef,
  contactRef,
}: Props) => {
  const refs = [
    aboutRef,
    projectsRef,
    timelineRef,
    techStackRef,
    contactRef,
  ].filter(Boolean) as React.MutableRefObject<HTMLDivElement>[];

  return (
    <Flex as="nav" bg="black" width="100%" py={6} align="center">
      <Link href="/" fontSize={24} fontWeight="600">
        <Highlight
          query={["j3ksa.icu"]}
          styles={{
            bg: "green.500",
            rounded: "lg",
            px: 3,
            py: 2,
            _hover: { bg: "white" },
            transitionDuration: "200ms",
          }}
        >
          j3ksa.icu
        </Highlight>
      </Link>
      <Spacer />
      <HStack spacing={8} display={{ base: "none", md: "flex" }} align="center">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/#${category.id}`}
            id={category.id}
            onClick={(e) => {
              if (refs.length > 0) {
                e.preventDefault();
                scroll(category.id, refs);
              }
            }}
            color="white"
            fontWeight="500"
            _hover={{ color: "green.400" }}
          >
            {category.name}
          </Link>
        ))}

        <Link
          href="/cv/Lukasz_Jeksa_CV.pdf"
          download="Lukasz_Jeksa_CV.pdf"
          style={{ textDecoration: "none" }}
        >
          <Button
            size="sm"
            variant="outline"
            borderColor="green.400"
            color="green.400"
            _hover={{ bg: "green.400", color: "black" }}
            fontWeight="bold"
          >
            Download CV
          </Button>
        </Link>
      </HStack>
      <MobileMenu refs={refs} />
    </Flex>
  );
};
