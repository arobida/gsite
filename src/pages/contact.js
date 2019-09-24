import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import useInput from "../hooks/useInput"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

const Contact = () => {
  const [toggle, setToggle] = useState(false)
  const name = useInput("")
  const email = useInput("")
  const purpose = useInput("")
  const onSubmit = e => {
    e.preventDefault()
    setToggle(!toggle)
  }
  const reset = () => setToggle(false)
  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact Us</h1>
      {toggle === false ? (
        <Form onSubmit={onSubmit} name={name} email={email} purpose={purpose} />
      ) : (
        <Sent name={name} email={email} reset={reset} />
      )}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

const Sent = ({ name, email, reset }) => (
  <div>
    <h2>Thanks For Reaching Out {name.value}!</h2>
    <p>We will respond shortly to: {email.value}</p>
    <button onClick={reset}>Reset</button>
  </div>
)

const Form = ({ onSubmit, name, email, purpose }) => {
  return (
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
          width: "15em",
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
          width: "15em",
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
          width: "20em",
        }}
      />
      <Button fontSize={1.3} borderRadius=".3em" onClick={onSubmit}>
        Send
      </Button>
    </form>
  )
}

export default Contact
