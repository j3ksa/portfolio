import Header from '../components/header/header'
import Layout from '../components/layout'
import Head from 'next/head'
import Hero from 'components/hero/hero'
import Footer from 'components/footer'

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>{``}</title>
      </Head>
      <div className='h-screen flex flex-col items-center justify-center'>
        <Header/>
        <Hero/>
      </div>
    </Layout>
  )
}
