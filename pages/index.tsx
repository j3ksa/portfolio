import Layout from '../components/layout'
import Head from 'next/head'
import { VStack } from '@chakra-ui/react'
import { Header } from 'components/header/Header'
import { Bio } from 'components/bio/Bio'
import { Summary } from 'components/summary/Summary'
import { Timeline } from 'components/timeline/Timeline'
import { TechStack } from 'components/techStack/TechStack'
import { Footer } from 'components/footer/Footer'

const Index = () => {

  return (
    <Layout>
      <Head>
        <title>{`Home`}</title>
      </Head>
      <VStack width='90%' m='auto' scrollBehavior='smooth'>
        <Header />
        <Bio />
        <Summary />
        <Timeline />
        <TechStack />
        <Footer />
      </VStack>
    </Layout>
  )
}
export default Index