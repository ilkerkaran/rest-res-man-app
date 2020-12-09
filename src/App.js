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
import SetRestaurant from './views/SetRestaurant'
import Layout from './containers/Layout/Layout'
import logout from './views/Logout'

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
  const { restaurant } = useSelector((state) => state.restaurant)
  const dispatch = useDispatch()
  const checkIsAuthenticated = () => dispatch(actions.checkUserSession())
  const securedRoutes = (
    <>

      <Route path="/restaurant" exact component={Restaurant} />
      <Route path="/logout" exact component={logout} />
      <Redirect to="/restaurant" />
    </>
  )

  const anonymousRoutes = (
    <Suspense fallback={<div>Loading...</div>}>
      <Route path="/login" exact render={() => <Auth isSignUp={false} />} />
      <Route path="/signup" exact render={() => <Auth isSignUp />} />
    </Suspense>
  )
  useEffect(() => {
    checkIsAuthenticated()
  }, [])
  return (
    <MuiThemeProvider theme={theme}>
      <Layout>

        {currentUser ? securedRoutes : anonymousRoutes}
      </Layout>
    </MuiThemeProvider>

  )
}

export default App

App.propTypes = {
  isAuthenticated: PropTypes.bool,
  checkIsAuthenticated: PropTypes.func
}
