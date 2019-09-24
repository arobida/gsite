import React from "react"
import { Link } from "gatsby"
import useInput from "../hooks/useInput"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

const Contact = () => {
  const name = useInput("")
  const email = useInput("")
  const purpose = useInput("")
  const onSubmit = e => {
    e.preventDefault()
    alert(
      `Thank You For Reaching Out ${name.value}!

      Your Message:
      ${purpose.value}

      We will respond shortly to: ${email.value}`
    )
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
          width: "100%",
        }}
      >
        <label>Full Name</label>
        <input
          type="text"
          placeholder="ex. john doe"
          required
          value={name.value}
          onChange={name.onChange}
          style={{
            margin: "1em",
            textAlign: "center",
            borderColor: "#333",
            height: "3em",
            borderRadius: ".5em",
            width: "20em",
          }}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="ex. john@gmail.com"
          required
          value={email.value}
          onChange={email.onChange}
          style={{
            margin: "1em",
            textAlign: "center",
            borderColor: "#333",
            height: "3em",
            borderRadius: ".5em",
            width: "20em",
          }}
        />
        <label>Reason For Contact</label>
        <textarea
          type="text"
          required
          value={purpose.value}
          onChange={purpose.onChange}
          style={{
            margin: "1em",
            height: "10em",
            borderColor: "#333",
            borderWidth: ".13em",
            borderRadius: ".5em",
            width: "24em",
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
