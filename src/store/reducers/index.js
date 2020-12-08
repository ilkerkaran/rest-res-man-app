import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import restaurantReducer from './restaurantReducer'
import tableReducer from './tableReducer'
import userReducer from './userReducer'

const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = combineReducers({
  user: userReducer,
  restaurant: restaurantReducer,
  tables: tableReducer
})

export default persistReducer(persistConfig, rootReducer)
