import React from 'react'
import Card from '../card/card'
import useFetch from '../../hooks/useFetch'

const User = ({ userId }) => {
  const [user] = useFetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`)

  return (
    <Card>
      {user ? (
        <div>
          <h3>{user.username}</h3>
          <p>{user.name}</p>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </Card>
  )
}

export default User
