import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout.js"
import Nav from "../components/navigation/nav"
import MenuNav from "../components/Menu/menuNav"
import { Colors } from "../components/assets/styles"

export const query = graphql`
  {
    breakfast: allSanityItem(
      filter: { subCategory: { subCategory: { eq: "Breakfast" } } }
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
    lunch: allSanityItem(
      filter: { subCategory: { subCategory: { eq: "Lunch" } } }
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
  const Breakfast = data.breakfast.edges
  const Lunch = data.lunch.edges
  return (
    <Layout>
      <Nav />
      <Wrapper>
        <h1>Breakfast</h1>
        {Breakfast.map(({ node: breakfast }) => (
          <Item>
            <h2>{breakfast.name}</h2>
            <p>{breakfast.description}</p>
            <Price>
              <p>${breakfast.price}</p>
            </Price>
            <Allergens>
              <small>
                <strong>Allergens:</strong>
              </small>
              {breakfast.allergens2.map(allergen => (
                <ul>
                  <small>{allergen.allergen}</small>
                </ul>
              ))}
            </Allergens>
          </Item>
        ))}
        <h1 style={{ padding: "1rem 0" }}>Lunch</h1>
        {Mains.map(({ node: lunch }) => (
          <Item>
            <h2>{lunch.name}</h2>
            <p>{lunch.description}</p>
            <Price>
              <p>${lunch.price}</p>
            </Price>
            <Allergens>
              <small>
                <strong>Allergens:</strong>
              </small>
              {lunch.allergens2.map(allergen => (
                <ul>
                  <small>{allergen.allergen}</small>
                </ul>
              ))}
            </Allergens>
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
  &:nth-child(odd) {
    background: #fafafa;
  }
`

const Price = styled.strong``
