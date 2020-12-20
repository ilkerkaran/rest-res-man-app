/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import {
  AddBox,
  ArrowUpward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  Search,
  ViewColumn
} from '@material-ui/icons'

import Datatable from '../UI/Datatable/Datatable'

const ReservationDatatable = ({
  title, data, onRowAdd, onRowUpdate, onRowDelete
}) => {
  const columns = [
    {
      title: 'Date',
      field: 'date',
      type: 'date',
      editable: 'onAdd'
    },
    {
      title: 'Time',
      field: 'time',
      lookup: {
        0: '0:00',
        1: '1:00',
        2: '2:00',
        3: '3:00',
        4: '4:00',
        5: '5:00',
        6: '6:00',
        7: '7:00',
        8: '8:00',
        9: '9:00',
        10: '10:00',
        11: '11:00',
        12: '12:00',
        13: '13:00',
        14: '14:00',
        15: '15:00',
        16: '16:00',
        17: '17:00',
        18: '18:00',
        19: '19:00',
        20: '20:00',
        21: '21:00',
        22: '22:00',
        23: '23:00'
      },
      editable: 'onAdd'
    },
    { title: 'Customer Name', field: 'customerName' },
    { title: 'Contact Details', field: 'contactDetails' }
  ]
  return (
    <Datatable
      title={title}
      columns={columns}
      data={data.map((d) => ({ ...d, date: new Date(d.date) }))}
      onRowAdd={onRowAdd}
      onRowUpdate={onRowUpdate}
      onRowDelete={onRowDelete}
    />
  )
}

export default ReservationDatatable

ReservationDatatable.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  onRowAdd: PropTypes.func.isRequired,
  onRowUpdate: PropTypes.func.isRequired,
  onRowDelete: PropTypes.func.isRequired
}
