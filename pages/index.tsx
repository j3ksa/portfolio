import Header from '../components/headers/header'
import Layout from '../components/layout'
import Head from 'next/head'
import Hero from 'components/hero/hero'
import { useState } from 'react'
import { TabNames } from 'interfaces'
import Bio from 'components/bio/bio'
import AppList from 'components/fun/appList'
import ProjectList from 'components/projects/projectList'

export default function Index() {
  const [tabName, setTabName] = useState<TabNames>('home')
  return (
    <Layout>
      <Head>
        <title>{`Home`}</title>
      </Head>
      <div className='h-screen flex flex-col items-center justify-center'>
        <Header tabName={tabName} setTabName={setTabName}/>
        {tabName === 'home' && <Hero/>}
        {tabName === 'bio' && <Bio/>}
        {tabName === 'fun' && <AppList/>}
        {tabName === 'projects' && <ProjectList/>}
      </div>
    </Layout>
  )
}
