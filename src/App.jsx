import React from 'react'
import { Home } from "./pages/Home";
import { UserSec } from './pages/UserSec'
import { PlanetsSec } from './pages/PlanetsSec'
import { StateSec } from './pages/SateSec'
import { Todo } from './pages/Todo'
import { Navigation } from './components/Navigation'
import FetchingApis from './pages/FetchingApis';
import StateMangement from './stateManagement/StateMangement';
import StateHome from './stateManagement/StateHome'
import StateProfile from './stateManagement/StateProfile'
import ReactQuery from './pages/ReactQuery';
import { Route, Routes } from 'react-router-dom'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './App.css'
import ReactForms from './pages/ReactForms';
const client = new QueryClient();

const App = () => {
  return (
    <div className='App'>
      <Navigation />
      <br />
      <br />
      <hr />
      <br />
      <QueryClientProvider client={client}>
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<UserSec />} />
          <Route path='/planets' element={<PlanetsSec />} />
          <Route path='/usestate' element={<StateSec />} />
          <Route path='/todo' element={<Todo />} />
          <Route path='/fetchingApis' element={<FetchingApis />} />
          <Route path='/global-state-management' element={<StateMangement />} >
            <Route path='' element={<StateHome />} />
            <Route path='stateProfile' element={<StateProfile />} />
          </Route>
          <Route path='/react-query' element={<ReactQuery/>} />
          <Route path='/forms' element={<ReactForms/>} />
        </Routes>
      </QueryClientProvider>
      <br />
      <hr />
      <br />

    </div>
  )
}

export default App