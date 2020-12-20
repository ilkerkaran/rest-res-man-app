import { Typography, makeStyles } from '@material-ui/core'
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab'
import { EventNote as EventNoteIcon, Edit as EditIcon } from '@material-ui/icons'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TableSwitch from '../components/UI/TableSwitch/TableSwitch'
import TableEditor from './TableEditor'
import TableReservation from './TableReservation'
import DailyReport from './DailyReport'
import { toggleLayoutSwitch } from '../store/actions/actionCreators'

const useStyles = makeStyles({
  toggleGroup: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
const Restaurant = () => {
  const [layoutSwitch, setLayoutSwitch] = useState()
  const [toggleVal, setToggleVal] = useState()
  const { tableLayoutSwitch } = useSelector((state) => state.restaurant)
  const dispatch = useDispatch()
  const classes = useStyles()

  const handleSwitchChange = () => {
    dispatch(toggleLayoutSwitch())
    setLayoutSwitch((prev) => !prev)
  }

  const handleToggleChange = (e, val) => setToggleVal(val)
  let content = null

  if (toggleVal) {
    content = <DailyReport />
  } else
  if (tableLayoutSwitch) {
    content = (
      <>
        <TableSwitch
          checked={tableLayoutSwitch}
          onChange={handleSwitchChange}
        />
        <TableReservation />
      </>
    )
  } else {
    content = (
      <>
        <TableSwitch
          checked={tableLayoutSwitch}
          onChange={handleSwitchChange}
        />
        <TableEditor />
      </>
    )
  }
  return (
    <>
      <ToggleButtonGroup
        className={classes.toggleGroup}
        value={toggleVal || ''}
        exclusive
        onChange={handleToggleChange}
      >
        <ToggleButton value="">
          <EditIcon />
        </ToggleButton>
        <ToggleButton value="1">
          <EventNoteIcon />
        </ToggleButton>
      </ToggleButtonGroup>
      {content}
    </>
  )
}

export default Restaurant
