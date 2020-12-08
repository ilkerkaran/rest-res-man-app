/* eslint-disable no-unreachable */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import * as actions from '../store/actions/actionCreators'
import SetRestaurant from './SetRestaurant'

const Restaurant = () => {
  const dispatch = useDispatch()
  const { restaurant, loading } = useSelector((state) => state.restaurant)
  useEffect(() => {
    dispatch(actions.getRestaurant)
  }, [])
  return restaurant
    ? <h1>Restaurant view</h1>
    : <SetRestaurant />
}

export default Restaurant
