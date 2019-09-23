import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

const Contact = () => {
  const onSubmit = e => {
    e.preventDefault()
    console.log("It Works")
  }
  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact Us</h1>
      <form
        onSubmit={onSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "1em",
        }}
      >
        <input
          type="text"
          placeholder="Name"
          style={{
            margin: "1em",
            textAlign: "center",
            borderColor: "#333",
            height:'3em',
            borderRadius: ".5em",
          }}
        />
        <input
          type="email"
          placeholder="Email"
          style={{
            margin: "1em",
            textAlign: "center",
            borderColor: "#333",
            height:'3em',
            borderRadius: ".5em",
          }}
        />
        <label htmlFor="purpose">Reason For Contacting Us:</label>
        <textarea
          type="text"
          name="purpose"
          style={{
            margin: "1em",
            height:'8em',
            borderColor: "#333",
            borderWidth:'.12em',
            borderRadius: ".5em",
          }}
        />
        <Button fontSize={1.3} borderRadius=".5em" onClick={onSubmit}>
          Send
        </Button>
      </form>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Contact
