import { useRef } from 'react'
import Layout from '../components/layout'
import Head from 'next/head'
import { Reveal } from 'components/Reveal'
import { Box } from '@chakra-ui/react'
import { Header } from 'components/header/Header'
import { Bio } from 'components/bio/Bio'
import { Summary } from 'components/summary/Summary'
import { Timeline } from 'components/timeline/Timeline'
import { TechStack } from 'components/techStack/TechStack'
import { Footer } from 'components/footer/Footer'
import Meta from 'components/meta'

const Index = () => {
  const timelineRef = useRef<HTMLDivElement>()
  const techStackRef = useRef<HTMLDivElement>()
  const contactRef = useRef<HTMLDivElement>()
  return (
    <Box bg='black'>
      <Meta />
      <Head>
        <title>{`Home`}</title>
      </Head>
      <Layout>
        <Reveal>
          <Header timelineRef={timelineRef} techStackRef={techStackRef} contactRef={contactRef} />
        </Reveal>
        <Reveal>
          <Bio />
        </Reveal>
        <Reveal>
          <Summary />
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

  )
}
export default Index