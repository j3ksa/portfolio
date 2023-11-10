import { useRef } from "react";
import { VStack } from "@chakra-ui/react";
type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const ref = useRef(null);
  return (
    <VStack ref={ref} width="100%" m="auto" scrollBehavior="smooth">
      {children}
    </VStack>
  );
};

export default Layout;
