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
          width:'100%'
        }}
      >
      <label>Full Name</label>
        <input
          type="text"
          placeholder="ex. john doe"
          required
          style={{
            margin: "1em",
            textAlign: "center",
            borderColor: "#333",
            height:'3em',
            borderRadius: ".5em",
            width:'20em'
          }}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="ex. john@gmail.com"
          required
          style={{
            margin: "1em",
            textAlign: "center",
            borderColor: "#333",
            height:'3em',
            borderRadius: ".5em",
            width:'20em'
          }}
        />
        <label>Reason For Contact</label>
        <textarea
          type="text"
          required
          style={{
            margin: "1em",
            height:'10em',
            borderColor: "#333",
            borderWidth:'.13em',
            borderRadius: ".5em",
            width:'24em'
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
