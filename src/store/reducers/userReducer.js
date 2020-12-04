import * as actionTypes from '../actions/actionTypes'

const INITIAL_STATE = {
  currentUser: null,
  error: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null
      }
    case actionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      }
    case actionTypes.LOGIN_FAILURE:
    case actionTypes.SIGN_OUT_FAILURE:
    case actionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

export default userReducer
