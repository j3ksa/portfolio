import { Flex, Spacer, HStack, Highlight } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { categories } from "info";
import { MobileMenu } from "components/mobileMenu/MobileMenu";
import { scroll } from "utils";

interface Props {
  timelineRef: React.MutableRefObject<HTMLDivElement>;
  techStackRef: React.MutableRefObject<HTMLDivElement>;
  contactRef: React.MutableRefObject<HTMLDivElement>;
}

export const Header = ({ timelineRef, techStackRef, contactRef }: Props) => {
  const refs = [timelineRef, techStackRef, contactRef];

  return (
    <Flex as="nav" bg="black" width="100%" py={6}>
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
      <HStack spacing={10} display={{ base: "none", md: "flex" }}>
        {categories.map((category) => (
          <Link
            key={category.id}
            ref={refs[category.id]}
            href=""
            id={category.id}
            onClick={() => scroll(category.id, refs)}
            color="white"
            _hover={{ color: "green.500" }}
          >
            {category.name}
          </Link>
        ))}
      </HStack>
      <MobileMenu refs={refs} />
    </Flex>
  );
};
