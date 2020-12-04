import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { store, persistor } from './store'

const app = (
  <Provider store={store}>
    <BrowserRouter basename={process.env.BASE_PATH}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
