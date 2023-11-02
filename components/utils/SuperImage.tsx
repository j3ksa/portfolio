import { chakra } from "@chakra-ui/react";
import NextImage from "next/image";

export const SuperImage = chakra(NextImage, {
    shouldForwardProp: (prop) => ['height', 'width', 'quality', 'src', 'alt'].includes(prop)
});