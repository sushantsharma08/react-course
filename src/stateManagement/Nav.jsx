import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
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

            <li>
              userInfo
            </li>
        </ol>
    </div>
  )
}

export default Nav