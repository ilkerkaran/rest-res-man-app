import restaurantReducer from './restaurantReducer'
import tableReducer from './tableReducer'
import authReducer from './authReducer'

const initialState = {
}

const reducer = (state = initialState, action) => ({
  rest: restaurantReducer(state.rest, action),
  tables: tableReducer(state.tables, action),
  auth: authReducer(state.auth, action)
})

export default reducer
