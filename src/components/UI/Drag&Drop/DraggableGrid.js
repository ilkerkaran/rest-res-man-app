/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import { Box, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    border: 'solid 0.1px #EAF5FD',
    borderRadius: '4px 4px 0 0',
    maxWidth: '932px',
    backgroundColor: 'white',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: theme.spacing(-1),
    marginRight: theme.spacing(-1)
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

const DraggableGrid = ({ tables }) => {
  const classes = useStyles()
  console.log('DraggableGrid', tables)
  if (!tables) return null
  const [list, setList] = useState(tables)
  const [draggedItem, setDraggedItem] = useState(null)

  function onDragStartHandle(e, index) {
    setDraggedItem(list[index])
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/html', e.target.parentNode)
    e.dataTransfer.setDragImage(e.target.parentNode, 40, 60)
  }

  function onDragOverHandle(e, index) {
    e.preventDefault()
    const draggedOverItem = list[index]

    if (draggedOverItem === draggedItem) {
      return
    }

    const items = list.filter((item) => item !== draggedItem)

    items.splice(index, 0, draggedItem)
    setList(items)
  }

  list.sort((x, y) => x.pos > y.pos)
  return (

    <Box className={classes.container}>
      {list.map((item, idx) => (
        <Box
          key={item.pos}
          onDragOver={(e) => onDragOverHandle(e, idx)}
        >
          <div
            className={classes.item}
            draggable={item.id > 0 || true}
            onDragStart={(e) => onDragStartHandle(e, idx)}
            onClick={() => console.log('clicked')}
          >
            <p>{item.pos}</p>
          </div>
        </Box>
      ))}
    </Box>

  )
}

export default DraggableGrid
