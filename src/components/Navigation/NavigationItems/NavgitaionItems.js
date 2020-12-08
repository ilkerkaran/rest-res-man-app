import React, { useContext } from 'react'
import { useSelector } from 'react-redux'

import NavItem from './NavigationItem/NavigationItem'
import './NavigationItems.css'
import UserInfo from '../UserInfo/UserInfo'
import Logo from '../../Logo/Logo'

const NavigaitonItems = () => {
  const { currentUser } = useSelector((state) => state.user)
  const securedNavItems = (
    <>
      <NavItem link="/restaurant">Restaurant</NavItem>
      <NavItem link="/logout">Logout</NavItem>
    </>
  )
  const anonymousNavItems = (
    <>
      <NavItem link="/login">Login</NavItem>
      <NavItem link="/signup">Sign Up</NavItem>
    </>
  )
  let navContent
  if (currentUser) { navContent = securedNavItems } else { navContent = anonymousNavItems }

  return (
    <>
      <Logo />
      <ul className="NavigationItems">
        {navContent}
      </ul>
      <UserInfo />
    </>
  )
}

export default NavigaitonItems
