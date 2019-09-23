import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import BgImage from "../components/bgImage"
import SEO from "../components/seo"
import Button from "../components/button"
import { theme } from "../components/styles/theme"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ marginTop:'-4em',marginBottom: `1.45rem`, margin: "auto" }}>
    <h1
        style={{
          transform: "translateY(50px)",
          fontSize:"40px",
          webkitTextStroke: "1px black",
          color: "white",
          textShadow:
            "3px 3px 0 #000,-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000, 1px 1px 0 #000",
        }}
      >
        Hello World
      </h1>
      <BgImage />

      <div style={{ transform: "translateY(-20vh)" }}>
        <Link to="/about">
          <Button fontSize={1.7}>Learn More</Button>
        </Link>
      </div>
    </div>

    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
