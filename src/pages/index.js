import React from 'react'
import Layout from '../components/layout'
import Project from '../components/project'
import About from '../components/about'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <About />
      <Project />
    </Layout>
  )
}

export default IndexPage
