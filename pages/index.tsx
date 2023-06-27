import Header from '../components/header/header'
import Layout from '../components/layout'
import Head from 'next/head'
import Hero from 'components/hero/hero'
import { useState } from 'react'
import { TabNames } from 'interfaces'
import Bio from 'components/bio'
import GameList from 'components/games/gameList'

export default function Index() {
  const [tabName, setTabName] = useState<TabNames>('home')

  return (
    <Layout>
      <Head>
        <title>{``}</title>
      </Head>
      <div className='h-screen flex flex-col items-center justify-center'>
        <Header tabName={tabName} setTabName={setTabName}/>
        {tabName === 'home' && <Hero/>}
        {tabName === 'bio' && <Bio/>}
        {tabName === 'games' && <GameList/>}
      </div>
    </Layout>
  )
}
