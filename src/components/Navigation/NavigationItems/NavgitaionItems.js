import React, { useContext } from 'react'
import NavItem from './NavigationItem/NavigationItem'
import './NavigationItems.css'
import UserInfo from '../UserInfo/UserInfo'
import Logo from '../../Logo/Logo'

const NavigaitonItems = () => {
  const user = 'a'
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
  if (user && user.role) { navContent = securedNavItems } else { navContent = anonymousNavItems }

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
