import React , {useState} from 'react'
import { User } from './User'
import { Planet } from './Planet'

import './App.css'

const App = () => {


  const users = [
    { name: 'sushant', age: 20 },
    { name: 'ankit', age: 20 },
    { name: 'sparsh', age: 20 },
    { name: 'pathak', age: 20 },
  ]

  const planets = [
    { name: 'Mars', isGasPlanet: false },
    { name: 'Earth', isGasPlanet: false },
    { name: 'Jupiter', isGasPlanet: true },
    { name: 'Venus', isGasPlanet: false },
    { name: 'Neptune', isGasPlanet: true },
    { name: 'Uranus', isGasPlanet: true }
  ]

  const [Age, setAge] = useState(0);
  const incAge=()=>{
    setAge(Age+1)
  }
  const decAge = ()=>{
    setAge(Age-1)
  }
  const setToZero = ()=>{
    setAge(0)
  }
  const [Text, setText] = useState('')
  const changeText=(e)=>{
    // console.log(e.target.value);
    setText(e.target.value)
  }

  return (
    <div className='App'>
      {users.map((user, key) => {
        return <User key={key} name={user.name} age={user.age} />
      })}
      <br />

      <hr />
      printing Gas planets only
      <br />
      {planets.map((planet, key) => {
        return <Planet key={key} name={planet.name} isGasPlanet={planet.isGasPlanet} />
      })}
      <br />

      <hr />
      ep4 : SetState
      <div className="stateExapmple">
        {Age}
        <br />
        <button onClick={incAge}>Increase Age</button>
        <button onClick={decAge}>Decrease Age</button>
        <button onClick={setToZero}>Set Age to 0</button>

        <br />
        <input type="text" onChange={changeText} />
        <br />
        {Text}

      </div>

    </div>
  )
}

export default App