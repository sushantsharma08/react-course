import React, { useState, useRef } from 'react'
import { User } from './User'
import { Planet } from './Planet'
import { Task } from './Task'

import './App.css'

const App = () => {

  const users = [
    { name: 'sushant', age: 20 },
    { name: 'ankit', age: 20 },
    { name: 'sparsh', age: 20 },
    { name: 'pathak', age: 20 }
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
  const incAge = () => {
    setAge(Age + 1)
  }
  const decAge = () => {
    setAge(Age - 1)
  }
  const setToZero = () => {
    setAge(0)
  }
  // text part
  const [Text, setText] = useState('')
  const changeText = (e) => {
    // console.log(e.target.value);
    setText(e.target.value)
  }

  // todo part
  const [TodoList, setTodoList] = useState([])
  const [newTask, setnewTask] = useState('')
  const handleChange = (e) => {
    setnewTask(e.target.value);
  }
  const addTask = () => {
    const task = {
      id: TodoList.length === 0 ? 1 : TodoList[TodoList.length - 1].id + 1,
      taskName: newTask,
    }
    setTodoList([...TodoList, task]);
  }
  const deleteTask = (id) => {
    setTodoList(TodoList.filter((task) => {
      if (task.id == id) {
        console.log(id);
        return false
      } else {
        return true;
      }
    }))
  }
  const done = (taskName) => {

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
        <input type="text" onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="list">
        {TodoList.map((task) => {
          return <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask} />
        })}
      </div>
    </div>
  )
}

export default App