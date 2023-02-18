import React from 'react'

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

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>{props.age}</h3>
    </div>
  )
}

export default App