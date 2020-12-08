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
const Password = ({ className, inputConfig }) => {
  const classes = useStyles(); return (
    <div className={className}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="component-outlined">{inputConfig.label}</InputLabel>
        <OutlinedInput
          name={inputConfig.inputName}
          type="password"
          id={inputConfig.inputName}
          onChange={inputConfig.onChange}
          label={inputConfig.inputName}
          inputRef={inputConfig.isRequired ? inputConfig.register({
            required: `${inputConfig.label} is required`,
            pattern: {
              value: /[0-9a-zA-Z]{6,}/,
              message: 'invalid password'
            }
          }) : inputConfig.register}
        />
      </FormControl>

      <div style={{ color: 'darkred' }}>
        {inputConfig.errors[inputConfig.inputName]
      && inputConfig.errors[inputConfig.inputName].message}
      </div>
    </div>
  )
}

export default Password

Password.propTypes = {
  className: PropTypes.string,
  ...inputConfigTypes
}

Password.defaultProps = {
  className: ''
}
