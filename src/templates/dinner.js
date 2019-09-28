import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout.js"
import MenuNav from "../components/Menu/menuNav"

export const Items = graphql`
  {
    starter: allSanityItem(
      filter: { subCategory: { subCategory: { eq: "Starters" } } }
    ) {
      edges {
        node {
          name
          description
          price
          allergens2 {
            allergen
          }
        }
      }
    }
    entree: allSanityItem(
      filter: { subCategory: { subCategory: { eq: "Mains" } } }
    ) {
      edges {
        node {
          name
          description
          price
          allergens2 {
            allergen
          }
        }
      }
    }
  }
`

const Wrapper = styled.div`
  text-align: center;
  padding: 1rem 4rem;
`

export default ({ data }) => {
  const Starters = data.starter.edges
  const Mains = data.entree.edges
  return (
    <Layout>
      <Wrapper>
        <>
          <h1>Starters</h1>
          {Starters.map(({ node: starter }) => (
            <>
              <h2>{starter.name}</h2>
              <p>{starter.description}</p>
              <small>{starter.price}</small>
            </>
          ))}
        </>
        <h1>Mains</h1>
        {Mains.map(({ node: main }) => (
          <>
            <h2>{main.name}</h2>
            <p>{main.description}</p>
            <small>{main.price}</small>
          </>
        ))}
      </Wrapper>
      <MenuNav />
    </Layout>
  )
}
