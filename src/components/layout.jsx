import * as React from 'react'
import { Link } from 'gatsby'
import Fiddle from './Fiddle'
import './global.css'

const pageStyles = {
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  height: "98vh",
}

const navStyles = {
  
  paddingRight: "15%",
  maxHeight: "15%",
  display:"flex",
  justifyContent: "flex-end",
  
}

const mainStyles = {

  height: "80%",

}

const contentStyles = {
  
    marginTop: "2%",
    marginLeft: "20%",
    overflow: "auto",
    height: "100%",
    backgroundColor: "#FFFFFF35",
    borderStyle: "dotted",
    borderColor: "#000000A8",
    borderWidth: "1px",
    borderRadius: "1%",
   
    paddingLeft: "2%",
    paddingTop: "2%",
  
}
const titleStyle = {
  textAlign: "center",
}
const Layout = ({className, pageTitle, slug, children }) => {
    return (
        <>
        <Fiddle />
        <div className={className} style={pageStyles}>
            <nav style={navStyles}>
                {className === "articles" ? <Link to="/">Back</Link> : null}
                <Link to="/">Startseite</Link>
                <Link to="/nachspielzeit">Nachspielzeit</Link>
                <Link to="/contact">Kontakt</Link>
                <Link to="/datenschutz">Datenschutzerklärung</Link>
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