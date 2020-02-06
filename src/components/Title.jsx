import React from "react"
import PropTypes from "prop-types"

const Title = props => {
  const { children } = props
  return <h1>{children}</h1>
}

Title.propTypes = {
  children: PropTypes.string,
}

export default Title
