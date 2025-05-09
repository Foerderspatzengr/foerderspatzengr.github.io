import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../components/layout'
import {graphql, Link} from "gatsby";

const articleStyle = {

}




const IndexPage: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout data={data} className="startseite" pageTitle="Montessori-Kinderhaus Spatzennest am Birkenwäldchen">
        {
            data.allMarkdownRemark.nodes.map((node) => {
              if (node.frontmatter?.nav === true) {
                return null
              }
              return(
                <article style={articleStyle} key={node.id}>
                    <h2>
                        <Link to={`/${node.frontmatter.slug}`}>
                            {node.frontmatter.title}
                        </Link>
                    </h2>
                    <p>{node.excerpt}</p>
                </article>
            )}
          )
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
        nav
      }
      id
    }
  }
}
`
export const Head: HeadFC = () => <title>Montessori-Kinderhaus Spatzennest am Birkenwäldchen</title>

export default IndexPage


