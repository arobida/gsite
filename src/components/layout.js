/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React,{useState,useEffect} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
// Global Styles & Theme
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../components/styles/global"
import { theme } from "../components/styles/theme"
// Hooks
// import useMedia from "../hooks/useMedia"
// Components
import Header from "./header"
import Footer from "./footer"
import MobileMenu from "./mobileMenu"

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
  const useMedia = (query, defaultState = false) => {
    const [state, setState] = useState(defaultState)

    useEffect(() => {
      let mounted = true
      const mql = window.matchMedia(query)
      const onChange = () => {
        if (!mounted) return
        setState(!!mql.matches)
      }

      mql.addListener(onChange)
      setState(mql.matches)

      return () => {
        mounted = false
        mql.removeListener(onChange)
      }
    }, [query])

    return state
  }
  const isMobile = useMedia("(max-width:500px)")

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        {isMobile ? (
          <MobileMenu />
        ) : (
          <Header siteTitle={data.site.siteMetadata.title} />
        )}
        <main style={{ minHeight: "100vh" }}>{children}</main>
        <Footer />
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
