import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout.js"
import Nav from "../components/navigation/nav"
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
      <Nav />
      <Wrapper>
        <h1>Starters</h1>
        {Starters.map(({ node: starter }) => (
          <Item>
            <h2>{starter.name}</h2>
            <p>{starter.description}</p>
            <Price>
              <p>${starter.price}</p>
            </Price>
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
          </Item>
        ))}
        <h1 style={{ padding: "1rem 0" }}>Mains</h1>
        {Mains.map(({ node: main }) => (
          <Item2>
            <h2>{main.name}</h2>
            <p>{main.description}</p>
            <Price>
              <p>${main.price}</p>
            </Price>
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
          </Item2>
        ))}
      </Wrapper>
      <MenuNav />
    </Layout>
  )
}

const Wrapper = styled.div`
  text-align: center;
  display: grid;
  margin-top: 66px;
  /* padding: 1rem 0; */
  h1 {
    color: ${Colors.Purple};
    font-weight: 800;
    /* background: lime; */
  }
`

const Allergens = styled.div`
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: lime; */
  /* margin-bottom: 0.5rem; */
`
const Item = styled.div`
  /* background: tomato; */
  padding: 1rem;
  h2 {
    margin: 1rem;
  }
  p {
    padding: 0 3rem;
  }
  &:nth-child(even) {
    background: #fafafa;
  }
`
const Item2 = styled.div`
  /* background: tomato; */
  padding: 1rem;
  h2 {
    margin: 1rem;
  }
  p {
    padding: 0 3rem;
  }
  &:nth-child(odd) {
    background: #fafafa;
  }
`

const Price = styled.strong``
