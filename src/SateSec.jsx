import React, { useState } from 'react'

export const StateSec = () => {

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


  return (
    <div>
      ep4 : SetState

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
  )
}

