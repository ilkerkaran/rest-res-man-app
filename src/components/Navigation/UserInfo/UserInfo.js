import React, { useContext } from 'react'

import './UserInfo.css'

const UserInfo = () => {
  const user = 'kek'
  return (user
    ? (
      <div className="UserInfo">
        <p>
          Welcome,
          {' '}
          {user.username}
        </p>
      </div>
    ) : null
  )
}

export default UserInfo
