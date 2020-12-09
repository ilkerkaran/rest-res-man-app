import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import './UserInfo.css'

const UserInfo = () => {
  const { currentUser } = useSelector((state) => state.user)
  return (currentUser
    ? (
      <div className="UserInfo">
        <p>
          Welcome,
          {' '}
          {currentUser.displayName}
        </p>
      </div>
    ) : null
  )
}

export default UserInfo
