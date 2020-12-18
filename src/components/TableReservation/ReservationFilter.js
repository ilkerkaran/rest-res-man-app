import React from 'react'
import {
  FormControlLabel, makeStyles, Radio, RadioGroup
} from '@material-ui/core'
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
    <RadioGroup className={classes.radio} value={value.toString()} onChange={onChange}>
      <FormControlLabel
        value="0"
        control={<Radio color="primary" />}
        label="All"
        labelPlacement="bottom"
      />
      <FormControlLabel
        value="-1"
        control={<Radio color="primary" />}
        label="Past"
        labelPlacement="bottom"
      />
      <FormControlLabel
        value="1"
        control={<Radio color="primary" />}
        label="Future"
        labelPlacement="bottom"
      />
    </RadioGroup>
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
