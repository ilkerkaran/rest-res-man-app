import * as actionTypes from '../actions/actionTypes'

const initialState = {
  tableLayout: Array.from(Array(150), (x, i) => ({ pos: i }))
}

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TABLES_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.GET_TABLES_SUCCESS:
      return {
        ...state,
        tables: [...action.payload.tables],
        loading: false
      }
    case actionTypes.GET_TABLES_FAIL:
      return {
        ...state,
        error: action.payload.error,
        loading: false
      }
    case actionTypes.POST_TABLE_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.POST_TABLE_SUCCESS:
      return {
        ...state,
        tables: {
          ...state.tables,
          [state.payload.index]: {
            ...state.payload.table
          }
        },
        loading: false
      }
    case actionTypes.POST_TABLE_FAIL:
      return {
        ...state,
        error: action.payload.error,
        loading: false
      }
    case actionTypes.DELETE_TABLE_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.DELETE_TABLE_SUCCESS:
      return {
        ...state,
        tables: {
          ...state.tables,
          [state.payload.index]: undefined
        },
        loading: false
      }
    case actionTypes.DELETE_TABLE_FAIL:
      return {
        ...state,
        error: action.payload.error,
        loading: false
      }

    default:
      return state
  }
}

export default tableReducer
