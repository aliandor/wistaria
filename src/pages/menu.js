import React from "react"
import styled from "styled-components"
import MenuNav from "../components/Menu/menuNav"
import Layout from "../components/layout"

const Menu = () => {
  return (
    <Layout>
      <Wrapper>
        <MenuNav />
      </Wrapper>
    </Layout>
  )
}

export default Menu

const Wrapper = styled.div`
  width: 100vw;
`
