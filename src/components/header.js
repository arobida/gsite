import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Headroom from "react-headroom"

import Button from "../components/button"
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
          background: "#333",
          paddingLeft: "2em",
          paddingRight:"2em"
        }}
      >
        <Link to="/">
          <img src={logo} alt="logo" style={{ width: "2em" }} />
        </Link>
        <nav>
          <ul style={{ listStyle: "none" }}>
            <li className="nav_links" style={nav_links}>
              <Link
                to="/"
                style={{ color: "green" }}
                activeStyle={{ color: "orange" }}
              >
                Home
              </Link>
            </li>
            <li className="nav_links" style={nav_links}>
              <Link
                to="/about"
                style={{ color: "green" }}
                activeStyle={{ color: "orange" }}
              >
                About
              </Link>
            </li>
            <li className="nav_links" style={nav_links}>
              <Link
                to="/services"
                style={{ color: "green" }}
                activeStyle={{ color: "orange" }}
              >
                Services
              </Link>
            </li>
          </ul>
        </nav>
        <Link
          to="/contact"
          style={{ color: "green", textDecoration: "none",marginLeft:
          "10px" }}
          activeStyle={{ color: "orange" }}
        >
          <Button>Contact</Button>
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
