/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef } from 'react'
import MaterialTable from 'material-table'
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

const ReservationDatatable = ({
  title, data, onRowAdd, onRowUpdate, onRowDelete
}) => {
  const tableIcons = {
    Add: forwardRef((props, ref) => (
      <AddBox
        {...props}
        ref={ref}
      />
    )),
    Check: forwardRef((props, ref) => (
      <Check
        {...props}
        ref={ref}
      />
    )),
    Clear: forwardRef((props, ref) => (
      <Clear
        {...props}
        ref={ref}
      />
    )),
    Delete: forwardRef((props, ref) => (
      <DeleteOutline
        {...props}
        ref={ref}
      />
    )),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight
        {...props}
        ref={ref}
      />
    )),
    Edit: forwardRef((props, ref) => (
      <Edit
        {...props}
        ref={ref}
      />
    )),
    Export: forwardRef((props, ref) => (
      <SaveAlt
        {...props}
        ref={ref}
      />
    )),
    Filter: forwardRef((props, ref) => (
      <FilterList
        {...props}
        ref={ref}
      />
    )),
    FirstPage: forwardRef((props, ref) => (
      <FirstPage
        {...props}
        ref={ref}
      />
    )),
    LastPage: forwardRef((props, ref) => (
      <LastPage
        {...props}
        ref={ref}
      />
    )),
    NextPage: forwardRef((props, ref) => (
      <ChevronRight
        {...props}
        ref={ref}
      />
    )),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft
        {...props}
        ref={ref}
      />
    )),
    ResetSearch: forwardRef((props, ref) => (
      <Clear
        {...props}
        ref={ref}
      />
    )),
    Search: forwardRef((props, ref) => (
      <Search
        {...props}
        ref={ref}
      />
    )),
    SortArrow: forwardRef((props, ref) => (
      <ArrowUpward
        {...props}
        ref={ref}
      />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove
        {...props}
        ref={ref}
      />
    )),
    ViewColumn: forwardRef((props, ref) => (
      <ViewColumn
        {...props}
        ref={ref}
      />
    ))
  }
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
  const options = {
    search: true
  }
  return (
    <MaterialTable
      icons={tableIcons}
      title={title}
      options={options}
      columns={columns}
      data={data.map((d) => ({ ...d, date: new Date(d.date) }))}
      editable={{
        onRowAdd,
        onRowUpdate,
        onRowDelete
      }}
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
