import React from "react"
import styled from "styled-components"
import { useTransition, animated } from "react-spring"
import { Link } from "gatsby"

const NavMenu = () => {
  return (
    <Menu key={key} style={props}>
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

const Menu = styled(animated.div)`
  position: absolute;
  background: #fafafa;
  width: 100%;
  top: 50px;
  left: 0;
`
