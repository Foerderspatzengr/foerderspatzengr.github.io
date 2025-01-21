import * as React from 'react'
import { Link } from 'gatsby'
import Fiddle from './Fiddle'
import './global.css'

const pageStyles = {
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}


const navStyles = {
  
    float: "right",
    paddingRight: "15%",
    paddingLeft: "100%",
    
}

const ItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
  paddingRight: "1rem",
}

const Layout = ({className, pageTitle, slug, children }) => {
    return (
        <>
        <Fiddle />
        <div className={className} style={pageStyles}>
            <nav style={navStyles}>
                <Link style={ItemStyles} to="/">Startseite</Link>
                <Link style={ItemStyles} to="/nachspielzeit">Nachspielzeit</Link>
                <Link style={ItemStyles} to="/contact">Kontakt</Link>
                <Link style={ItemStyles} to="/datenschutz">Datenschutzerklärung</Link>
            </nav>
            <main className={slug}>
            <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
        </>
    )
}

export default Layout