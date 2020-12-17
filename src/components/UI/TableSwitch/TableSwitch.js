import React from 'react'
import { Grid, makeStyles, Switch } from '@material-ui/core'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  swtich: {
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: 'flex'
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(12px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main
        }
      }
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: 'none'
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white
    },
    checked: {}
  }
}))
const TableSwitch = ({ checked, onChange }) => {
  const classes = useStyles()
  return (
    <Grid component="label" container justify="center" alignItems="center" spacing={1}>
      <Grid item>Table Layout</Grid>
      <Grid item>
        <Switch className={classes.swtich} checked={checked} onChange={onChange} />
      </Grid>
      <Grid item>Reservation Management</Grid>
    </Grid>
  )
}

export default TableSwitch

TableSwitch.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired
}

TableSwitch.defaultProps = {
  checked: false
}
