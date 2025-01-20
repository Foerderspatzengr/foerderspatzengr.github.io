import * as React from 'react'
import { Link } from 'gatsby'
import Fiddle from './Fiddle'
import './global.css'
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
    display: "flex",
    listStyle: "none",
    paddingLeft: "0.5rem",
}
const doclistStyles = {
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
    paddingRight: "1rem",
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const blogStyles = {
    kinderhaus: {

    },
}

const Layout = ({ pageTitle, slug, children }) => {
    return (
        
        <div style={pageStyles}>
          <Fiddle />
            <nav>
                <ul style={listStyles}>
                    <li style={listItemStyles}><Link to="/">Startseite</Link></li>
                    <li style={listItemStyles}><Link to="/nachspielzeit">Nachspielzeit</Link></li>
                    <li style={listItemStyles}><Link to="/contact">Kontakt</Link></li>
                    <li style={listItemStyles}><Link to="/datenschutz">Datenschutzerklärung</Link></li>
                </ul>
            </nav>
            <main className={slug}>
            <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout