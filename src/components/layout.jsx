import * as React from 'react'
import { Link } from 'gatsby'
import Fiddle from './Fiddle'
import './global.css'

const pageStyles = {
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const navStyles = {
  
  paddingRight: "15%",
  display:"flex",
  justifyContent: "flex-end",
    
}



const mainStyles = {

  paddingTop: "2%",
  paddingLeft: "20%",
  maxHeight: "90vh",
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
            {className == "articles" ? <Link to="/">Back</Link> : null}
                {children}
            </main>
        </div>
        </>
    )
}

export default Layout