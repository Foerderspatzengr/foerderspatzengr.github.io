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
  backgroundColor: "#ccffaacc",
  border: "2px solid #360",
  borderRadius: "1em",
  margin: "0 2% 2% 28%",
  padding: "1%",
}
const titleStyle = {
  textAlign: "center",
}


const Layout = ({className, pageTitle, slug, children , previous, next, parentPage, childPages, nav}) => {
    return (
        <>
        {/*<Fiddle />*/}
        <div className={className} style={pageStyles}>
            <nav style={navStyles}>
                <Link to="/">Startseite</Link>
                {
                    nav?.nodes.map((node) => <Link to={`/${node.frontmatter.slug}`}>
                        {node.frontmatter.title}
                    </Link>                    )
                }
                <Link to="/datenschutz">Datenschutzerklärung</Link>
            </nav>
            <main className={slug} style={mainStyles}>
                <h1 style={titleStyle}>
                    {parentPage && <span style={{fontSize: "initial"}}>
                        <Link to={'/'+parentPage.frontmatter.slug} title={parentPage.headings[0].value}>{parentPage.frontmatter.title}</Link>
                        {" "}
                        »
                    </span>}
                    {pageTitle}
                </h1>

              <div className="content" style={contentStyles}>
                  {children}
                  {childPages?.length > 0 && <div>
                      <hr/>
                      <h2>Weitere Beiträge zum Thema</h2>
                      <ul>
                          {childPages.map((page) => <li><Link to={'/'+page.frontmatter.slug} title={page.headings[0].value}>{page.frontmatter.title}</Link></li>)}
                      </ul>
                  </div>}
                  {(previous || next) && <div>
                      <hr/>
                      <h2>Artikel in diesem Rundgang</h2>
                      <dl>

                          {previous && [<dt>Vorheriger</dt>,<dd> <Link to={'/'+previous.frontmatter.slug} title={previous.headings[0].value}>{previous.frontmatter.title}</Link></dd>]}
                          {next && [<dt>Nächster</dt>,<dd> <Link to={'/'+next.frontmatter.slug} title={next.headings[0].value}>{next.frontmatter.title}</Link></dd>]}
                      </dl>
                  </div>}
              </div>
            </main>
        </div>
        </>
    )
}

export default Layout
