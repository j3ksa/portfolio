import Layout from '../components/layout'
import Head from 'next/head'
import { VStack } from '@chakra-ui/react'
import { Header } from 'components/header/Header'

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>{`Home`}</title>
      </Head>
      <VStack width='90%' m='auto' scrollBehavior='smooth'>
        <Header/>
      </VStack>
    </Layout>
  )
}
export default Index