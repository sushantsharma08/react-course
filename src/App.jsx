import React from 'react'
import { Home } from "./Home";
import { UserSec } from './UserSec'
import { PlanetsSec } from './PlanetsSec'
import { StateSec } from './SateSec'
import { Todo } from './Todo'
import { Navigation } from './Navigation'
import FetchingApis from './FetchingApis';
import StateMangement from './stateManagement/StateMangement';
import StateHome from './stateManagement/StateHome'
import StateProfile from './stateManagement/StateProfile'
import { Route, Routes } from 'react-router-dom'

import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Navigation />
      <br />
      <br />
      <hr />
      <br />
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<UserSec />} />
        <Route path='/planets' element={<PlanetsSec />} />
        <Route path='/usestate' element={<StateSec />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/fetchingApi-s' element={<FetchingApis />} />
        <Route path='/global-state-management' element={<StateMangement />} >
          <Route path='' element={<StateHome />} />
          <Route path='stateProfile' element={<StateProfile />} />
        </Route>
        <Route path='/react-query' element={ReactQuery} />
      </Routes>
      <br />
      <hr />
      <br />

    </div>
  )
}

export default App