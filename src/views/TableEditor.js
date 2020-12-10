import React from 'react'
import { useSelector } from 'react-redux'
import DraggableGrid from '../components/UI/Drag&Drop/DraggableGrid'

const TableEditor = () => {
  const { tableLayout } = useSelector((state) => state.tables)
  return <DraggableGrid tables={tableLayout} />
}

export default TableEditor
