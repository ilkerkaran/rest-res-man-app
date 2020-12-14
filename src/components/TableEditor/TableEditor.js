/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import { Box, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { persistTables } from '../../store/actions/actionCreators'
import TableDialog from './TableDialog'

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

const TableEditor = () => {
  const classes = useStyles()

  const { currentUser } = useSelector((state) => state.user)
  const { tables, nextTableNumber } = useSelector((state) => state.restaurant)
  const dispatch = useDispatch()
  if (!tables) return null
  const [list, setList] = useState(tables)
  const [draggedItem, setDraggedItem] = useState(null)
  const [selectedTableIndex, setSelectedTableIndex] = useState()
  const [isDialogOpen, setIsDialogOpen] = useState()

  const onDragStartHandle = (e, index) => {
    setDraggedItem(list[index])
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/html', e.target.parentNode)
    e.dataTransfer.setDragImage(e.target.parentNode, 40, 60)
  }

  const onDragOverHandle = (e, index) => {
    e.preventDefault()
    const draggedOverItem = list[index]

    if (draggedOverItem === draggedItem) {
      return
    }

    const items = list.filter((item) => item !== draggedItem)

    items.splice(index, 0, draggedItem)
    setList(items)

    console.log('new tables to persist after reorder,', items)
  }

  const handleDragEnd = () => dispatch(persistTables(currentUser.email, list))

  const handleTableClick = (index) => {
    setSelectedTableIndex(index)
    setIsDialogOpen(true)
  }

  const handleDialogClose = () => {
    resetState()
  }

  const resetState = () => {
    setIsDialogOpen(false)
    setSelectedTableIndex()
  }

  const handleTableSubmit = (seatCountData) => {
    let newTable = { ...list[selectedTableIndex] }
    if (newTable) {
      newTable.seatCount = seatCountData.seatCount
    } else {
      newTable = { id: nextTableNumber, ...seatCountData }
    }
    newTable.id = newTable.id || nextTableNumber
    list[selectedTableIndex] = newTable
    console.log('new tables to persist after submit,', list)
    dispatch(persistTables(currentUser.email, list))
    resetState()
  }

  const handleTableDelete = () => {
    const newTable = { id: 0 }
    list[selectedTableIndex] = newTable
    console.log('new tables to persist after submit,', list)
    dispatch(persistTables(currentUser.email, list))
    resetState()
  }

  return (
    <>
      <Box className={classes.container}>
        {list.map((item, idx) => (
          <Box
            className={classes.itemContainer}
            key={idx.toString()}
            onDragOver={(e) => onDragOverHandle(e, idx)}
          >
            <div
              className={classes.item}
              draggable={!!item.id}
              onDragStart={(e) => onDragStartHandle(e, idx)}
              onDragEnd={handleDragEnd}
              onClick={(() => handleTableClick(idx))}
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

            </div>
          </Box>
        ))}
      </Box>
      <TableDialog
        open={isDialogOpen}
        onClose={handleDialogClose}
        initialValue={(selectedTableIndex || selectedTableIndex == 0)
          && list[selectedTableIndex]
          && list[selectedTableIndex].seatCount}
        onSubmit={handleTableSubmit}
        onDelete={handleTableDelete}
      />
    </>
  )
}

export default TableEditor
