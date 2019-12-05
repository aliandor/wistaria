import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "../navigation/logo"
import { Icons } from "../assets/icons"
import NavMenu from "./menu"

const Nav = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <Navigation>
      <Link to="/">
        <Logo />
      </Link>
      <Buttons>
        <button>
          <img className="phone" src={Icons.phone} alt="" />
        </button>
        <button>
          <img
            className="menu"
            src={Icons.menu}
            alt=""
            onClick={() => setToggle(!toggle)}
          />
        </button>
      </Buttons>
      {toggle && <NavMenu />}
    </Navigation>
  )
}

export default Nav

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  width: calc(100vw - 1rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fafafa;
  height: 50px;
  padding: 0 1rem;
  button {
    margin-left: 0.5rem;
    background: none;
    border: none;
  }
  a {
    text-decoration: none;
  }
`
const Buttons = styled.div`
  display: flex;
  .phone {
    align-self: center;
    justify-self: center;
    @media (min-width: 768px) and (orientation: portrait) {
      display: none;
    }
  }
  .menu {
    /* margin-left: 1rem; */
  }
`
