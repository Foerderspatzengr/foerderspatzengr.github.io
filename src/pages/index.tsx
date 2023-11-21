import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Layout pageTitle="Startseite">
      </Layout>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
