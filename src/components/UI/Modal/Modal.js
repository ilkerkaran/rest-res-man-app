import React from 'react'

import './Modal.css'
import PropTypes from 'prop-types'
import Backdrop from '../Backdrop/Backdrop'

const Modal = ({ show, onClose, children }) => (
  <>
    <Backdrop
      show={show}
      onClick={onClose}
    />
    <div
      className="Modal"
      style={{
        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0'
      }}
    >
      {children}
    </div>
  </>
)

export default Modal

Modal.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}
