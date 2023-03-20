import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div>
        <ol style={{listStyleType:'none',display:'flex',justifyContent:'flex-start'}}>
            <li>
                <Link to='/HOME'>Home</Link>
            </li>
            <li>
                <Link to='global-state-management/stateProfile'>Profile</Link>
            </li>
        </ol>
    </div>
  )
}

export default Nav