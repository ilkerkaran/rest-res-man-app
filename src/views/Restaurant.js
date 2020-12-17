/* eslint-disable no-nested-ternary */
/* eslint-disable no-unreachable */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Spinner from '../components/UI/Spinner/Spinner'
import * as actions from '../store/actions/actionCreators'
import SetRestaurant from './SetRestaurant'
import TableEditor from './TableEditor'
import TableSwitch from '../components/UI/TableSwitch/TableSwitch'
import TableReservation from '../containers/TableReservation'

const Restaurant = () => {
  const dispatch = useDispatch()
  const { restaurant, loading: restaurantLoading } = useSelector((state) => state.restaurant)
  const { currentUser, loading: userLoading } = useSelector((state) => state.user)
  const [layoutSwitch, setLayoutSwitch] = useState()

  const handleSwitchChange = () => {
    setLayoutSwitch((prev) => !prev)
  }
  useEffect(() => {
    dispatch(actions.getRestaurant(currentUser.email))
  }, [])
  return userLoading || restaurantLoading ? <Spinner /> : restaurant
    ? (
      <>
        <TableSwitch
          checked={layoutSwitch}
          onChange={handleSwitchChange}
        />
        {layoutSwitch
          ? <TableReservation />
          : <TableEditor />}

      </>
    )
    : <SetRestaurant />
}

export default Restaurant
