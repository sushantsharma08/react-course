import React from 'react'
import { Home } from "./Home";
import { UserSec } from './UserSec'
import { PlanetsSec } from './PlanetsSec'
import { StateSec } from './SateSec'
import { Todo } from './Todo'
import { Navigation } from './Navigation'
import { Route, Routes } from 'react-router-dom'

import './App.css'

const App = () => {





  // component lifecycle and useEffect

  // useEffect(() => {
  //   console.log(`something changed`);

  //   return (()=>{
  //     // document.write('todochanged')
  //   })
  // },[TodoList] )


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
      </Routes>
      <br />
      <hr />
    </div>
  )
}

export default App