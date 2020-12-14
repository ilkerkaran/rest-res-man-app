import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Form from '../components/UI/Form/Form'
import Spinner from '../components/UI/Spinner/Spinner'
import {
  getRestaurant,
  setRestaurant
} from '../store/actions/actionCreators'

const SetRestaurant = () => {
  const { currentUser, loading: userLoading } = useSelector((state) => state.user)
  const { restaurant, loading: restaurantLoading } = useSelector((state) => state.restaurant)

  const dispatch = useDispatch()
  const formInputConfig = [
    {
      inputType: 'text',
      inputName: 'restaurant',
      isRequired: true
    }
  ]

  const onSubmitClick = (formData) => {
    dispatch(setRestaurant(currentUser.email, formData.restaurant))
  }

  useEffect(() => {
    if (!restaurant) { dispatch(getRestaurant(currentUser.email)) }
  }, [])

  const form = restaurantLoading ? <Spinner /> : (
    <div className="ContactData">
      <Form
        title="Please Enter Your Restaurant Name"
        submitButtonText="Continue"
        inputConfigs={formInputConfig}
        onSubmit={onSubmitClick}
        disabled={userLoading || restaurantLoading}
      />
      <br />
    </div>
  )
  return !restaurant ? form : <Redirect to="/restaurant" />
}

export default SetRestaurant
