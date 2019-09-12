import React from "react"
import styled from "styled-components"

const Wrapper = ({ children }) => {
  return <Container>{children}</Container>
}

export default Wrapper

const Container = styled.div`
  width: 100vw;
`
