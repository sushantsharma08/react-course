import React from 'react'
import Nav from './Nav'
import StateHome from './StateHome'
import StateProfile from './StateProfile'
import { Route,Routes,Router} from 'react-router-dom'

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
        <Routes>
          <Route path='/HOME' element={<StateHome/>}/>
          <Route path='global-state-management/stateProfile' element={<StateProfile/>}/>
        </Routes>
      </div>
      </div>

    </div >
  )
}

export default StateMangement