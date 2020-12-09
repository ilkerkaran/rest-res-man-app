/* eslint-disable no-nested-ternary */
/* eslint-disable no-unreachable */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Spinner from '../components/UI/Spinner/Spinner'

import * as actions from '../store/actions/actionCreators'
import SetRestaurant from './SetRestaurant'

const Restaurant = () => {
  const dispatch = useDispatch()
  const { restaurant, loading: restaurantLoading } = useSelector((state) => state.restaurant)
  const { currentUser, loading: userLoading } = useSelector((state) => state.user)
  useEffect(() => {
    dispatch(actions.getRestaurant(currentUser.email))
  }, [])
  return userLoading || restaurantLoading ? <Spinner /> : restaurant
    ? <h1>Restaurant view</h1>
    : <SetRestaurant />
}

export default Restaurant
