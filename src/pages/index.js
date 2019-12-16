import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="medium-container">
      <h1>Home Page</h1>
      <p>Welcome to Basecamp GatsbyJS Starter.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </section>
  </Layout>
)

export default IndexPage
