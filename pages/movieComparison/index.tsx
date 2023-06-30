import Layout from '../../components/layout'
import Head from 'next/head'
import MovieHeader from 'components/headers/movieHeader'
import MovieMain from 'components/movie/movieMain'

export default function index() {
  return (
    <Layout>
      <Head>
        <title>{`Movie comparison`}</title>
      </Head>
      <div className='flex flex-col items-center justify-center lg:px-20 lg:py-20'>
        <MovieHeader />
        <MovieMain/>
      </div>
    </Layout>
  )
}
