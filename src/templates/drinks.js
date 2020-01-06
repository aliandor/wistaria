import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout.js"
import Nav from "../components/navigation/nav"
import MenuNav from "../components/Menu/menuNav"
import { Colors } from "../components/assets/styles"

export const query = graphql`
  {
    drinks: allSanityItem(
      filter: { subCategory: { subCategory: { eq: "Cocktails" } } }
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
  const Drinks = data.drinks.edges
  return (
    <Layout>
      <Nav />
      <Wrapper>
        <h1>Cocktails</h1>
        {Drinks.map(({ node: drink }) => (
          <Item>
            <h2>{drink.name}</h2>
            <p>{drink.description}</p>
            <Price>
              <p>{drink.price}</p>
            </Price>
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

const Price = styled.strong``
