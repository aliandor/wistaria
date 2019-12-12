import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Colors } from "../assets/styles"

export default () => {
  const data = useStaticQuery(graphql`
    query Menus {
      allSanityMenu(sort: { order: ASC, fields: _createdAt }) {
        edges {
          node {
            menuName
            image {
              asset {
                url
              }
            }
            ActiveImage {
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
          <img src={menu.ActiveImage.asset.url} alt="" />
          <img className="default" src={menu.image.asset.url} alt="" />
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
  display: flex;
  flex-flow: row nowrap;
  overflow: scroll;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
  z-index: 2;
  background: #fafafa;
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
      color: ${Colors.Purple}ff;
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
    list-style: none;
    width: 20vw;
    align-self: flex-end;
  }
`
