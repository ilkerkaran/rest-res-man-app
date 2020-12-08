import React from 'react'
import PropTypes from 'prop-types'
import { FormControl, InputLabel, OutlinedInput } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { inputConfigTypes } from '../../../../propTypes/types'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '80%'
  }
}))

const Text = ({ className, inputConfig }) => {
  const classes = useStyles()
  return (
    <div className={className}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="component-outlined">{inputConfig.label}</InputLabel>
        <OutlinedInput
          name={inputConfig.inputName}
          type="text"
          id={inputConfig.inputName}
          onChange={inputConfig.onChange}
          multiline={inputConfig.multiline}
          rows={inputConfig.multiline ? 4 : null}
          label={inputConfig.label}
          defaultValue={inputConfig.value}
          inputRef={inputConfig.isRequired ? inputConfig.register({ required: `${inputConfig.label} is required` }) : inputConfig.register}
        />
      </FormControl>
      <div style={{ color: 'darkred' }}>
        {inputConfig.errors && inputConfig.errors[inputConfig.inputName]
        && inputConfig.errors[inputConfig.inputName].message}
      </div>

    </div>
  )
}

export default Text

Text.propTypes = {
  className: PropTypes.string,
  ...inputConfigTypes
}

Text.defaultProps = {
  className: ''
}
