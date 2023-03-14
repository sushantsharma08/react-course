import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './StateMangement';

const Nav = () => {
  const {User} = useContext(UserContext);

  return (
    <div>
        <ol style={{listStyleType:'none',display:'flex',justifyContent:'flex-start'}}>
          <nav style={{display:'flex',justifyContent:'space-evenly',flex:'0.3'}}>
          <li>
                <Link to='./'>Home</Link>
            </li>
            <li>
                <Link to='./stateProfile'>Profile</Link>
            </li>
          </nav>
          <div style={{display:'flex',justifyContent:'flex-end',flex:0.7}}>
              <b>{User}</b>
          </div>
        </ol>
    </div>
  )
}

export default Nav