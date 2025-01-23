import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'


export default function BlogPostTemplate( { data } ) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
      <Layout className= "articles" pageTitle={frontmatter.title} slug={frontmatter.slug} nav={frontmatter.nav}>
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
        slug
        nav
      }
    }
  }
`

export const Head = ({ data }) => <title>{data.markdownRemark.frontmatter.title}</title>