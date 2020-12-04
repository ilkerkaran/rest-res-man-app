/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import PropTypes from 'prop-types'
import './Backdrop.css'

const Backdrop = ({ show, onClick }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Escape') {
      onClick()
    }
  }

  return (show ? (
    <div
      className="Backdrop"
      onClick={onClick}
      onKeyPress={handleKeyPress}
    />
  ) : null)
}

export default Backdrop

Backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}
