import React from "react"
import styled from "styled-components"
import { Icons } from "../assets/icons"

const Logo = () => {
  return (
    <W_Logo>
      <img src={Icons.logo} alt="" />
      istaria
    </W_Logo>
  )
}

export default Logo

const W_Logo = styled.h1`
  /* background: tomato; */
  display: flex;
  color: #505050;
  width: 140px;
  height: 42px;
  font-size: 2rem;
  font-family: "supermercado one";
  align-self: flex-end;
  padding-top: 0.6rem;
  img {
    height: 42px;
    padding-right: 0.2rem;
  }
`
