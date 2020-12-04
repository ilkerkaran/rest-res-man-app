/* eslint-disable import/prefer-default-export */
import * as actionTypes from './actionTypes'
import {
  login as loginRequest,
  signUp as signUpRequest
} from '../../services/authService'
import { getRestaurant as getRestaurantService } from '../../services/restaurantService'

const loginStart = () => ({
  type: actionTypes.LOGIN_START
})

const loginSuccess = (username, token, expiresAt) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: { username, token, expiresAt }
})
const loginFail = (error) => ({
  type: actionTypes.LOGIN_FAIL,
  payload: { error }
})

export const login = (username, password) => (dispatch) => {
  dispatch(loginStart())
  return loginRequest(username, password).then((response) => {
    dispatch(loginSuccess(username,
      response.data.idToken,
      new Date(new Date().getTime() + response.data.expiresIn * 1000)))
  }).catch((err) => {
    dispatch(loginFail(err))
  })
}

const signUpFail = (error) => ({
  type: actionTypes.SIGNUP_FAIL,
  payload: { error }
})

export const signUp = (username, password) => (dispatch) => {
  dispatch(signUpStart())
  return signUpRequest(username, password).then((response) => {
    dispatch(signUpSuccess(username,
      response.data.idToken,
      new Date(new Date().getTime() + response.data.expiresIn * 1000)))
  }).catch((err) => dispatch(signUpFail(err.response.data.error.message)))
}

export const logout = () => ({
  type: actionTypes.LOGOUT
})

export const checkIsAuthenticated = (currentRoute) => (dispatch) => {
  const expiresAt = localStorage.getItem('expiresAt')
  const now = new Date()
  if (expiresAt && (new Date(expiresAt) > new Date(now))) {
    dispatch(validateUser())
  } else {
    dispatch(invalidateUser(currentRoute || '/'))
  }
}

export const validateUser = () => ({
  type: actionTypes.VALIDATE_USER
})

export const invalidateUser = (currentRoute) => ({
  type: actionTypes.INVALIDATE_USER,
  payload: { redirectAfterSignin: currentRoute }
})

const getRestaurantByUsernameStart = () => ({
  type: actionTypes.GET_RESTAURANT_START
})

const getRestaurantByUsernameSuccess = (ingredientPrices) => ({
  type: actionTypes.GET_RESTAURANT_SUCCESS,
  payload: { ingredientPrices }
})

const getRestaurantByUsernameFail = (error) => ({
  type: actionTypes.GET_RESTAURANT_FAIL,
  payload: { error }
})

export const getRestaurant = () => (dispatch) => {
  dispatch(getRestaurantByUsernameStart())
  return getRestaurantService()
    .then((response) => {
      dispatch(getRestaurantByUsernameSuccess(response.data))
    })
    .catch((err) => { dispatch(getRestaurantByUsernameFail(err)) })
}

export const googleSignInStart = () => ({
  type: actionTypes.GOOGLE_SIGN_IN_START
})

export const signInSuccess = (user) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: user
})

export const signInFailure = (error) => ({
  type: actionTypes.LOGIN_FAIL,
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
  type: actionTypes.SIGN_OUT_FAIL,
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
  type: actionTypes.SIGN_UP_FAIL,
  payload: error
})
