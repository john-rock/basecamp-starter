import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <section>
      <h1>Page 2</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </section>
  </Layout>
)

export default SecondPage
