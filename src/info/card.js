import React from "react"
import styled from "styled-components"
import { Styles } from "../components/assets/styles"

const Card = ({ children }) => {
  return <Cards>{children}</Cards>
}

export default Card

const Cards = styled.section`
  width: 100%;
  max-width: 644px;
  border-radius: ${Styles.borderRadius};
  box-shadow: ${Styles.boxShadow};
  padding-bottom: 2rem;
`
