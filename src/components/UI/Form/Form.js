import React from 'react'
import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'
import { Box, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { inputConfigsTypes } from '../../../propTypes/types'
import Select from './FormInputs/FormSelectInput'
import Text from './FormInputs/FormTextInput'
import TextArea from './FormInputs/FormTextAreaInput'
import Password from './FormInputs/FormPasswordInput'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
    textAlign: 'center',
    paddingTop: '10px',
    paddingBottom: '10px',
    width: '100%',
    ['@media (min-width:800px)']: { // eslint-disable-line no-useless-computed-key
      width: '500px'
    }
  },
  form: {
    width: '80% ',
    display: 'inline-block',
    margin: 'auto'
  },
  actions: {
    width: '80%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  formInput: {
    width: '100%',
    margin: '20px auto',
    textAlign: 'center',
    boxSizing: 'border-box'
  }
})

const Form = ({
  title, onSubmit, inputConfigs, submitButtonText, onDiscard, discardButtonText, disabled
}) => {
  const {
    register, handleSubmit, errors, formState, control
  } = useForm({ mode: 'onBlur', reValidateMode: 'onBlur' })

  const classes = useStyles()
  const onSubmitHandler = (data) => {
    onSubmit(data)
  }
  const formInputs = inputConfigs && inputConfigs.map((conf) => {
    switch (conf.inputType) {
      case 'text':
        return (
          <Text
            className={classes.formInput}
            key={conf.inputName}
            inputConfig={{ ...conf, register, errors }}
          />
        )
      case 'password':
        return (
          <Password
            className="Input Password"
            key={conf.inputName}
            inputConfig={{ ...conf, register, errors }}
          />
        )
      case 'select':
        return (
          <Select
            className="Input Select"
            key={conf.inputName}
            control={control}
            inputConfig={{ ...conf, register, errors }}
          />
        )
      case 'textArea':
        return (
          <TextArea
            className="Input TextArea"
            key={conf.inputName}
            inputConfig={{ ...conf, register, errors }}
          />
        )
      default:
        return (
          <Text
            className="Input Text"
            key={conf.inputName}
            inputConfig={{ ...conf, register }}
          />
        )
    }
  })
  return (
    <Box className={classes.root}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <form
        className={classes.form}
        onSubmit={handleSubmit(onSubmitHandler)}
        data-testid="form"
      >
        {formInputs}
        <Box className={classes.actions}>
          {onDiscard
            ? (
              <Button
                variant="contained"
                color="secondary"
                type="button"
                onClick={onDiscard}
              >
                {discardButtonText || 'Discard'}
              </Button>
            )
            : null}
          <Button
            color="primary"
            variant="contained"
            type="submit"
            disabled={disabled}
          >
            {submitButtonText || 'Submit'}
          </Button>
        </Box>
      </form>
    </Box>
  )
}

export default Form

Form.propTypes = {
  title: PropTypes.string.isRequired,
  submitButtonText: PropTypes.string.isRequired,
  ...inputConfigsTypes,
  onSubmit: PropTypes.func.isRequired,
  onDiscard: PropTypes.func,
  discardButtonText: PropTypes.string,
  disabled: PropTypes.bool
}

Form.defaultProps = {
  onDiscard: null,
  discardButtonText: null,
  disabled: false
}
