/* eslint-disable import/prefer-default-export */
import * as actionTypes from './actionTypes'
import { firestore } from '../../firebase/firebase.utils'

const getRestaurantByUsernameStart = () => ({
  type: actionTypes.GET_RESTAURANT_START
})

const getRestaurantByUsernameSuccess = (rest) => ({
  type: actionTypes.GET_RESTAURANT_SUCCESS,
  payload: { restaurant: rest && { ...rest } }
})

const getRestaurantByUsernameFail = (error) => ({
  type: actionTypes.GET_RESTAURANT_FAIL,
  payload: { error }
})

export const getRestaurant = (email) => (dispatch) => {
  const collectionRef = firestore.collection('restaurants').doc(email)
  dispatch(getRestaurantByUsernameStart())
  collectionRef
    .get()
    .then((data) => {
      console.log('this is restDoc', data.data())

      if (data.exists) {
        dispatch(getRestaurantByUsernameSuccess(data.data()))
      } else { dispatch(getRestaurantByUsernameSuccess()) }
    })
    .catch((error) => dispatch(getRestaurantByUsernameFail(error.message)))
}

const setRestaurantStart = () => ({
  type: actionTypes.POST_RESTAURANT_START
})

export const setRestaurantSuccess = (rest) => ({
  type: actionTypes.POST_RESTAURANT_SUCCESS,
  payload: { restaurant: rest && { ...rest } }
})

const setRestaurantFail = (error) => ({
  type: actionTypes.POST_RESTAURANT_FAIL,
  payload: { error }
})

export const setRestaurant = (email, restaurantName) => (dispatch) => {
  dispatch(setRestaurantStart())
  const rest = { email, name: restaurantName }
  const collectionRef = firestore.collection('restaurants').doc(email)
  collectionRef
    .set(rest)
    .then(() => {
      dispatch(setRestaurantSuccess(rest))
    })
    .catch((error) => dispatch(setRestaurantFail(error.message)))
}

export const signInSuccess = (user) => ({
  type: actionTypes.SIGN_IN_SUCCESS,
  payload: user
})

export const signInFailure = (error) => ({
  type: actionTypes.SIGN_IN_FAILURE,
  payload: error
})

export const emailSignInStart = (emailAndPassword) => ({
  type: actionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
})

export const checkUserSession = () => ({
  type: actionTypes.CHECK_USER_SESSION
})

export const signOutStart = () => ({
  type: actionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
  type: actionTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure = (error) => ({
  type: actionTypes.SIGN_OUT_FAILURE,
  payload: error
})

export const signUpStart = (userCredentials) => ({
  type: actionTypes.SIGN_UP_START,
  payload: userCredentials
})

export const signUpSuccess = ({ user, additionalData }) => ({
  type: actionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData }
})

export const signUpFailure = (error) => ({
  type: actionTypes.SIGN_UP_FAILURE,
  payload: error
})
