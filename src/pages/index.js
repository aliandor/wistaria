import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/navigation/nav"
import Header from "../components/header"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <Header />
  </Layout>
)

export default IndexPage
