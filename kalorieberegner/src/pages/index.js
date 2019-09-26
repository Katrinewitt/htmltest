import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Velkommen til din hjælp til en sundere hverdag</h1>
    <p>Her kan du beregne dit daglige kalorieindtag og dine forbrændte kalorier</p>
    <p>Vælg venligst om du ønsker at beregne dit daglige kalorieindtag eller forbrændte kalorier:</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
