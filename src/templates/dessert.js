import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout.js"
import MenuNav from "../components/Menu/menuNav"

export const query = graphql`
  {
    sanityItem(category: { slug: { current: { eq: "dessert" } } }) {
      name
      description
      allergens2 {
        allergen
      }
      price
    }
  }
`

export default ({ data }) => {
  const Item = data.sanityItem
  return (
    <Layout>
      <h2>{Item.name}</h2>
      <p>{Item.description}</p>
      <small>{Item.price}</small>
      <MenuNav />
    </Layout>
  )
}
