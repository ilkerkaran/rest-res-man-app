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

const Datatable = ({
  title, data, columns, onRowAdd, onRowUpdate, onRowDelete
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

export default Datatable

Datatable.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  onRowAdd: PropTypes.func.isRequired,
  onRowUpdate: PropTypes.func.isRequired,
  onRowDelete: PropTypes.func.isRequired
}
