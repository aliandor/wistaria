import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout.js"
import MenuNav from "../components/Menu/menuNav"
import { Colors } from "../components/assets/styles"
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

export default ({ data }) => {
  const Starters = data.starter.edges
  const Mains = data.entree.edges
  return (
    <Layout>
      <Wrapper>
        <h1>Starters</h1>
        {Starters.map(({ node: starter }) => (
          <Item>
            <h2>{starter.name}</h2>
            <p>{starter.description}</p>
            <Allergens>
              <small>
                <strong>Allergens:</strong>
              </small>
              {starter.allergens2.map(allergen => (
                <ul>
                  <small>{allergen.allergen}</small>
                </ul>
              ))}
            </Allergens>
            <strong>${starter.price}</strong>
          </Item>
        ))}
        <h1>Mains</h1>
        {Mains.map(({ node: main }) => (
          <Item>
            <h2>{main.name}</h2>
            <p>{main.description}</p>
            <Allergens>
              <small>
                <strong>Allergens:</strong>
              </small>
              {main.allergens2.map(allergen => (
                <ul>
                  <small>{allergen.allergen}</small>
                </ul>
              ))}
            </Allergens>
            <strong>${main.price}</strong>
          </Item>
        ))}
      </Wrapper>
      <MenuNav />
    </Layout>
  )
}

const Wrapper = styled.div`
  text-align: center;
  display: grid;
  grid-row-gap: 1rem;
  h1 {
    color: ${Colors.Purple};
    font-weight: 800;
    text-transform: uppercase;
  }
`

const Allergens = styled.div`
  /* background: tomato; */
  display: flex;
  align-items: center;
  justify-content: center;
`
const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 30px 40px 2rem 2rem;
  grid-row-gap: 1rem;
  padding: 1rem;
  justify-items: center;
  &:nth-child(odd) {
    background: #fafafa;
  }

  p {
    max-width: 70%;
    line-height: 1.25rem;
  }
`
