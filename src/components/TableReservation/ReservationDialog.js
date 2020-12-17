import React, { useState } from 'react'
import {
  Box, Dialog, DialogContent, IconButton, makeStyles
} from '@material-ui/core'
import { Check as CheckIcon } from '@material-ui/icons'
import PropTypes from 'prop-types'

import ReservationFilter from './ReservationFilter'
import ReservationDatatable from './ReservationDatatable'

const useStyles = makeStyles({
  dialog: {
    maxWidth: '80%',
    width: '80%',
    height: '80%',
    margin: 'auto'
  }
})
const ReservationDialog = ({
  tableNo,
  data,
  open,
  onClose,
  onRowAdd,
  onRowUpdate,
  onRowDelete
}) => {
  const [filter, setFilter] = useState()
  const classes = useStyles()
  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }

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
          value={filter}
        />
        <ReservationDatatable
          data={data}
          title={`${tableNo} Reservations`}
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
  data: PropTypes.array,
  tableNo: PropTypes.string.isRequired,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onRowAdd: PropTypes.func,
  onRowUpdate: PropTypes.func,
  onRowDelete: PropTypes.func
}

ReservationDialog.defaultProps = {
  data: [],
  onClose: null,
  open: false,
  onRowAdd: null,
  onRowUpdate: null,
  onRowDelete: null
}
