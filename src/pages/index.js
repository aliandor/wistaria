import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/navigation/nav"
import Header from "../components/header"
import Main from "../components/info/main"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <Header />
    <Main />
  </Layout>
)

export default IndexPage
