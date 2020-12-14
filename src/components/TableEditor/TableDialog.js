import React from 'react'
import {
  Box, Dialog, DialogContent, IconButton
} from '@material-ui/core'
import { Delete as DeleteIcon } from '@material-ui/icons'
import PropTypes from 'prop-types'

import Form from '../UI/Form/Form'

const TableDialog = ({
  open, onClose,
  initialValue,
  onSubmit,
  onDiscard,
  onDelete
}) => {
  const formInputConfig = [
    {
      inputType: 'number',
      inputName: 'seatCount',
      label: 'Number of Seats',
      value: initialValue,
      isRequired: true
    }
  ]
  return (
    <Dialog
      open={open || false}
      onClose={onClose}
    >
      <DialogContent>
        <Form
          title={initialValue ? 'Edit Table' : 'New Table'}
          submitButtonText={initialValue ? 'Save' : 'Create'}
          onDiscard={onDiscard}
          inputConfigs={formInputConfig}
          onSubmit={onSubmit}
        />
        {initialValue && (
        <Box display="flex" justifyContent="flex-end">
          <IconButton onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
        </Box>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default TableDialog

TableDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  onDiscard: PropTypes.func,
  initialValue: PropTypes.string,
  onDelete: PropTypes.func
}

TableDialog.defaultProps = {
  initialValue: '',
  onDiscard: null,
  onClose: null,
  open: false,
  onDelete: null
}
