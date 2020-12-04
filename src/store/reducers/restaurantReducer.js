import * as actionTypes from '../actions/actionTypes'

const initialState = {
  restaurant: undefined
}

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_RESTAURANT_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.GET_RESTAURANT_SUCCESS:
      return {
        ...state,
        restaurant: action.payload.restaurant,
        loading: false
      }
    case actionTypes.GET_RESTAURANT_FAIL:
      return {
        ...state,
        error: action.payload.error,
        loading: false
      }
    case actionTypes.POST_RESTAURANT_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.POST_RESTAURANT_SUCCESS:
      return {
        ...state,
        restaurant: action.payload.restaurant,
        loading: false
      }
    case actionTypes.POST_RESTAURANT_FAIL:
      return {
        ...state,
        error: action.payload.error,
        loading: false
      }
    default:
      return state
  }
}

export default restaurantReducer