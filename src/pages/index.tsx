import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../components/layout'
import {graphql, Link} from "gatsby";

const IndexPage: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout className="startseite" pageTitle="Montessori-Kinderhaus Spatzennest am Birkenwäldchen">
        <p>Bitte haben Sie noch etwas Geduld. Wir arbeiten derzeit sowohl an der Inhalten als auch am Erscheinungsbild. Vielen Dank!</p>
        {
            data.allMarkdownRemark.nodes.map((node) => (
                <article key={node.id}>
                    <h2>
                        <Link to={`/${node.frontmatter.slug}`}>
                            {node.frontmatter.title}
                        </Link>
                    </h2>
                    <p>{node.excerpt}</p>
                </article>
            ))
        }
    </Layout>
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
export const Head: HeadFC = () => <title>Montessori-Kinderhaus Spatzennest am Birkenwäldchen</title>

export default IndexPage
