import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"


const Services = () => {
  return (
    <Layout>
      <SEO title="Services" />
      <h1>Services</h1>
      <p>Check out all of our services</p>
      <div style={{display:'flex',flexWrap:'wrap'}}>
      {allServices.map(service=>{
        return(
          <div key={service.title} style={{width:'20em', margin:' 1em auto',border:'2px solid #333', borderRadius:'1em'}}>
          <h3>{service.title}</h3>
          <p>{service.summary}</p>
          </div>
        )
      })}
      </div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Services
//fake data
const allServices = [
  {
    title:'Mergers',
      summary:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae dicta, iste illo architecto consectetur sequi neque omnis necessitatibus ipsa excepturi, nemo beatae ea sapiente doloremque officia cumque inventore voluptatibus placeat.",
  },
  {
    title:'Business Sales',
      summary:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae dicta, iste illo architecto consectetur sequi neque omnis necessitatibus ipsa excepturi, nemo beatae ea sapiente doloremque officia cumque inventore voluptatibus placeat.",
  },
  {
    title:'Bussiness Advice',
      summary:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae dicta, iste illo architecto consectetur sequi neque omnis necessitatibus ipsa excepturi, nemo beatae ea sapiente doloremque officia cumque inventore voluptatibus placeat.",
  },
  {
    title:'Accounting',
      summary:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae dicta, iste illo architecto consectetur sequi neque omnis necessitatibus ipsa excepturi, nemo beatae ea sapiente doloremque officia cumque inventore voluptatibus placeat.",
  },
  {
    title:'Tax Preperation',
      summary:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae dicta, iste illo architecto consectetur sequi neque omnis necessitatibus ipsa excepturi, nemo beatae ea sapiente doloremque officia cumque inventore voluptatibus placeat.",
  },
]