import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "../navigation/logo"
import { Icons } from "../assets/icons"
// import NavMenu from "./menu"
import { useTransition, animated } from "react-spring"

const Nav = () => {
  const [toggle, setToggle] = useState(false)
  const slide = useTransition(toggle, null, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(-1%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-80%,0,0)" },
  })
  return slide.map(({ item, props, key }) => (
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
      {item && (
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
      )}
    </Navigation>
  ))
}
export default Nav

const Menu = styled(animated.div)`
  position: absolute;
  background: #fafafa;
  width: 100%;
  top: 50px;
  left: 0;
`

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
