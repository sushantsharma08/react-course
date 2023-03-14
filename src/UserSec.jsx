import React from 'react'
import {User} from './User'

export const UserSec = () => {

    const users = [
        { name: 'sushant', age: 20 },
        { name: 'ankit', age: 20 },
        { name: 'sparsh', age: 20 },
        { name: 'pathak', age: 20 }
      ]

  return (
    <>
    <h3 style={{color:'gray'}}>Printing from array of Objects</h3>
    <div>
        {users.map((user, key) => {
        return <User key={key} name={user.name} age={user.age} />
      })}
    </div>
    </>
  )
}