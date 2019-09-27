import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Colors } from "../assets/styles"

export default () => {
  const data = useStaticQuery(graphql`
    query Menus {
      allSanityMenu {
        edges {
          node {
            menuName
            image {
              asset {
                url
              }
            }
            slug {
              current
            }
          }
        }
      }
    }
  `)
  const A = `https://res.cloudinary.com/dnsdvh13n/image/upload/v1568134825/wistaria/icons/dinner.svg`
  const B = `https://res.cloudinary.com/dnsdvh13n/image/upload/v1568134825/wistaria/icons/dinner-active.svg`
  return (
    <Tabs>
      {data.allSanityMenu.edges.map(({ node: menu }) => (
        <Link to={`/${menu.slug.current}`}>
          <img className="active" src={B} alt="" />
          <img className="default" src={A} alt="" />
          <li>{menu.menuName}</li>
        </Link>
      ))}
    </Tabs>
  )
}

const Tabs = styled.nav`
  width: 100vw;
  height: 60px;
  position: fixed;
  bottom: 0;
  display: grid;
  /* grid-template-columns: repeat(5, 20vw);
  grid-template-rows: 2rem; */

  display: flex;
  flex-flow: row nowrap;
  overflow: scroll;
  /* background: #eee; */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  a {
    text-decoration: none;
    color: #505050;
    font-family: "sans-serif";
    font-weight: 500;
    text-align: center;
    width: 30vw;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-end;
    &[aria-current="page"] {
      color: ${Colors.Purple};
      background: #f9f9f9;
      font-weight: 600;
      .default {
        display: none;
      }
    }
    img {
      width: 24px;
      position: absolute;
      bottom: 28px;
    }
  }
  li {
    /* margin-top: 5px; */
    list-style: none;
    width: 20vw;
    align-self: flex-end;
  }
`
