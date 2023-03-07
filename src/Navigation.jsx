import React from 'react'

export const Navigation = () => {
  return (
    <div>
        <ul>
            <li>
                <a to='/'>Home</a>
            </li>
            <li>
                <a to='/users'>Users</a>
            </li>
            <li>
                <a to='/planets'>Planets</a>
            </li>
            <li>
                <a to='/state'>useState</a>
            </li>
            <li>
                <a to='/todo'>Todo</a>
            </li>
        </ul>
    </div>
  )
}