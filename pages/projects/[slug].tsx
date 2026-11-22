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
  Code,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { games } from "info/games";
import { GameProject } from "types/game";
import { SiItchdotio, SiGithub } from "react-icons/si";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaTools,
  FaCode,
  FaExternalLinkAlt,
  FaPlayCircle,
  FaVideo,
  FaStar,
} from "react-icons/fa";

interface ProjectPageProps {
  game: GameProject;
  nextGame?: { slug: string; title: string };
  prevGame?: { slug: string; title: string };
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
  const gameIndex = games.findIndex((g) => g.slug === slug);
  const game = games[gameIndex];

  if (!game) {
    return {
      notFound: true,
    };
  }

  const prevGame = gameIndex > 0 ? { slug: games[gameIndex - 1].slug, title: games[gameIndex - 1].title } : null;
  const nextGame = gameIndex < games.length - 1 ? { slug: games[gameIndex + 1].slug, title: games[gameIndex + 1].title } : null;

  return {
    props: {
      game,
      prevGame,
      nextGame,
    },
  };
};

export default function ProjectPage({ game, prevGame, nextGame }: ProjectPageProps) {
  return (
    <Box bg="black" minH="100vh" color="white" py={{ base: 6, md: 10 }}>
      <Head>
        <title>{`${game.title} - Devlog & Case Study | Łukasz Jęksa`}</title>
        <meta
          name="description"
          content={`${game.title}: ${game.subtitle}. In-depth case study and technical devlog focusing on ${game.primaryFocus}.`}
        />
      </Head>

      <Layout>
        <Container maxW="1150px" px={{ base: 4, md: 8 }}>
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
                Back to Portfolio
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

          {/* Header Banner */}
          <VStack align="flex-start" spacing={4} mb={10}>
            <HStack spacing={3} wrap="wrap">
              <Badge colorScheme="green" fontSize="sm" px={3} py={1} borderRadius="md">
                {game.genre}
              </Badge>
              <Badge colorScheme="purple" fontSize="sm" px={3} py={1} borderRadius="md">
                {game.platform}
              </Badge>
              <Badge colorScheme="gray" fontSize="sm" px={3} py={1} borderRadius="md">
                Year: {game.year}
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

            <Text fontSize={{ base: "lg", md: "2xl" }} color="gray.300">
              {game.subtitle}
            </Text>

            {/* Primary Focus Spotlight */}
            <Box
              bg="rgba(34, 197, 94, 0.08)"
              borderLeft="4px solid"
              borderColor="green.400"
              p={4}
              borderRadius="md"
              width="100%"
            >
              <HStack spacing={2} align="center" mb={1}>
                <FaStar color="#48BB78" size={16} />
                <Text fontSize="xs" fontWeight="bold" color="green.400" textTransform="uppercase" letterSpacing="wider">
                  Key Technical Focus & Ownership
                </Text>
              </HStack>
              <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold" color="white">
                {game.primaryFocus}
              </Text>
              <Text fontSize="sm" color="gray.300" mt={2}>
                Team size: {game.teamSize} people
              </Text>
            </Box>

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
                  Play on itch.io
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
                    View on GitHub
                  </Button>
                </Link>
              )}
            </HStack>
          </VStack>

          {/* Main Layout Grid */}
          <SimpleGrid columns={{ base: 1, lg: 12 }} spacing={10} mb={16}>
            {/* Left Column: Devlog & Technical Blog Stream (8 cols) */}
            <Box gridColumn={{ lg: "span 8" }}>
              <VStack align="stretch" spacing={12}>
                {/* Devlog Entries */}
                {game.devlog && game.devlog.length > 0 ? (
                  game.devlog.map((section, index) => {
                    const isGif = Boolean(
                      section.image?.toLowerCase().endsWith(".gif"),
                    );
                    return (
                    <Box
                      key={index}
                      bg="gray.900"
                      borderWidth="1px"
                      borderColor="gray.800"
                      borderRadius="2xl"
                      p={{ base: 6, md: 8 }}
                      position="relative"
                    >
                      {/* Section Number Badge */}
                      <Badge
                        colorScheme="green"
                        variant="subtle"
                        fontSize="xs"
                        px={2.5}
                        py={0.5}
                        borderRadius="full"
                        mb={3}
                      >
                        DEVLOG ENTRY #0{index + 1}
                      </Badge>

                      <Text
                        as="h2"
                        fontSize={{ base: "22px", md: "26px" }}
                        fontWeight="bold"
                        color="white"
                        mb={1}
                      >
                        {section.title}
                      </Text>

                      {section.subtitle && (
                        <Text fontSize="sm" color="green.400" fontWeight="medium" mb={5}>
                          {section.subtitle}
                        </Text>
                      )}

                      {/* Content paragraphs */}
                      <VStack spacing={4} align="stretch" mb={section.image || section.isVideoPlaceholder || section.codeSnippet ? 6 : 0}>
                        {section.content.map((paragraph, pIdx) => (
                          <Text
                            key={pIdx}
                            fontSize={{ base: "15px", md: "16px" }}
                            lineHeight="1.8"
                            color="gray.200"
                            textAlign="justify"
                          >
                            {paragraph}
                          </Text>
                        ))}
                      </VStack>

                      {/* Image Block with Caption */}
                      {section.image && (
                        <Box my={6}>
                          <Box
                            borderRadius="xl"
                            overflow="hidden"
                            borderWidth="1px"
                            borderColor="gray.800"
                            bg="black"
                            maxH={isGif ? undefined : "450px"}
                          >
                            <Image
                              src={section.image}
                              alt={section.title}
                              width="100%"
                              maxH={isGif ? undefined : "450px"}
                              objectFit={isGif ? "contain" : "cover"}
                            />
                          </Box>
                          {section.imageCaption && (
                            <Text
                              fontSize="xs"
                              color="gray.400"
                              mt={2}
                              textAlign="center"
                              fontStyle="italic"
                            >
                              {isGif ? "▶ " : "📷 "}
                              {section.imageCaption}
                            </Text>
                          )}
                        </Box>
                      )}

                      {/* Video Gameplay Showcase Placeholder */}
                      {section.isVideoPlaceholder && (
                        <Box my={6}>
                          <Box
                            bg="black"
                            borderWidth="2px"
                            borderStyle="dashed"
                            borderColor="green.500"
                            borderRadius="xl"
                            p={{ base: 8, md: 12 }}
                            textAlign="center"
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            position="relative"
                            overflow="hidden"
                            boxShadow="0 0 25px rgba(34, 197, 94, 0.15)"
                          >
                            <Box
                              p={4}
                              bg="green.500"
                              color="black"
                              borderRadius="full"
                              mb={4}
                              boxShadow="0 0 20px rgba(72, 187, 120, 0.6)"
                            >
                              <FaPlayCircle size={36} />
                            </Box>
                            <HStack spacing={2} mb={2}>
                              <FaVideo color="#48BB78" />
                              <Text fontSize="lg" fontWeight="bold" color="white">
                                {section.videoPlaceholderDetails?.title || "Gameplay Video Showcase"}
                              </Text>
                            </HStack>
                            <Text fontSize="sm" color="gray.300" maxW="580px" mb={4}>
                              {section.videoPlaceholderDetails?.description}
                            </Text>
                            {section.videoPlaceholderDetails?.note && (
                              <Badge
                                bg="gray.800"
                                color="green.300"
                                p={2}
                                borderRadius="md"
                                fontSize="xs"
                                maxW="600px"
                                whiteSpace="normal"
                              >
                                💡 {section.videoPlaceholderDetails.note}
                              </Badge>
                            )}
                          </Box>
                        </Box>
                      )}

                      {/* Code Snippet Box */}
                      {section.codeSnippet && (
                        <Box my={6}>
                          <Text fontSize="xs" fontWeight="bold" color="gray.400" mb={2} textTransform="uppercase">
                            Technical Implementation (C#)
                          </Text>
                          <Box
                            bg="gray.950"
                            p={4}
                            borderRadius="lg"
                            borderWidth="1px"
                            borderColor="gray.800"
                            overflowX="auto"
                          >
                            <Code
                              display="block"
                              whiteSpace="pre"
                              bg="transparent"
                              color="green.300"
                              fontSize="xs"
                              fontFamily="monospace"
                            >
                              {section.codeSnippet}
                            </Code>
                          </Box>
                        </Box>
                      )}

                      {/* Key Takeaways */}
                      {section.keyTakeaways && section.keyTakeaways.length > 0 && (
                        <Box mt={6} pt={4} borderTop="1px solid" borderColor="gray.800">
                          <Text fontSize="xs" fontWeight="bold" color="gray.400" mb={3} textTransform="uppercase">
                            Key Systems & Takeaways:
                          </Text>
                          <List spacing={2}>
                            {section.keyTakeaways.map((takeaway, tIdx) => (
                              <ListItem
                                key={tIdx}
                                display="flex"
                                alignItems="flex-start"
                                color="gray.300"
                                fontSize="sm"
                              >
                                <ListIcon
                                  as={FaCheckCircle}
                                  color="green.400"
                                  mt="3px"
                                  boxSize="14px"
                                />
                                <Text>{takeaway}</Text>
                              </ListItem>
                            ))}
                          </List>
                        </Box>
                      )}
                    </Box>
                    );
                  })
                ) : null}
              </VStack>
            </Box>

            {/* Right Column: Sticky Project Metadata & Actions Sidebar (4 cols) */}
            <Box gridColumn={{ lg: "span 4" }}>
              <VStack spacing={6} align="stretch" position="sticky" top="24px">
                {/* Play CTA Card */}
                <Box
                  bg="gray.900"
                  p={6}
                  borderRadius="xl"
                  borderWidth="1px"
                  borderColor="gray.800"
                  textAlign="center"
                  boxShadow="0 4px 20px rgba(0, 0, 0, 0.4)"
                >
                  <Text fontSize="xl" fontWeight="bold" mb={1} color="white">
                    Playable Build
                  </Text>
                  <Text fontSize="xs" color="gray.400" mb={4}>
                    Publicly available on itch.io
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
                      Play on itch.io
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
                        mt={3}
                        width="100%"
                        leftIcon={<SiGithub />}
                        variant="outline"
                        borderColor="gray.700"
                        color="gray.200"
                        _hover={{ bg: "gray.800" }}
                        size="sm"
                      >
                        GitHub Repository
                      </Button>
                    </Link>
                  )}
                </Box>

                {/* Role & Contribution Summary */}
                <Box
                  bg="gray.900"
                  p={6}
                  borderRadius="xl"
                  borderWidth="1px"
                  borderColor="gray.800"
                >
                  <HStack spacing={2} mb={3}>
                    <FaCode color="#48BB78" />
                    <Text fontSize="md" fontWeight="bold">
                      My Role & Responsibilities
                    </Text>
                  </HStack>
                  <Text fontSize="sm" color="green.400" fontWeight="semibold" mb={3}>
                    {game.role}
                  </Text>
                  <List spacing={2.5}>
                    {game.myContribution.map((item, idx) => (
                      <ListItem
                        key={idx}
                        display="flex"
                        alignItems="flex-start"
                        color="gray.300"
                        fontSize="xs"
                        lineHeight="1.6"
                      >
                        <ListIcon
                          as={FaCheckCircle}
                          color="green.400"
                          mt="3px"
                          boxSize="13px"
                        />
                        <Text>{item}</Text>
                      </ListItem>
                    ))}
                  </List>
                </Box>

                {/* Tools & Tech Box */}
                <Box
                  bg="gray.900"
                  p={6}
                  borderRadius="xl"
                  borderWidth="1px"
                  borderColor="gray.800"
                >
                  <HStack spacing={2} mb={3}>
                    <FaTools color="#48BB78" />
                    <Text fontSize="md" fontWeight="bold">
                      Tools & Technologies
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

                {/* CV Download Card */}
                <Box
                  bg="gray.900"
                  p={6}
                  borderRadius="xl"
                  borderWidth="1px"
                  borderColor="gray.800"
                  textAlign="center"
                >
                  <Text fontSize="sm" fontWeight="bold" mb={1}>
                    Looking for a Unity Developer?
                  </Text>
                  <Text fontSize="xs" color="gray.400" mb={3}>
                    Download my Game Dev CV (C# & Unity)
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
                      fontWeight="bold"
                    >
                      Download CV (PDF)
                    </Button>
                  </Link>
                </Box>
              </VStack>
            </Box>
          </SimpleGrid>

          {/* Bottom Project Navigation */}
          <Divider borderColor="gray.800" mb={8} />
          <HStack justify="space-between" wrap="wrap" gap={4}>
            {prevGame ? (
              <Link href={`/projects/${prevGame.slug}`} style={{ textDecoration: "none" }}>
                <Button
                  leftIcon={<FaArrowLeft />}
                  variant="ghost"
                  color="gray.400"
                  _hover={{ color: "green.400", bg: "gray.900" }}
                >
                  Previous: {prevGame.title}
                </Button>
              </Link>
            ) : <Box />}

            {nextGame ? (
              <Link href={`/projects/${nextGame.slug}`} style={{ textDecoration: "none" }}>
                <Button
                  variant="ghost"
                  color="gray.400"
                  _hover={{ color: "green.400", bg: "gray.900" }}
                >
                  Next: {nextGame.title} →
                </Button>
              </Link>
            ) : <Box />}
          </HStack>
        </Container>
      </Layout>
    </Box>
  );
}
