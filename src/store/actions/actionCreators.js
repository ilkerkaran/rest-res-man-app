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

export const clearRestaurant = () => ({
  type: actionTypes.CLEAR_RESTAURANT
})

export const setRestaurant = (email, restaurantName) => (dispatch) => {
  dispatch(setRestaurantStart())
  const rest = { email, name: restaurantName, tables: null }
  const collectionRef = firestore.collection('restaurants').doc(email)
  collectionRef
    .set(rest)
    .then(() => {
      dispatch(setRestaurantSuccess(rest))
    })
    .catch((error) => dispatch(setRestaurantFail(error.message)))
}

const persistTablesStart = () => ({
  type: actionTypes.PERSIST_TABLES_START
})

export const persistTablesSuccess = (tables) => ({
  type: actionTypes.PERSIST_TABLES_SUCCESS,
  payload: { ...tables }
})

const persistTablesFail = (error) => ({
  type: actionTypes.PERSIST_TABLES_FAIL,
  payload: { error }
})

export const persistTables = (email, tables) => (dispatch) => {
  dispatch(persistTablesStart())
  const collectionRef = firestore.collection('restaurants').doc(email)
  collectionRef
    .set({ tables }, { merge: true })
    .then(() => {
      dispatch(persistTablesSuccess({ tables }))
    })
    .catch((error) => dispatch(persistTablesFail(error.message)))
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

export const clearUserError = () => ({
  type: actionTypes.CLEAR_USER_ERROR
})

export const clearRestaurantError = () => ({
  type: actionTypes.CLEAR_RESTAURANT_ERROR
})

const persistReservationsStart = () => ({
  type: actionTypes.PERSIST_RESERVATIONS_START
})

export const persistReservationsSuccess = (reservaitons) => ({
  type: actionTypes.PERSIST_RESERVATIONS_SUCCESS,
  payload: { ...reservaitons }
})

export const persistReservationsFail = (error) => ({
  type: actionTypes.PERSIST_RESERVATIONS_FAIL,
  payload: { error }
})

export const persistReservations = (email, reservations) => (dispatch) => {
  const collectionRef = firestore.collection('restaurants').doc(email)
  dispatch(persistReservationsStart())
  collectionRef
    .set({ reservations }, { merge: true })
    .then(() => {
      dispatch(persistReservationsSuccess({ reservations }))
    })
    .catch((error) => dispatch(persistReservationsFail(error.message)))
}
