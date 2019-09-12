import React from "react"
import styled from "styled-components"
import { Colors } from "../components/assets/styles"

import Card from "../info/card"

const Hours = () => {
  return (
    <Card>
      <Info>
        <h2>Dinner</h2>
        <p className="day">Monday</p>
        <p>closed</p>
        <p className="day">Tuesday - Sunday</p>
        <p>5 - 9</p>
      </Info>
      <Info>
        <h2>Brunch</h2>
        <p className="day">Saturday & Sunday</p>
        <p>8 - 2</p>
      </Info>
    </Card>
  )
}

export default Hours

const Info = styled.div`
  text-align: center;
  padding: 0.5rem;
  font-family: "sans-serif";
  font-weight: 400;
  display: grid;
  grid-template-rows: 60px 30px 30px;
  grid-auto-rows: 30px;
  grid-row-gap: none;

  h2 {
    color: ${Colors.Purple};
    font-size: 2rem;
  }
  .day {
    font-weight: 400;
  }
`
