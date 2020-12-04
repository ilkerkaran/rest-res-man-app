import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { logout as logoutAction } from '../store/actions/actionCreators'

const logout = () => {
  const dispatch = useDispatch()
  const onLogout = () => dispatch(logoutAction())

  useEffect(() => {
  }, [])

  onLogout()
  return (<Redirect to="/restaurant" />)
}

export default logout

logout.propTypes = {
  onLogout: PropTypes.func

}
