import { useEffect, useRef } from "react";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import Head from "next/head";
import { Reveal } from "components/Reveal";
import { Box } from "@chakra-ui/react";
import { Header } from "components/header/Header";
import { Bio } from "components/bio/Bio";
import { Summary } from "components/summary/Summary";
import { ProjectsSection } from "components/projects/ProjectsSection";
import { Timeline } from "components/timeline/Timeline";
import { TechStack } from "components/techStack/TechStack";
import { Footer } from "components/footer/Footer";
import Meta from "components/meta";
import { Basics } from "types";
import { fetchGithubBasics, scroll } from "utils";

interface IndexProps {
  basics: Basics[];
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const basics = await fetchGithubBasics();
  return {
    props: {
      basics,
    },
    revalidate: 3600,
  };
};

const Index = ({ basics }: IndexProps) => {
  const router = useRouter();
  const aboutRef = useRef<HTMLDivElement>();
  const projectsRef = useRef<HTMLDivElement>();
  const timelineRef = useRef<HTMLDivElement>();
  const techStackRef = useRef<HTMLDivElement>();
  const contactRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (!router.isReady) return;

    const hash = router.asPath.split("#")[1]?.split("?")[0];
    if (!hash) return;

    const refs = [
      aboutRef,
      projectsRef,
      timelineRef,
      techStackRef,
      contactRef,
    ].filter(Boolean) as React.MutableRefObject<HTMLDivElement>[];

    scroll(hash, refs);
  }, [router.isReady, router.asPath]);

  return (
    <Box bg="black">
      <Meta />
      <Head>
        <title>Łukasz Jęksa - Junior Game Developer Portfolio</title>
        <meta
          name="description"
          content="Portfolio Junior Game Developera (C# & Unity) – grywalne projekty, gry na itch.io, mechaniki i architektura oprogramowania."
        />
      </Head>
      <Layout>
        <Reveal>
          <Header
            aboutRef={aboutRef}
            projectsRef={projectsRef}
            timelineRef={timelineRef}
            techStackRef={techStackRef}
            contactRef={contactRef}
          />
        </Reveal>
        <Reveal>
          <Bio aboutRef={aboutRef} contactRef={contactRef} />
        </Reveal>
        <Reveal>
          <Summary basics={basics} />
        </Reveal>
        <Reveal>
          <ProjectsSection projectsRef={projectsRef} />
        </Reveal>
        <Reveal>
          <Timeline timelineRef={timelineRef} />
        </Reveal>
        <Reveal>
          <TechStack techStackRef={techStackRef} />
        </Reveal>
        <Reveal>
          <Footer contactRef={contactRef} />
        </Reveal>
      </Layout>
    </Box>
  );
};
export default Index;
