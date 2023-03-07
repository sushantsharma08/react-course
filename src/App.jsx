import React from 'react'
import { UserSec } from './UserSec'
import { PlanetsSec } from './PlanetsSec'
import { StateSec } from './SateSec'
import { Todo } from './Todo'
import { Navigation } from './Navigation'
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
      {/* <UserSec/> */}
      {/* <PlanetsSec/> */}
      {/* <StateSec/> */}
      {/* <Todo /> */}
      <Navigation/>
    </div>
  )
}

export default App