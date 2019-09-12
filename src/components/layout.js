import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import "typeface-supermercado-one"
const Layout = ({ children }) => {
  return (
    <>
      <div style={{ width: "100vw" }}>
        <main>{children}</main>
        <footer
          style={{
            textAlign: "center",
            padding: "1rem 1rem 2rem 1rem",
            fontFamily: "sans-serif",
          }}
        >
          © {new Date().getFullYear()} Wistaria Restaurant and Bar
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
