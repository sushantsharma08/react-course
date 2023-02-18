import React from 'react'
import { User } from './User'

const App = () => {
  const users = [
    { name: 'sushant', age:20 },
    { name: 'ankit', age:20 },
    { name: 'sparsh', age:20 },
    { name: 'pathak', age:20 },
  ]
  return (
    <div className='App'>
      {users.map((user, key) => {
        return <User name={user.name} age={user.age}/>
      })}
    </div>
  )
}

export default App