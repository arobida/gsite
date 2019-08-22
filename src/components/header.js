import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Headroom from "react-headroom"

import logo from "../images/gatsby-icon.png"

const nav_links = {
  display: "inline-block",
  padding: ".5em",
}

const Header = ({ siteTitle }) => {
  return (
    <Headroom>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/">
          <img src={logo} alt="logo" style={{ width: "2em" }} />
        </Link>
        <nav>
          <ul style={{ listStyle: "none" }}>
            <li className="nav_links" style={nav_links}>
              <Link to="/">Home</Link>
            </li>
            <li className="nav_links" style={nav_links}>
              <Link to="/about">About</Link>
            </li>
            <li className="nav_links" style={nav_links}>
              <Link to="/services">Services</Link>
            </li>
          </ul>
        </nav>
        <Link to="/contact">
          <button>Contact</button>
        </Link>
      </header>
    </Headroom>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
