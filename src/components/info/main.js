import React from "react"
import styled from "styled-components"
import { Colors, Styles } from "../assets/styles"
import Address from "./address"
import Hours from "./hours"
import { Link } from "gatsby"

const Main = () => {
  return (
    <Container>
      <header>
        <h1>YOUR NEW GO TO.</h1>
        <p>
          Wistaria is a contemporary eatery offering seasonal Californian fare
          and craft cocktails.
        </p>
        <Link to="/dinner">
          <button>The Menu</button>
        </Link>
      </header>
      <Cards>
        <Address />
        <Hours />
      </Cards>
    </Container>
  )
}

export default Main

const Container = styled.div`
  padding: 1rem;
  header {
    display: grid;
    grid-row-gap: -1rem;
    padding-bottom: 2rem;
  }
  h1 {
    color: ${Colors.Purple};
    margin: auto 0;
    @media (min-width: 900px) {
      text-align: center;
    }
  }
  p {
    background: white;
    font-size: 20px;
    line-height: 1.75rem;
    text-align: center;
  }
  a {
    justify-self: center;
    button {
      border-radius: ${Styles.borderRadius};
      background: none;
      border: 2px solid ${Colors.Purple};
      height: 50px;
      width: 140px;
      font-size: 20px;
      font-family: "Montserrat", sans-serif;
      color: ${Colors.Purple};
      font-weight: 600;
    }
  }
`

const Cards = styled.section`
  display: grid;
  grid-row-gap: 2rem;
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
  }
`
