import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'

const contactPage = () => {
    return (
        <Layout pageTitle="Kinderhaus Spatzennest am Birkenwäldchen">
            <StaticImage src="./kinderhaus.jpg"/>
            <div>
                <div className="property">
                    <span className="key">Adresse</span>
                    <span className="value">Kinderhaus Spatzennest am Birkenwäldchen Heinrich-Heine-Straße 33D02826 Görlitz</span>
                </div>
                <div className="property">
                    <span className="key">Träger</span>
                    <span className="value">Stadt Görlitz Untermarkt 6-8 02826 Görlitz</span>
                </div>
                <div className="property">
                    <span className="key">E-Mail</span>
                    <span className="value">s.hennig@goerlitz.de</span>
                </div>
                <div className="property">
                    <span className="key">Telefon</span>
                    <span className="value">03581/765640 (Frau Hennig)</span>
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
    )
}

export const Head = () => <title>Test</title>
export default contactPage