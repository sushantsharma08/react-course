import React from 'react'
import { User } from './User'
import { Planet } from './Planet'

const App = () => {
  const users = [
    { name: 'sushant', age:20 },
    { name: 'ankit', age:20 },
    { name: 'sparsh', age:20 },
    { name: 'pathak', age:20 },
  ]

  const planets = [
    {name:'Mars',isGasPlanet:false},
    {name:'Earth',isGasPlanet:false},
    {name:'Jupiter',isGasPlanet:true},
    {name:'Venus',isGasPlanet:false},
    {name:'Neptune',isGasPlanet:true},
    {name:'Uranus',isGasPlanet:true}
  ]

  return (
    <div className='App'>
      {users.map((user, key) => {
        return <User name={user.name} age={user.age}/>
      })}
      printing Gas planets only
      {planets.map((planet,key)=>{
       return <Planet name={planet.name} isGasPlanet={planet.isGasPlanet} />
      })}
    </div>
  )
}

export default App