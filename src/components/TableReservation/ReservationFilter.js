import React from 'react'
import {
  makeStyles, Typography
} from '@material-ui/core'
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  radio: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
const ReservationFilter = ({ value, onChange }) => {
  const classes = useStyles()
  return (
    <ToggleButtonGroup
      className={classes.radio}
      value={value || '0'}
      exclusive
      onChange={onChange}
    >
      <ToggleButton value="-1">
        <Typography>Past</Typography>
      </ToggleButton>
      <ToggleButton value="0">
        <Typography>All</Typography>
      </ToggleButton>
      <ToggleButton value="1">
        <Typography>Future</Typography>
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
export default ReservationFilter

ReservationFilter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

ReservationFilter.defaultProps = {
  value: ''
}
