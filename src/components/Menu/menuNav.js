import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Icons } from "../assets/icons"

const MenuNav = () => {
  return (
    <Tabs>
      <Link to="/dinner">
        <li>
          <img src={Icons.dinner} alt="" />
        </li>
        <p>Dinner</p>
      </Link>
      <Link to="">
        <li>
          <img src={Icons.breakfast} alt="" />
        </li>
        <p>Brunch</p>
      </Link>
      <Link to="">
        <li>
          <img src={Icons.drinks} alt="" />
        </li>
        <p>Drinks</p>
      </Link>
      <Link to="">
        <li>
          <img src={Icons.dessert} alt="" />
        </li>
        <p>Dessert</p>
      </Link>
      <Link to="">
        <li>
          <img src={Icons.specials} alt="" />
        </li>
        <p>Specials</p>
      </Link>
    </Tabs>
  )
}

export default MenuNav

const Tabs = styled.nav`
  width: 100vw;
  position: fixed;
  bottom: 0;
  display: grid;
  grid-template-columns: repeat(5, 20%);
  align-items: center;
  justify-content: center;
  background: #eee;
  a {
    &[aria-current="page"] {
      background: tomato;
    }
    text-decoration: none;
    color: #333;
    font-family: sans-serif;
    font-weight: 400;
    display: flex;
    flex-flow: column nowrap;
    height: inherit;
    align-items: center;
    p {
      font-size: 14px;
      @media (min-width: 400px) {
        font-size: 1rem;
      }
    }
  }
  li {
    display: flex;
    align-self: center;
    list-style: none;
  }
  img {
    justify-self: flex-end;
    /* justify-self: baseline; */
    width: 24px;
    height: 24px;
    transform: translateY(10px);
  }
`
