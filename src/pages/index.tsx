import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../components/layout'
import {graphql, Link} from "gatsby";

const IndexPage: React.FC<PageProps> = ({ data }) => {
  return (
    <main className="startseite">
      <Layout pageTitle="Startseite">
          <h2>Blog</h2>
          {
              data.allMarkdownRemark.nodes.map((node) => (
                  <article key={node.id}>
                      <h2>
                          <Link to={`/blog/${node.frontmatter.slug}`}>
                              {node.frontmatter.title}
                          </Link>
                      </h2>
                      <p>{node.excerpt}</p>
                  </article>
              ))
          }
      </Layout>
    </main>
  )
}


export const query = graphql`
query {
  allMarkdownRemark {
    nodes {
      frontmatter {
        slug
        title
      }
      id
    }
  }
}
`

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
