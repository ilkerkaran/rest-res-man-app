/* eslint-disable no-unreachable */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import * as actions from '../store/actions/actionCreators'

const Restaurant = () => {
  const dispatch = useDispatch()
  const restaurant = useSelector((state) => state.restaurant)

  useEffect(() => {
    dispatch(actions.getRestaurant)
  }, [])
  console.log('restaurant view')
  return restaurant
    ? <h1>Restaurant view</h1>
    : <Redirect to="/set-restaurant" />
}

export default Restaurant
