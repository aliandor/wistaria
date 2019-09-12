import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavMenu = () => {
  return (
    <Menu>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="">Menu</Link>
        </li>
        {/* <li><Link to=""></Link></li> */}
      </ul>
    </Menu>
  )
}

export default NavMenu

const Menu = styled.div``
