import React from "react"
import styled from "styled-components"
import { Colors, Styles } from "../components/assets/styles"
import Address from "../info/address"
import Hours from "../info/hours"

const Main = () => {
  return (
    <Container>
      <header>
        <h1>YOUR NEW GO TO.</h1>
        <p>
          Wistaria is a contemporary eatery offering seasonal Californian fare
          and carft cocktails.
        </p>
        <button>The Menu</button>
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
    font-family: "sans-serif";
    display: grid;
    grid-template-rows: 40px 110px 50px;
    grid-row-gap: 0.5rem;
    padding-bottom: 4rem;
  }
  h1 {
    color: ${Colors.Purple};
  }
  p {
    font-size: 20px;
  }
  button {
    border-radius: ${Styles.borderRadius};
    background: none;
    border: 2px solid ${Colors.Purple};
    width: 140px;
    font-size: 20px;
    color: ${Colors.Purple};
    font-weight: 600;
    justify-self: center;
  }
`

const Cards = styled.section`
  display: grid;
  grid-row-gap: 2rem;
`
