import React from "react"
import { FaInstagram, FaEnvelope, FaFacebook } from "react-icons/fa"
import { theme } from "./styles/theme"

const Social = () => {
  return (
    <div>
      <FaFacebook size="1.3em" color={theme.primaryLight} style={{margin:'.3em'}}/>
      <FaInstagram size="1.3em" color={theme.primaryLight} style={{margin:'.3em'}}/>
      <FaEnvelope size="1.3em" color={theme.primaryLight} style={{margin:'.3em'}}/>
    </div>
  )
}

export default Social
