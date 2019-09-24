import React from "react"
import { Link } from "gatsby"
import useMedia from "../hooks/useMedia"
import Layout from "../components/layout"
import BgImage from "../components/bgImage"
import SEO from "../components/seo"
import Button from "../components/button"

const IndexPage = () => {
  const mobile = useMedia("(max-width:500px)")
  return (
    <Layout>
      <SEO title="Home" />
      <div
        style={{ marginTop: `${mobile?"-3em":"0"}`, marginBottom: `1.45rem`, margin: "auto" }}
      >
        <BgImage />
        {
          mobile ? null:(
        <h1
          style={{
            transform: "translateY(-750px)",
            fontSize: "40px",
            WebkitTextStroke: "1px black",
            color: "white",
            textShadow:
              "3px 3px 0 #000,-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000, 1px 1px 0 #000",
          }}
        >
          Hello World
        </h1>
          )
        }
        <div style={{ transform: `${mobile?"translateY(10px)":"translateY(-220px)"}` }}>
          <Link to="/about">
            <Button fontSize={1.7}>Learn More</Button>
          </Link>
        </div>
      </div>

      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </Layout>
  )
}

export default IndexPage
