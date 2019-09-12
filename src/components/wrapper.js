import React from "react"

const Wrapper = ({ children }) => {
  const WrapperStyles = {
    width: `100vw`,
    // padding: `1rem`,
  }

  return <div style={WrapperStyles}>{children}</div>
}

export default Wrapper
