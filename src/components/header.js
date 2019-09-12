import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Hero = `https://res.cloudinary.com/dnsdvh13n/image/upload/c_scale,f_auto,w_1000/v1568222623/wistaria/alcohol-architecture-bar-260922.jpg`

const Header = () => (
  <Landing>
    <h1>
      Some.Fancy.
      <br />
      Tagline.
    </h1>
  </Landing>
)

export default Header

const Landing = styled.header`
  margin-top: 50px;
  width: 100vw;
  height: 100vh;
  background-image: url(${Hero});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  h1 {
    color: #fafafa;
    /* padding: 1rem; */
    text-align: center;
    padding-top: 4rem;
    font-size: 2.5rem;
    /* background: lime; */
  }
`
