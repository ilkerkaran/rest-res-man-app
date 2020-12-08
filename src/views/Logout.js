import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import { signOutStart } from '../store/actions/actionCreators'
import Spinner from '../components/UI/Spinner/Spinner'

const Logout = () => {
  const { currentUser } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const history = useHistory()
  if (!currentUser) history.push('/login')
  useEffect(() => {
    dispatch(signOutStart())
  }, [])

  return <Redirect to="/login" />
}

export default Logout
