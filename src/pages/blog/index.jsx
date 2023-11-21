import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="Blog">
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
export const Head = () => <title>Blog Posts</title>

export default BlogPage