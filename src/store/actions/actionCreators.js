/* eslint-disable import/prefer-default-export */
import * as actionTypes from './actionTypes'
import { getRestaurant as getRestaurantService } from '../../services/restaurantService'
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
  dispatch(getRestaurantByUsernameStart())
  {
    const collectionRef = firestore.collection('restaurants').where('email', '==', email)
    dispatch(getRestaurantByUsernameStart())

    collectionRef
      .get()
      .then((snapshot) => {
        const restDoc = snapshot.docs[0]
        console.log('this is restDoc', restDoc)
        if (!restDoc) { dispatch(getRestaurantByUsernameSuccess()) }
        dispatch(getRestaurantByUsernameSuccess(restDoc.data()))
      })
      .catch((error) => dispatch(getRestaurantByUsernameFail(error.message)))
  }
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
