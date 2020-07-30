import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Title = ({ children, ...props }) => {
  return <StyledTitle {...props}>{children}</StyledTitle>
}

Title.propTypes = {
  children: PropTypes.string,
}

const StyledTitle = styled.h2`
  color: #484848;
  font-weight: normal;
`

export default Title
