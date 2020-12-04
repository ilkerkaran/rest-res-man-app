/* eslint-disable react/forbid-prop-types */
import React from 'react'
import { Typography, Box as MuiBox } from '@material-ui/core'
import PropTypes from 'prop-types'

const SubHeader = ({ id, variant, children }) => (
  <Typography variant={variant || 'h5'}>
    <MuiBox id={id} fontWeight="fontWeightBold">{children}</MuiBox>
  </Typography>
)

export default SubHeader

SubHeader.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.any,
  id: PropTypes.string

}

SubHeader.defaultProps = {
  variant: null,
  children: null,
  id: null
}
