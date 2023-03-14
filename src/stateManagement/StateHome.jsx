import React, { useContext } from 'react'
import { UserContext } from './StateMangement';

const StateHome = () => {
  const { User, setUser } = useContext(UserContext);

  return (
    <div>
      <h4 style={{ color: 'gray' }}>This is the home component</h4>
      <span style={{ fontSize: '27px' }}>Current user is: <b>{User}</b></span>

    </div>
  )
}

export default StateHome