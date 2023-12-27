import * as React from "react"
import {GatsbyImage} from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import '../../components/global.css'
import {graphql} from "gatsby"

const afterHoursPage = ({data}) => {
    const {gatsbyImageData} = data.file.childImageSharp;
    return (
        <main className="after-hours">
            <Layout pageTitle="Nachspielzeit">
                <GatsbyImage image={gatsbyImageData} imgStyle={{objectPosition: "0 33%"}}/>
                <h2>Dienstag, 06. Februar 2024: „Wir verzaubern das neue Jahr“</h2>
            </Layout>
        </main>
    )
}
export const titlequery = graphql`
  	query titlequery {
  		file(relativePath: {eq: "magic-show.jpg"}) {
    		childImageSharp {
      			gatsbyImageData
    		}
  		}
	}
`

export const Head = () => <title>Nachspielzeit</title>
export default afterHoursPage