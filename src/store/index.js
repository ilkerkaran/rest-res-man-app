import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [thunk, sagaMiddleware]

// redux devtools configuration
const composeEnhancers = process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() === 'production'
  // eslint-disable-next-line no-underscore-dangle
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : null || compose

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)))

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

export default { store, persistStore }
