import * as React from "react"
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import Fiddle from '../../components/Fiddle'
import '../../components/global.css'
import { graphql } from "gatsby" 

const contactPage = (result) => {
    return (
        <main className="contact">
        <Layout pageTitle="Kontakt">
            <GatsbyImage alt="" image={result.data.file.childImageSharp.gatsbyImageData}/>
            <div className="info" >
                <div className="property">
                    <span className="key">Adresse</span>
                    <span
                        className="value">Kinderhaus Spatzennest am Birkenwäldchen <br/> Heinrich-Heine-Straße 33D <br/> 02827 Görlitz</span>
                </div>
                <div className="property">
                    <span className="key">Träger</span>
                    <span className="value">Förderverein des Montessorikinderhauses Spatzennest in Görlitz e.V. c/o Kinderhaus Spatzennest</span>
                </div>
                <div className="property">
                    <span className="key">Telefon</span>
                    <span className="value">+49-1520-4738965</span>
                </div>
                <div className="property">
                    <span className="key">Öffnungszeiten</span>
                    <span className="value">06:30 - 16:30 Uhr</span>
                </div>
                <div className="property">
                    <span className="key">Besonderes pädagogisches Konzept</span>
                    <span className="value">Montessori Pädagogik</span>
                </div>
                <div className="property">
                    <span className="key">Besonderheiten</span>
                    <span className="value">integrative Einrichtung</span>
                </div>
            </div>
        </Layout>
        </main>
    )
}
export const titlequery = graphql`
  	query titlequery {
  		file(relativePath: {eq: "kinderhaus.jpg"}) {
    		childImageSharp {
      			gatsbyImageData
    		}
  		}
	}
`

export const Head = () => <title>Contact</title>
export default contactPage