import { useRef } from "react";
import { GetStaticProps } from "next";
import Layout from "../components/layout";
import Head from "next/head";
import { Reveal } from "components/Reveal";
import { Box } from "@chakra-ui/react";
import { Header } from "components/header/Header";
import { Bio } from "components/bio/Bio";
import { Summary } from "components/summary/Summary";
import { Timeline } from "components/timeline/Timeline";
import { TechStack } from "components/techStack/TechStack";
import { Footer } from "components/footer/Footer";
import Meta from "components/meta";
import { Basics } from "types";
import { fetchGithubBasics } from "utils";

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
  const timelineRef = useRef<HTMLDivElement>();
  const techStackRef = useRef<HTMLDivElement>();
  const contactRef = useRef<HTMLDivElement>();
  return (
    <Box bg="black">
      <Meta />
      <Head>
        <title>{`Home`}</title>
      </Head>
      <Layout>
        <Reveal>
          <Header
            timelineRef={timelineRef}
            techStackRef={techStackRef}
            contactRef={contactRef}
          />
        </Reveal>
        <Reveal>
          <Bio contactRef={contactRef} />
        </Reveal>
        <Reveal>
          <Summary basics={basics} />
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
