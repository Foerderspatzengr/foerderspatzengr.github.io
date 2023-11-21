import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'

export default function BlogPostTemplate({
                                             data // this prop will be injected by the GraphQL query below.
                                         }) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    let featuredImg = getImage(data.markdownRemark.frontmatter.featuredImage)
    const { frontmatter, html } = markdownRemark
    return (
        <Layout pageTitle={data.markdownRemark.frontmatter.title}>
            <GatsbyImage image={featuredImg} />
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </Layout>
    )
}

export const query = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData(width:480)
          }
        }
      }
    }
  }
`

export const Head = ({ data }) => <title>{data.markdownRemark.frontmatter.title}</title>