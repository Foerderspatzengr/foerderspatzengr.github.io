import * as React from 'react'
import { Link } from 'gatsby'
import Fiddle from './Fiddle'

import './global.css'

const pageStyles = {
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  lineHeight: "1.5",
  
  height: "100vh",
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
  backgroundColor: "#FFFFFF35",
  borderStyle: "dotted",
  borderColor: "#000000A8",
  borderWidth: "1px",
  borderRadius: "1%",
  marginLeft: "25%",
  marginRight: "2%",
  padding: "1%",
}
const titleStyle = {
  textAlign: "center",
}


const Layout = ({className, pageTitle, slug, children , nav}) => {
    return (
        <>
        <Fiddle />
        <div className={className} style={pageStyles}>
            <nav style={navStyles}>
                {(className === "articles" && !nav) ? <Link to="/">Back</Link> : null}
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
