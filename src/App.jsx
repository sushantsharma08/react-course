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

  // age part
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
  // text part
  const [Text, setText] = useState('')
  const changeText=(e)=>{
    // console.log(e.target.value);
    setText(e.target.value)
  }

  // todo part
  const [TodoList, setTodoList] = useState([])
  const [newTask, setnewTask] = useState('')
   const handleChange=(e)=>{
    setnewTask(e.target.value);
   }
   const addTask = ()=>{
    setTodoList([...TodoList,newTask]);
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
      <br />
      <hr />
      <br />
      ToDo Functionality

      <div className="newTask">
        <input type="text" onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="list">
      {TodoList.map((task)=>{
       return <h1>{task}</h1>
      })}
      </div>
    </div>
  )
}

export default App