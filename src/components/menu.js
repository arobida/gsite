import React from "react"
import { bool } from "prop-types"
import { StyledMenu } from "./styles/styledMenu"
import { Link } from "gatsby"
import logo from "../images/gatsby-icon.png"
import Button from "./button"

const Menu = ({ toggle }) => {
  return (
    <StyledMenu toggle={toggle}>
      <Link to="/">
        <img src={logo} alt="logo" style={{ width: "2em" }} />
      </Link>
      <Link to="/" style={{ color: "green" }} activeStyle={{ color: "orange" }}>
        <span role="img" aria-label="about us">
          🏠
        </span>
        Home
      </Link>
      <Link
        to="/about"
        style={{ color: "green" }}
        activeStyle={{ color: "orange" }}
      >
        <span role="img" aria-label="about us">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        About
      </Link>
      <Link
        to="/services"
        style={{ color: "green" }}
        activeStyle={{ color: "orange" }}
      >
        <span role="img" aria-label="price">
          💵
        </span>
        Services
      </Link>
      <Link
        to="/contact"
        style={{ color: "green", textDecoration: "none", marginLeft: "10px" }}
        activeStyle={{ color: "orange" }}
      >
        <Button>
          <span role="img" aria-label="contact">
            &#x1f4e9;
          </span>
          Contact
        </Button>
      </Link>
    </StyledMenu>
  )
}
Menu.propTypes = {
  toggle: bool.isRequired,
}

export default Menu
