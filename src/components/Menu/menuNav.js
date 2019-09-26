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
  return (
    <Tabs>
      {data.allSanityMenu.edges.map(({ node: menu }) => (
        <Link to={`/${menu.slug.current}`}>
          <img src={menu.image.asset.url} alt="" />
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
  background: #eee;
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
      background: ${Colors.LtPurple};
    }
    img {
      width: 24px;
    }
  }
  li {
    margin-top: 8px;
    list-style: none;
    width: 20vw;
    align-self: flex-end;
  }
`
