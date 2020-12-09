import * as actionTypes from '../actions/actionTypes'

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  loading: false
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SIGN_UP_START:
      return {
        ...state,
        currentUser: null,
        error: null,
        loading: true
      }
    case actionTypes.EMAIL_SIGN_IN_START:
      return {
        ...state,
        currentUser: null,
        error: null,
        loading: true
      }
    case actionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
        loading: false
      }
    case actionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,

        loading: false
      }
    case actionTypes.CLEAR_USER_ERROR:
      return {
        ...state,
        error: null
      }
    case actionTypes.SIGN_IN_FAILURE:
    case actionTypes.SIGN_OUT_FAILURE:
    case actionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default:
      return state
  }
}

export default userReducer
