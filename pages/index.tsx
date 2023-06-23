import Header from '../components/header/header'
import Layout from '../components/layout'
import Head from 'next/head'
import Hero from 'components/hero/hero'
import Footer from 'components/footer'

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>{``}</title>
      </Head>
      <Header/>
      <Hero/>
      <Footer />
    </Layout>
  )
}
