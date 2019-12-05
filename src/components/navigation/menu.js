import React from "react"
import styled, { keyframes } from "styled-components"
import { Link } from "gatsby"

const NavMenu = () => {
  return (
    <Menu>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dinner">Menu</Link>
        </li>
      </ul>
    </Menu>
  )
}

export default NavMenu

const Menu = styled.div`
  position: absolute;
  background: #fafafa;
  width: 100%;
  top: 50px;
  left: 0;
`
