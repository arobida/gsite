/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"
// Components
import Header from "./header"
import Footer from "./footer"
// Hooks
import useMedia from "../hooks/useMedia"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const isMobile = useMedia("(min-width:500px)")

  return (
    <>
      {isMobile ? (
        <Header siteTitle={data.site.siteMetadata.title} />
      ) : (
        // This is where you would place the mobile header
        <Header siteTitle={data.site.siteMetadata.title} />
      )}
      <div>
        <main style={{ minHeight: "100vh" }}>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
