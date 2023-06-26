import Header from '../components/header/header'
import Layout from '../components/layout'
import Head from 'next/head'
import Hero from 'components/hero/hero'

export default function Bio() {
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
