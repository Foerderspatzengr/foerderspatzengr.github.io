import * as React from 'react'
import {graphql, Link} from 'gatsby'
import Fiddle from './Fiddle'

import './global.css'

const pageStyles = {
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  lineHeight: "1.5",
  
  filter: "unset",
  
}

const navStyles = {
  paddingTop: "3%",
  paddingRight: "15%",
  maxHeight: "20%",
  display:"flex",
  justifyContent: "flex-end",
  
}

const mainStyles = {

  height: "60%",
  marginTop: "12%",
  
}

const contentStyles = {
  
  marginTop: "2%",
  //marginLeft: "20%",
  overflow: "auto",
  maxHeight: "65%",
  backgroundColor: "#ccffaaaa",
  border: "2px solid #360",
  borderRadius: "1em",
  margin: "0 2% 2% 28%",
  padding: "1%",
}
const titleStyle = {
  textAlign: "center",
}


const Layout = ({className, pageTitle, slug, children , nav, data}) => {
    return (
        <>
        <Fiddle />
        <div className={className} style={pageStyles}>
            <nav style={navStyles}>
                {(className === "articles" && !nav) ? <Link to="/">Back</Link> : null}
                <Link to="/">Startseite</Link>
                <Link to="/datenschutz">Datenschutzerklärung</Link>
                {
                    data.allMarkdownRemark.nodes.map((node) => {
                        if (node.frontmatter?.nav === true) {
                            return(
                                <Link to={`/${node.frontmatter.slug}`}>
                                    {node.frontmatter.title}
                                </Link>
                            )}
                        }
                    )
                }
            </nav>
            <main className={slug} style={mainStyles}>
            <h1 style={titleStyle}>{pageTitle}</h1>
            
              <div className="content" style={contentStyles}>
                  {children}
              </div>
            </main>
        </div>
        </>
    )
}

export default Layout
