import React, { useRef } from "react"
import { Link } from "gatsby"
import { useSpring, animated, config } from "react-spring"
import useObserver from "../hooks/useObserver"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Services = () => {
  const targetRef = useRef(null)
  const doc = typeof document !== "undefined" ? document : null
  const isIntersecting = useObserver(targetRef, doc.querySelector("body"))
  const appear = useSpring({
    to: { transform: "translateX(0%)" },
    from: { transform: "translateX(100%)" },
    delay: 1500,
    config: config.slow,
  })
  return (
    <Layout>
      <div ref={targetRef}>
        <SEO title="Services" />
        <h1>Services</h1>
        <p>Check out all of our services</p>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {allServices.map(service => {
            return (
              <div
                key={service.title}
                style={{
                  width: "20em",
                  margin: " 1em auto",
                  border: "2px solid #333",
                  borderRadius: "1em",
                  alignSelf: "space-around",
                }}
              >
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
              </div>
            )
          })}
        </div>
        {isIntersecting ? (
          <animated.h3 style={appear}>Hello World</animated.h3>
        ) : null}
        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  )
}

export default Services
//fake data
const allServices = [
  {
    title: "Mergers",
    summary:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae dicta, iste illo architecto consectetur sequi neque omnis necessitatibus ipsa excepturi, nemo beatae ea sapiente doloremque officia cumque inventore voluptatibus placeat.",
  },
  {
    title: "Business Sales",
    summary:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae dicta, iste illo architecto consectetur sequi neque omnis necessitatibus ipsa excepturi, nemo beatae ea sapiente doloremque officia cumque inventore voluptatibus placeat.",
  },
  {
    title: "Bussiness Advice",
    summary:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae dicta, iste illo architecto consectetur sequi neque omnis necessitatibus ipsa excepturi, nemo beatae ea sapiente doloremque officia cumque inventore voluptatibus placeat.",
  },
  {
    title: "Accounting",
    summary:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae dicta, iste illo architecto consectetur sequi neque omnis necessitatibus ipsa excepturi, nemo beatae ea sapiente doloremque officia cumque inventore voluptatibus placeat.",
  },
  {
    title: "Tax Preperation",
    summary:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae dicta, iste illo architecto consectetur sequi neque omnis necessitatibus ipsa excepturi, nemo beatae ea sapiente doloremque officia cumque inventore voluptatibus placeat.",
  },
]
