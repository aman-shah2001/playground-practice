import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const param=useParams()
  return (
    <div>
      i am a user {param.username}
    </div>
  )
}

export default User
