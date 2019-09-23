import React from "react"
import { Link } from "gatsby"

import logo from "../images/gatsby-icon.png"

const nav_links = {
  display: "inline-block",
  padding: ".3em",
}

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          width: "100%",
          background: "#333",
          color: "white",
        }}
      >
      <div style={{textAlign:'center',paddingTop:'1em'}}>
      <p>Join Our Mailing List:</p>
      <input style={{height:'3em',borderRadius:'.6em'}} type="text" placeholder="Your Email" />
      </div>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
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
      </div>
      <p style={{paddingBottom:''}}>
        <img
          src={logo}
          alt="logo"
          style={{
            width: "1.3em",
            transform: "translateY(.2em)",
            marginRight: ".3em",
          }}
        />
        ©{new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
