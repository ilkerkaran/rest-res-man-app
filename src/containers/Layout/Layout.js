/* eslint-disable react/prop-types */
/* eslint-disable no-useless-computed-key */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'

const useStyles = makeStyles({
  app: {
    width: '100%',
    margin: 0,
    textAlign: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'

  },
  content: {
    flex: 1,
    margin: 'auto',
    marginTop: '100px',
    width: '100%',
    paddingBottom: '10%',
    textAlign: 'center',
    ['@media screen and (min-width: 1200px)']: {
      width: '1080px'
    },
    ['@media screen and (min-device-width: 801px) and (max-device-width: 1200px)']: {
      width: '800px'
    },
    ['@media screen and (min-device-width: 481px) and (max-device-width: 800px)']: {
      width: '95%'
    }
  }
})

const Layout = ({ children }) => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.app}>
        <Toolbar />
        <main className={classes.content}>{children}</main>
      </div>
    </>
  )
}

export default Layout
