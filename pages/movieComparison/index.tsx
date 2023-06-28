import Layout from '../../components/layout'
import Head from 'next/head'
import MovieHeader from 'components/headers/movieHeader'

export default function index() {
  return (
    <Layout>
      <Head>
        <title>{`Movie comparison`}</title>
      </Head>
      <div className='flex flex-col items-center justify-center px-20 py-20'>
        <MovieHeader />
      </div>
    </Layout>
  )
}
