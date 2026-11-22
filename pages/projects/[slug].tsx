import { useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Layout from "../../components/layout";
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Badge,
  Button,
  SimpleGrid,
  Image,
  Divider,
  List,
  ListItem,
  ListIcon,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { games } from "info/games";
import { GameProject } from "types/game";
import { SiItchdotio, SiGithub } from "react-icons/si";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaGamepad,
  FaTools,
  FaCode,
  FaExternalLinkAlt,
} from "react-icons/fa";

interface ProjectPageProps {
  game: GameProject;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = games.map((game) => ({
    params: { slug: game.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ProjectPageProps> = async ({
  params,
}) => {
  const slug = params?.slug as string;
  const game = games.find((g) => g.slug === slug);

  if (!game) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      game,
    },
  };
};

export default function ProjectPage({ game }: ProjectPageProps) {
  const [activeImage, setActiveImage] = useState(
    game.screenshots[0] || game.coverImage
  );

  return (
    <Box bg="black" minH="100vh" color="white" py={{ base: 6, md: 10 }}>
      <Head>
        <title>{`${game.title} - Game Dev Portfolio | Łukasz Jęksa`}</title>
        <meta name="description" content={game.description} />
      </Head>

      <Layout>
        <Container maxW="1100px" px={{ base: 4, md: 8 }}>
          {/* Top navigation */}
          <HStack justify="space-between" mb={8} wrap="wrap" gap={4}>
            <Link href="/#projects" style={{ textDecoration: "none" }}>
              <Button
                leftIcon={<FaArrowLeft />}
                variant="outline"
                borderColor="gray.700"
                color="gray.200"
                _hover={{ bg: "gray.800", borderColor: "green.400" }}
                size="sm"
              >
                Wróć do Portfolio
              </Button>
            </Link>

            <Breadcrumb color="gray.400" fontSize="sm">
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} href="/">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} href="/#projects">
                  Projects
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage color="green.400">
                <BreadcrumbLink>{game.title}</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </HStack>

          {/* Header info */}
          <VStack align="flex-start" spacing={4} mb={8}>
            <HStack spacing={3} wrap="wrap">
              <Badge colorScheme="green" fontSize="sm" px={3} py={1} borderRadius="md">
                {game.genre}
              </Badge>
              <Badge colorScheme="purple" fontSize="sm" px={3} py={1} borderRadius="md">
                {game.platform}
              </Badge>
              <Badge colorScheme="gray" fontSize="sm" px={3} py={1} borderRadius="md">
                Rok: {game.year}
              </Badge>
            </HStack>

            <Text
              as="h1"
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
            >
              {game.title}
            </Text>

            <Text fontSize={{ base: "lg", md: "xl" }} color="gray.300">
              {game.subtitle}
            </Text>

            {/* CTA Buttons */}
            <HStack spacing={4} pt={2} wrap="wrap">
              <Link
                href={game.itchUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  leftIcon={<SiItchdotio size={20} />}
                  bg="#FA5C5C"
                  color="white"
                  _hover={{ bg: "#e54747" }}
                  size="lg"
                  fontWeight="bold"
                  boxShadow="0 4px 14px rgba(250, 92, 92, 0.4)"
                >
                  Zagraj w grę na itch.io
                </Button>
              </Link>

              {game.githubUrl && (
                <Link
                  href={game.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    leftIcon={<SiGithub size={20} />}
                    variant="outline"
                    borderColor="gray.600"
                    color="white"
                    _hover={{ bg: "gray.800" }}
                    size="lg"
                  >
                    Kod na GitHub
                  </Button>
                </Link>
              )}
            </HStack>
          </VStack>

          {/* Screenshots Gallery */}
          <Box
            bg="gray.900"
            p={{ base: 3, md: 5 }}
            borderRadius="2xl"
            borderWidth="1px"
            borderColor="gray.800"
            mb={12}
          >
            {/* Main Active Image */}
            <Box
              position="relative"
              height={{ base: "260px", sm: "380px", md: "520px" }}
              width="100%"
              borderRadius="xl"
              overflow="hidden"
              mb={4}
              bg="black"
            >
              <Image
                src={activeImage}
                alt={`${game.title} screenshot`}
                objectFit="contain"
                width="100%"
                height="100%"
              />
            </Box>

            {/* Gallery Thumbnails */}
            {game.screenshots.length > 1 && (
              <HStack spacing={3} overflowX="auto" pb={2}>
                {game.screenshots.map((shot, idx) => (
                  <Box
                    key={idx}
                    cursor="pointer"
                    borderRadius="lg"
                    overflow="hidden"
                    borderWidth="2px"
                    borderColor={activeImage === shot ? "green.400" : "transparent"}
                    opacity={activeImage === shot ? 1 : 0.6}
                    _hover={{ opacity: 1 }}
                    minW={{ base: "90px", md: "140px" }}
                    height={{ base: "60px", md: "90px" }}
                    onClick={() => setActiveImage(shot)}
                  >
                    <Image
                      src={shot}
                      alt={`Thumbnail ${idx + 1}`}
                      objectFit="cover"
                      width="100%"
                      height="100%"
                    />
                  </Box>
                ))}
              </HStack>
            )}
          </Box>

          {/* Project Details Grid */}
          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={10} mb={12}>
            {/* Main Column (2 spans) */}
            <Box gridColumn={{ lg: "span 2" }}>
              <VStack align="stretch" spacing={8}>
                {/* 1. Opis gry */}
                <Box>
                  <HStack spacing={3} mb={4}>
                    <Box p={2} bg="green.500" color="black" borderRadius="md">
                      <FaGamepad size={18} />
                    </Box>
                    <Text fontSize="2xl" fontWeight="bold">
                      Opis gry
                    </Text>
                  </HStack>
                  <Text
                    fontSize="md"
                    color="gray.200"
                    lineHeight="1.8"
                    textAlign="justify"
                  >
                    {game.description}
                  </Text>
                </Box>

                <Divider borderColor="gray.800" />

                {/* 2. Dokładny opis wkładu */}
                <Box>
                  <HStack spacing={3} mb={4}>
                    <Box p={2} bg="green.500" color="black" borderRadius="md">
                      <FaCode size={18} />
                    </Box>
                    <Text fontSize="2xl" fontWeight="bold">
                      Mój wkład i odpowiedzialność
                    </Text>
                  </HStack>
                  <Text fontSize="md" color="green.300" fontWeight="semibold" mb={3}>
                    Rola w projekcie: {game.role}
                  </Text>
                  <List spacing={3}>
                    {game.myContribution.map((item, index) => (
                      <ListItem
                        key={index}
                        display="flex"
                        alignItems="flex-start"
                        color="gray.200"
                        lineHeight="1.7"
                      >
                        <ListIcon
                          as={FaCheckCircle}
                          color="green.400"
                          mt="5px"
                          boxSize="16px"
                        />
                        <Text>{item}</Text>
                      </ListItem>
                    ))}
                  </List>
                </Box>

                <Divider borderColor="gray.800" />

                {/* 3. Kluczowe rozwiązania techniczne */}
                <Box>
                  <HStack spacing={3} mb={4}>
                    <Box p={2} bg="green.500" color="black" borderRadius="md">
                      <FaCheckCircle size={18} />
                    </Box>
                    <Text fontSize="2xl" fontWeight="bold">
                      Kluczowe mechaniki i architektura
                    </Text>
                  </HStack>
                  <List spacing={3}>
                    {game.highlights.map((highlight, index) => (
                      <ListItem
                        key={index}
                        display="flex"
                        alignItems="flex-start"
                        color="gray.300"
                        lineHeight="1.7"
                      >
                        <ListIcon
                          as={FaCheckCircle}
                          color="green.400"
                          mt="5px"
                          boxSize="15px"
                        />
                        <Text>{highlight}</Text>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </VStack>
            </Box>

            {/* Sidebar Column (1 span) */}
            <Box>
              <VStack spacing={6} align="stretch" position="sticky" top="24px">
                {/* Tools box */}
                <Box
                  bg="gray.900"
                  p={6}
                  borderRadius="xl"
                  borderWidth="1px"
                  borderColor="gray.800"
                >
                  <HStack spacing={2} mb={4}>
                    <FaTools color="#38A169" />
                    <Text fontSize="lg" fontWeight="bold">
                      Użyte narzędzia
                    </Text>
                  </HStack>
                  <SimpleGrid columns={2} spacing={2}>
                    {game.tools.map((tool) => (
                      <Badge
                        key={tool}
                        p={2}
                        textAlign="center"
                        borderRadius="md"
                        bg="gray.800"
                        color="green.300"
                        fontSize="xs"
                        fontWeight="semibold"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </SimpleGrid>
                </Box>

                {/* Play Card */}
                <Box
                  bg="gray.900"
                  p={6}
                  borderRadius="xl"
                  borderWidth="1px"
                  borderColor="gray.800"
                  textAlign="center"
                >
                  <Text fontSize="lg" fontWeight="bold" mb={2}>
                    Chcesz zagrać?
                  </Text>
                  <Text fontSize="sm" color="gray.400" mb={4}>
                    Projekt jest publicznie dostępny i grywalny na itch.io.
                  </Text>
                  <Link
                    href={game.itchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      width="100%"
                      leftIcon={<SiItchdotio />}
                      rightIcon={<FaExternalLinkAlt size={12} />}
                      bg="#FA5C5C"
                      color="white"
                      _hover={{ bg: "#e54747" }}
                      size="md"
                      fontWeight="bold"
                    >
                      Otwórz na itch.io
                    </Button>
                  </Link>
                </Box>

                {/* CV reminder card */}
                <Box
                  bg="gray.900"
                  p={6}
                  borderRadius="xl"
                  borderWidth="1px"
                  borderColor="gray.800"
                  textAlign="center"
                >
                  <Text fontSize="md" fontWeight="bold" mb={2}>
                    Pobierz moje CV
                  </Text>
                  <Text fontSize="xs" color="gray.400" mb={3}>
                    Junior Game Developer | C# & Unity
                  </Text>
                  <Link
                    href="/cv/Lukasz_Jeksa_CV.pdf"
                    download="Lukasz_Jeksa_CV.pdf"
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      size="sm"
                      width="100%"
                      variant="outline"
                      borderColor="green.400"
                      color="green.400"
                      _hover={{ bg: "green.400", color: "black" }}
                    >
                      Pobierz CV (PDF)
                    </Button>
                  </Link>
                </Box>
              </VStack>
            </Box>
          </SimpleGrid>
        </Container>
      </Layout>
    </Box>
  );
}
