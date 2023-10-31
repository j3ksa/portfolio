import Layout from '../components/layout'
import Head from 'next/head'
import { VStack } from '@chakra-ui/react'

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>{`Home`}</title>
      </Head>
      <VStack width='80%' m='auto'>
      </VStack>
    </Layout>
  )
}
export default Index