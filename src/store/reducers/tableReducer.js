import * as actionTypes from '../actions/actionTypes'

const initialState = {
  tableLayout: Array.from(Array(150), (x, i) => ({ pos: i }))
}

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default tableReducer
