import React from "react"
import StyledButton from "../styles/styledButton"

const Button = ({ children }) => {
  return (
    <StyledButton>
      {children}
      <span className="spans"></span>
      <span className="spans"></span>
      <span className="spans"></span>
      <span className="spans"></span>
      <b className="bs" aria-hidden="true">
        {children}
      </b>
      <b className="bs" aria-hidden="true">
        {children}
      </b>
      <b className="bs" aria-hidden="true">
        {children}
      </b>
      <b className="bs" aria-hidden="true">
        {children}
      </b>
    </StyledButton>
  )
}
export default Button
