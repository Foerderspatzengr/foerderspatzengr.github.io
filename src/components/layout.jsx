import * as React from 'react'
import { Link } from 'gatsby'
import Fiddle from './Fiddle'
import './global.css'

const pageStyles = {
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  maxHeight: "100vh",
}

const navStyles = {
  
  paddingRight: "15%",
  display:"flex",
  justifyContent: "flex-end",
  
}
const mainStyles = {

  maxHeight: "80vh",

}
const contentStyles = {
  
    paddingTop: "2%",
    paddingLeft: "20%",
    overflow: "auto",

}

const Layout = ({className, pageTitle, slug, children }) => {
    return (
        <>
        <Fiddle />
        <div className={className} style={pageStyles}>
            <nav style={navStyles}>
                <Link to="/">Startseite</Link>
                <Link to="/nachspielzeit">Nachspielzeit</Link>
                <Link to="/contact">Kontakt</Link>
                <Link to="/datenschutz">Datenschutzerklärung</Link>
            </nav>
            <main className={slug} style={mainStyles}>
            <h1>{pageTitle}</h1>
            {className === "articles" ? <Link to="/">Back</Link> : null}
              <div className="content" style={contentStyles}>
                  {children}
              </div>
            </main>
        </div>
        </>
    )
}

export default Layout