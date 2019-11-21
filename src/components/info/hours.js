import React from "react"
import styled from "styled-components"
import { Colors } from "../assets/styles"

import Card from "./card"

const Hours = () => {
  return (
    <Card>
      <Info>
        <h2>Dinner</h2>
        <p>Monday</p>
        <p className="time">closed</p>
        <p>Tuesday - Sunday</p>
        <p className="time">5 - 9</p>
      </Info>
      <Info style={{ paddingBottom: "1rem" }}>
        <h2>Brunch</h2>
        <p>Saturday & Sunday</p>
        <p className="time">8 - 2</p>
      </Info>
    </Card>
  )
}

export default Hours

const Info = styled.div`
  text-align: center;
  h2 {
    color: ${Colors.Purple};
  }
  p {
    line-height: 1.25rem;
  }
  .time {
    color: gray;
  }
`
