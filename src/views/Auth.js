import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import Form from '../components/UI/Form/Form'
import Spinner from '../components/UI/Spinner/Spinner'
import withErrorHandler from '../hoc/withErrorHandler'
import axios from '../axios'
import {
  emailSignInStart, signUpStart
} from '../store/actions/actionCreators'

const auth = ({
  isSignUp
}) => {
  // state
  const {
    loading,
    currentUser,
    redirectAfterSignin
  } = useSelector((state) => state.user)

  // dispatch
  const dispatch = useDispatch()
  const onSignIn = (username,
    password) => dispatch(emailSignInStart({ email: username, password }))
  const onSignUp = (username,
    password) => dispatch(signUpStart({ email: username, password }))

  const formInputConfig = [
    {
      inputType: 'email',
      inputName: 'email',
      label: 'Username',
      isRequired: true
    },
    {
      inputType: 'password',
      inputName: 'password',
      label: 'Password',
      isRequired: true
    }
  ]

  const onSubmitClick = (formData) => {
    if (isSignUp) {
      onSignUp(formData.email, formData.password)
    } else {
      onSignIn(formData.email, formData.password)
    }
  }
  const signinForm = loading ? <Spinner /> : (
    <div className="ContactData">
      <Form
        title="Welcome"
        submitButtonText={isSignUp ? 'Sign Up!' : 'Login!'}
        inputConfigs={formInputConfig}
        onSubmit={onSubmitClick}
      />
      <br />
    </div>
  )

  const redirect = (<Redirect to="/restaurant" />)

  return (currentUser ? redirect : signinForm)
}

export default auth

auth.propTypes = {
  isSignUp: PropTypes.bool,
  loading: PropTypes.bool,
  onSignIn: PropTypes.func,
  onSignUp: PropTypes.func,
  token: PropTypes.string,
  redirectTo: PropTypes.string
}
