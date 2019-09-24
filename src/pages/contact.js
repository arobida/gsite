import React, { useState } from "react"
import { Link } from "gatsby"
import { useSpring, animated, config } from "react-spring"
import ReactIframe from "react-iframe"
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
  const reset = () => {
    setToggle(false)
    name.clear()
    email.clear()
    purpose.clear()
  }
  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact Us</h1>
      <div
        style={{
          display: "flex",
          flexWrap:'wrap',
          justifyContent: "space-around",
          alignItems: "flex-start",
        }}
      >
        {toggle === false ? (
          <Form
            onSubmit={onSubmit}
            name={name}
            email={email}
            purpose={purpose}
          />
        ) : (
          <Sent name={name} email={email} reset={reset} />
        )}
        <ul style={{ listStyle: "none",margin:'1em' }}>
          <h2>Business Hours</h2>
          <li>Monday - Friday: 7am-4pm</li>
          <li>Saturday: 9am-3pm</li>
          <li>Sunday: closed</li>
          <h2>Address</h2>
          <li>6420 Sequence Dr, San Diego, CA 92121</li>
          <li>
            <ReactIframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1714978.134642616!2d-117.1819036310449!3d32.90962349792293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc077b22137d53%3A0x53a49543aaee6587!2sGoogle%20SAN%20Sequence%20Dr!5e0!3m2!1sen!2sus!4v1569343888378!5m2!1sen!2sus" />
          </li>
        </ul>
      </div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

const Sent = ({ name, email, reset }) => {
  const appear = useSpring({
    to: { transform: "translateX(0%)" },
    from: { transform: "translateX(-100%)" },
    config: config.wobbly,
  })
  return (
    <animated.div style={appear}>
      <h2>Thanks For Reaching Out {name.value}!</h2>
      <p>We will respond shortly to: {email.value}</p>
      <button onClick={reset}>Reset</button>
    </animated.div>
  )
}

const Form = ({ onSubmit, name, email, purpose }) => {
  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "1em",
      }}
    >
    <h2>Send A Message</h2>
      <label>
        Name
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
            width: "13em",
          }}
        />
      </label>
      <label>
        Email
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
            width: "13em",
          }}
        />
      </label>
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
      <Button fontSize={1} borderRadius=".3em" onClick={onSubmit}>
        Send
      </Button>
    </form>
  )
}

export default Contact
