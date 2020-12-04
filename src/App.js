/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import React, { useEffect, Suspense } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Box } from '@material-ui/core'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import * as actions from './store/actions/actionCreators'
import Restaurant from './views/Restaurant'
import EnterRestaurant from './views/EnterRestaurant'
import Layout from './containers/Layout/Layout'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#337ab7'
    }
  }
})
const Auth = React.lazy(() => import('./views/Auth'))
function App() {
  const { currentUser } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const checkIsAuthenticated = () => dispatch(actions.checkIsAuthenticated())
  const securedRoutes = (
    <>
      <Route path="/set-restaurant" exact component={EnterRestaurant} />
      <Route path="/restaurant" exact component={Restaurant} />
    </>
  )

  const anonymousRoutes = (
    <Suspense fallback={<div>Loading...</div>}>
      <Route path="/login" render={() => <Auth isSignUp={false} />} />
      <Route path="/signup" render={() => <Auth isSignUp />} />
    </Suspense>
  )
  useEffect(() => {
    checkIsAuthenticated()
  }, [])
  return (
    <MuiThemeProvider theme={theme}>
      <Layout>
        {currentUser ? securedRoutes : null}
        {anonymousRoutes}
      </Layout>
    </MuiThemeProvider>

  )
}

export default App

App.propTypes = {
  isAuthenticated: PropTypes.bool,
  checkIsAuthenticated: PropTypes.func
}
