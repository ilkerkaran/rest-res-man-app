/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Modal from '../components/UI/Modal/Modal'
import { clearRestaurantError, clearUserError } from '../store/actions/actionCreators'

const ErrorHandler = ({ children }) => {
  const { restaurant, user } = useSelector((state) => state)
  const dispatch = useDispatch()
  const errors = []
  if (restaurant.error) errors.push(restaurant.error)
  if (user.error) errors.push(user.error)
  if (restaurant.error) errors.push(restaurant.error)

  const handleClose = () => {
    dispatch(clearRestaurantError())
    dispatch(clearUserError())
  }
  console.log('errors:', errors)
  return (
    <>
      <Modal
        onClose={handleClose}
        show={!!errors.length > 0}
      >
        {errors.map((error, i) => <p key={i}>{error.message}</p>)}
      </Modal>
      {children}
    </>
  )
}

export default ErrorHandler
