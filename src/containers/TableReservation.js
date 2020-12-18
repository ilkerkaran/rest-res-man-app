/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import { Box, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ReservationDialog from '../components/TableReservation/ReservationDialog'
import {
  closeReservationsDialog, openReservationsDialog, persistReservations, persistReservationsFail, selectTable
} from '../store/actions/actionCreators'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    border: 'solid 0.1px #EAF5FD',
    borderRadius: '4px 4px 0 0',
    maxWidth: '984px',
    backgroundColor: 'white',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: theme.spacing(-1),
    marginRight: theme.spacing(-1)
  },
  itemContainer: {
    padding: '2px'
  },
  item: {
    width: '60px',
    height: '80px',
    background: '#ffffff',
    border: '0.5px solid rgba(0, 0, 0, 0.05)',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
    zIndex: 1,
    cursor: 'pointer'
  }
}))

const TableReservation = () => {
  const classes = useStyles()

  const { currentUser } = useSelector((state) => state.user)
  const {
    tables, reservations, isReservationDialogOpen, selectedTable
  } = useSelector((state) => state.restaurant)
  const dispatch = useDispatch()

  const handleTableClick = (index) => {
    dispatch(selectTable(tables[index]))
    dispatch(openReservationsDialog())
  }

  const handleDialogClose = () => {
    resetState()
  }

  const resetState = () => {
    dispatch(closeReservationsDialog())
    dispatch(selectTable())
  }

  const handleRowAdd = (data) => new Promise((resolve, reject) => {
    data.date.setHours(+data.time, 0, 0, 0)
    const isDateOccupied = reservations
      .find((r) => r.tableId == selectedTable.id
      && r.time == data.time
      && r.date == data.date.getTime())

    if (isDateOccupied) {
      const err = new Error('The table is reserved for selected date and time')
      dispatch(persistReservationsFail(err))
      return reject(err)
    }
    const newData = [...reservations, {
      ...data,
      date: data.date.getTime(),
      tableId: selectedTable.id
    }]
    console.log('handleRowAdd triggered', data, reservations)
    dispatch(persistReservations(currentUser.email, newData))
    return resolve(newData)
  })

  const handleRowUpdate = (newData, oldData) => new Promise((resolve, reject) => {
    const indexToBeUpdated = reservations
      .findIndex((r) => r.time == oldData.time
          && (r.date) == oldData.date.getTime())

    const arr = [...reservations]
    arr[indexToBeUpdated] = {
      ...newData,
      date: arr[indexToBeUpdated].date,
      time: arr[indexToBeUpdated].time
    }
    dispatch(persistReservations(currentUser.email, arr))
    return resolve()
  })
  const handleRowDelete = (oldData) => new Promise((resolve, reject) => {
    const indexToBeRemoved = reservations
      .findIndex((r) => r.time == oldData.time
        && (r.date) == oldData.date.getTime())
    const arr = [...reservations]
    arr.splice(indexToBeRemoved, 1)

    dispatch(persistReservations(currentUser.email, arr))
    return resolve()
  })
  if (!tables) return null
  return (
    <>
      <Box className={classes.container}>
        {tables.map((item, idx) => (
          <Box
            className={classes.itemContainer}
            key={idx.toString()}
          >
            <Box
              className={classes.item}
              onClick={item.id ? (() => handleTableClick(idx)) : undefined}
            >
              {!!item.id && (
              <>
                <p>
                  #
                  {item.id}
                </p>
                <p>
                  {item.seatCount}
                </p>
              </>
              )}

            </Box>
          </Box>

        ))}
      </Box>
      <ReservationDialog
        table={selectedTable && selectedTable.id}
        data={reservations}
        open={isReservationDialogOpen}
        onClose={handleDialogClose}
        onRowAdd={handleRowAdd}
        onRowUpdate={handleRowUpdate}
        onRowDelete={handleRowDelete}
      />
    </>
  )
}

export default TableReservation
