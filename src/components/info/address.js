import React from "react"
import styled from "styled-components"
import Card from "./card"

const Address = () => {
  return (
    <Card>
      <Map>
        <iframe
          allowfullscreen=""
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.357950599345!2d-118.05457628536755!3d34.16276481934635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2dc70bfbea0b5%3A0x22d46315eaa1ebb6!2s44%20N%20Baldwin%20Ave%2C%20Sierra%20Madre%2C%20CA%2091024!5e0!3m2!1sen!2sus!4v1568317008674!5m2!1sen!2sus"
        ></iframe>
      </Map>
      <Info>
        <p>44 N. Baldwin</p>
        <p>Sierra Madre, CA 91024</p>
        {/* turn in tel link */}
        <p>(626) 355-3155</p>
      </Info>
    </Card>
  )
}
export default Address

const Info = styled.div`
  text-align: center;
  font-weight: 400;
  padding: 0.5rem;
  /* background: tomato; */
  @media (min-width: 900px) {
    padding: 1.75rem 0;
  }
`
const Map = styled.div`
  height: 140px;
  width: 100%;
  border-radius: 16px 16px 0 0;
  iframe {
    width: inherit;
    border-radius: inherit;
    border: none;
  }
  @media (min-width: 900px) {
    height: 50%;
    iframe {
      height: 290px;
    }
  }
`
