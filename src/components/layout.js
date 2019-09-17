/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
// Global Styles & Theme
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../components/styles/global"
import { theme } from "../components/styles/theme"
// Components
import Header from "./header"
import Footer from "./footer"
import MobileMenu from "./mobileMenu"
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
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        {isMobile ? (
          <Header siteTitle={data.site.siteMetadata.title} />
        ) : (
          // This is where you would place the mobile header
          <MobileMenu />
        )}
        <div>
          <main style={{ minHeight: "100vh" }}>{children}</main>
        </div>
        <Footer />
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
