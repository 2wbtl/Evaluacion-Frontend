import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ name, stylesButton }) => {
  return (
    <a href="#" className={`button ${stylesButton}`}>{name}</a>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
}

export default Button
