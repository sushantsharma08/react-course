import React from 'react'
import Nav from './Nav'

import {Outlet} from 'react-router-dom'

const StateMangement = () => {
  return (
    <div>
      <h1>State Management and useContext hook</h1>
      <p style={{ color: 'gray' }}>
        In this module we have covered the useContext Hook with which we have managed the states (theme and user) globally
      </p>

      <div className="main" style={{ border: '1px solid black', outline: '1px solid gray', padding: '2rem' }}>
      <div className='content'>
        <Nav/>
        <hr />
        <br />
        <Outlet />
      </div>
      </div>

    </div >
  )
}

export default StateMangement