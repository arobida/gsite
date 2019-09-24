import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Headroom from "react-headroom"
// Components
import logo from "../images/gatsby-icon.png"
import Social from "../components/social"

const nav_links = {
  display: "inline-block",
  padding: ".5em",
}
const links = {
  width: "2em",
  textTransform: "uppercase",
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
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
          paddingRight: "2em",
        }}
      >
        <Link to="/">
          <img src={logo} alt="logo" style={{ width: "2em" }} />
        </Link>
        <nav>
          <ul style={{ listStyle: "none" }}>
            <li className="nav_links" style={nav_links}>
              <Link to="/" style={links} activeStyle={{ color: "orange" }}>
                Home
              </Link>
            </li>
            <li className="nav_links" style={nav_links}>
              <Link to="/about" style={links} activeStyle={{ color: "orange" }}>
                About
              </Link>
            </li>
            <li className="nav_links" style={nav_links}>
              <Link
                to="/services"
                style={links}
                activeStyle={{ color: "orange" }}
              >
                Services
              </Link>
            </li>
            <li className="nav_links" style={nav_links}>
              <Link
                to="/contact"
                style={links}
                activeStyle={{ color: "orange" }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <Social color="white"/>
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
