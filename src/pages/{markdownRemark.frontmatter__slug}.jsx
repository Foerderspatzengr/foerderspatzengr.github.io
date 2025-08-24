import * as React from "react"
import {graphql, Link} from "gatsby"
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import Layout from '../components/layout'


export default function BlogPostTemplate({data}) {
    const {markdownRemark, nav} = data // data.markdownRemark holds your post data
    const {frontmatter, html, previous, next, parentPage, childPages} = markdownRemark
    return (
        <Layout nav={nav} className="articles" pageTitle={frontmatter.title} slug={frontmatter.slug}
                previous={previous} next={next} parentPage={parentPage} childPages={childPages}>
            <div dangerouslySetInnerHTML={{__html: html}}/>
        </Layout>
    )
}

export const query = graphql`
query ($id: String) {
  markdownRemark(id: {eq: $id}) {
    html
    frontmatter {
      title
      slug
      nav
    }
    parentPage {
      frontmatter {
        title
        slug
      }
      headings {
        value
      }
    }
    childPages {
      frontmatter {
        title
        slug
      }
      headings {
        value
      }
    }
    previous {
      frontmatter {
        title
        slug
      }
      headings {
        value
      }
    }
    next {
      frontmatter {
        title
        slug
      }
      headings {
        value
      }
    }
  }
  nav: allMarkdownRemark(filter: {frontmatter: {nav: {eq: true}}}) {
    nodes {
      frontmatter {
        title
        slug
      }
      headings {
        value
      }
    }
  }
}`

export const Head = ({data}) => <title>{data.markdownRemark.frontmatter.title}</title>