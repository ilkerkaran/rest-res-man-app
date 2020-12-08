import React from 'react'
import PropTypes from 'prop-types'
import { inputConfigTypes } from '../../../../propTypes/types'

const textArea = ({ className, inputConfig }) => (
  <div className={className}>
    <label htmlFor={inputConfig.inputName}>{inputConfig.label}</label>
    <textarea
      onChange={inputConfig.onChange}
      name={inputConfig.inputName}
      ref={inputConfig.isRequired ? inputConfig.register({ required: `${inputConfig.label} is required` }) : inputConfig.register}
    />
    <div style={{ color: 'darkred' }}>
      {inputConfig.errors[inputConfig.inputName]
      && inputConfig.errors[inputConfig.inputName].message}
    </div>
  </div>
)

export default textArea

textArea.propTypes = {
  className: PropTypes.string,
  ...inputConfigTypes
}
