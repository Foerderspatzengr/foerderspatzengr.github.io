import * as React from 'react'
import { Link, graphql } from 'gatsby'

const BlogPage = ({ data }) => {
    return (
        <h1>
            Blog
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
        </h1>
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