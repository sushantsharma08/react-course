import React from 'react'
import { Home } from "./Home";
import { UserSec } from './UserSec'
import { PlanetsSec } from './PlanetsSec'
import { StateSec } from './SateSec'
import { Todo } from './Todo'
import { Navigation } from './Navigation'
import FetchingApis from './FetchingApis';
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
        <Route path='/fetchingApis' element={<FetchingApis />} />
      </Routes>
      <br />
      <hr />
      <br />
      <h1>State Management and useContext hook</h1>
      
    </div>
  )
}

export default App