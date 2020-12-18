import React, { useState } from 'react'
import {
  Box, Dialog, DialogContent, IconButton, makeStyles
} from '@material-ui/core'
import { Check as CheckIcon } from '@material-ui/icons'
import PropTypes from 'prop-types'

import { useDispatch, useSelector } from 'react-redux'
import ReservationFilter from './ReservationFilter'
import ReservationDatatable from './ReservationDatatable'
import { setReservationFilter } from '../../store/actions/actionCreators'

const useStyles = makeStyles({
  dialog: {
    maxWidth: '80%',
    width: '80%',
    height: '80%',
    margin: 'auto'
  }
})
const ReservationDialog = ({
  open,
  onClose,
  onRowAdd,
  onRowUpdate,
  onRowDelete
}) => {
  const { reservations, reservationFilter, selectedTable } = useSelector((state) => state.restaurant)

  const dispatch = useDispatch()
  const classes = useStyles()
  reservations.sort((x, y) => x.date - y.date || +x.time - +y.time)

  const handleFilterChange = (e, val) => {
    dispatch(setReservationFilter(val))
  }

  const currentDate = new Date().getTime()
  const filteredData = reservations.filter((r) => selectedTable && r.tableId == selectedTable.id
  && ((r.date < currentDate && reservationFilter == -1) // past
  || (r.date >= currentDate && reservationFilter == 1) // future
  || reservationFilter == 0)) // all

  return (
    <Dialog
      fullScreen
      className={classes.dialog}
      open={open || false}
      onClose={onClose}
    >
      <DialogContent>
        <ReservationFilter
          onChange={handleFilterChange}
          value={reservationFilter}
        />
        <ReservationDatatable
          data={filteredData}
          title={`#${selectedTable && selectedTable.id} Reservations`}
          onRowAdd={onRowAdd}
          onRowUpdate={onRowUpdate}
          onRowDelete={onRowDelete}
        />
        <Box display="flex" justifyContent="flex-end">
          <IconButton onClick={onClose}>
            <CheckIcon />
          </IconButton>
        </Box>

      </DialogContent>
    </Dialog>
  )
}

export default ReservationDialog

ReservationDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onRowAdd: PropTypes.func,
  onRowUpdate: PropTypes.func,
  onRowDelete: PropTypes.func
}

ReservationDialog.defaultProps = {
  onClose: null,
  open: false,
  onRowAdd: null,
  onRowUpdate: null,
  onRowDelete: null
}
