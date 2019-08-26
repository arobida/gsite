import React from "react"
import { Link } from "gatsby"

import logo from "../images/gatsby-icon.png"

const nav_links = {
  display: "inline-block",
  padding: ".3em",
}

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
		height:"20%",
        marginTop: "1em",
        paddingTop: "0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#333",
        color: "white",
      }}
    >
      <p>© {new Date().getFullYear()}</p>
      <nav>
        <ul style={{ listStyle: "none" }}>
          <li className="nav_links" style={nav_links}>
            <Link
              to="/"
              style={{ color: "white" }}
              activeStyle={{ color: "orange" }}
            >
              Home
            </Link>
          </li>
          <li className="nav_links" style={nav_links}>
            <Link
              to="/about"
              style={{ color: "white" }}
              activeStyle={{ color: "orange" }}
            >
              About
            </Link>
          </li>
          <li className="nav_links" style={nav_links}>
            <Link
              to="/services"
              style={{ color: "white" }}
              activeStyle={{ color: "orange" }}
            >
              Services
            </Link>
          </li>
          <li className="nav_links" style={nav_links}>
            <Link
              to="/contact"
              style={{ color: "white" }}
              activeStyle={{ color: "orange" }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <img src={logo} alt="logo" style={{ width: "2em" }} />
    </footer>
  )
}

export default Footer
