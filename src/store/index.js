import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [thunk, sagaMiddleware]

const composeEnhancers = typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  }) : compose

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares)
  // other store enhancers if any
)
export const store = createStore(rootReducer, enhancer)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

export default { store, persistStore }
