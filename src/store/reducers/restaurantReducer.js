/* eslint-disable no-case-declarations */
import * as actionTypes from '../actions/actionTypes'

const initialState = {
  restaurant: undefined,
  tables: Array.from(Array(150), () => ({ id: 0 })),
  nextTableNumber: 1,
  reservations: [],
  isReservationDialogOpen: false,
  reservationFilter: 0,
  selectedTable: undefined,
  tableLayoutSwitch: false,
  isTried: false
}

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_RESTAURANT:
      return {
        ...initialState
      }
    case actionTypes.CLEAR_RESTAURANT_ERROR:
      return {
        ...state,
        error: null
      }
    case actionTypes.GET_RESTAURANT_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.GET_RESTAURANT_SUCCESS:
      if (!action.payload.restaurant) {
        return {
          ...state,
          loading: false
        }
      }
      const t = action.payload.restaurant.tables
      const r = action.payload.restaurant.reservations
      return {
        ...state,
        restaurant: action.payload.restaurant.name,
        tables: t || [...state.tables], // if rest has no table we want initial tables to stay in state,
        reservations: r || [],
        nextTableNumber: t ? t.reduce((a, b) => (a.id > b.id ? a : b)).id + 1 : 1,
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
        restaurant: action.payload.restaurant.name,
        loading: false
      }
    case actionTypes.POST_RESTAURANT_FAIL:
      return {
        ...state,
        restaurant: null,
        error: action.payload.error,
        loading: false
      }
    case actionTypes.PERSIST_TABLES_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.PERSIST_TABLES_SUCCESS:
      return {
        ...state,
        tables: action.payload.tables
          ? action.payload.tables
          : [...state.tables], // if rest has no table we want initial tables to stay in state
        nextTableNumber: state.nextTableNumber + 1,
        loading: false
      }
    case actionTypes.PERSIST_TABLES_FAIL:
      return {
        ...state,
        restaurant: null,
        error: action.payload.error,
        loading: false
      }
    case actionTypes.PERSIST_RESERVATIONS_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.PERSIST_RESERVATIONS_SUCCESS:
      return {
        ...state,
        reservations: action.payload.reservations,
        loading: false
      }
    case actionTypes.PERSIST_RESERVATIONS_FAIL:
      return {
        ...state,
        error: action.payload.error,
        loading: false
      }
    case actionTypes.OPEN_RESERVATIONS_DIALOG:
      return {
        ...state,
        isReservationDialogOpen: true
      }
    case actionTypes.CLOSE_RESERVATIONS_DIALOG:
      return {
        ...state,
        isReservationDialogOpen: false
      }
    case actionTypes.SET_RESERVATIONS_FILTER:
      return {
        ...state,
        reservationFilter: action.payload.filter
      }
    case actionTypes.SELECT_TABLE:
      return {
        ...state,
        selectedTable: action.payload.selectedTable
      }
    case actionTypes.TOGGLE_LAYOUT_SWITCH:
      return {
        ...state,
        tableLayoutSwitch: !state.tableLayoutSwitch
      }
    case actionTypes.MARK_TRIED:
      return {
        ...state,
        isTried: true
      }
    default:
      return state
  }
}

export default restaurantReducer
