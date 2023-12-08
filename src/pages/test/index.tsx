import * as React from "react"
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import '../../components/global.css'
import { graphql } from "gatsby" 


const addresseStyle = {
    paddingRight: "302px"
}

const traegerStyle = {
    paddingRight: "314px"
}

const emailStyle = {
    paddingRight: "316px"
}

const telefonStyle = {
    paddingRight: "309px"
}

const openTimesStyle = {
    paddingRight: "253px"
}

const konzeptStyle = {
    paddingRight: "100px"
}

const besonderheitenStyle = {
    paddingRight: "249px"
}

const contactPage = (result) => {
    return (
        <main className="test">
        <Layout pageTitle="Kinderhaus Spatzennest am Birkenwäldchen">
            <GatsbyImage image={result.data.file.childImageSharp.gatsbyImageData}/>
            <div className="info" >
                <div className="property">
                    <span className="key" style={addresseStyle}>Adresse</span>
                    <span className="value">Kinderhaus Spatzennest am Birkenwäldchen Heinrich-Heine-Straße 33D02826 Görlitz</span>
                </div>
                <div className="property">
                    <span className="key" style={traegerStyle}>Träger</span>
                    <span className="value">Stadt Görlitz Untermarkt 6-8 02826 Görlitz</span>
                </div>
                <div className="property">
                    <span className="key" style={emailStyle}>E-Mail</span>
                    <span className="value">s.hennig@goerlitz.de</span>
                </div>
                <div className="property">
                    <span className="key" style={telefonStyle}>Telefon</span>
                    <span className="value">03581/765640 (Frau Hennig)</span>
                </div>
                <div className="property">
                    <span className="key" style={openTimesStyle}>Öffnungszeiten</span>
                    <span className="value">06:30 - 16:30 Uhr</span>
                </div>
                <div className="property">
                    <span className="key" style={konzeptStyle}>Besonderes pädagogisches Konzept</span>
                    <span className="value">Montessori Pädagogik</span>
                </div>
                <div className="property">
                    <span className="key" style={besonderheitenStyle}>Besonderheiten</span>
                    <span className="value">integrative Einrichtung</span>
                </div>
            </div>
        </Layout>
        </main>
    )
}
export const titlequery = graphql`
  	query titlequery {
  		file(relativePath: {eq: "kinderhaus/kinderhaus.jpg"}) {
    		childImageSharp {
      			gatsbyImageData
    		}
  		}
	}
`

export const Head = () => <title>Test</title>
export default contactPage