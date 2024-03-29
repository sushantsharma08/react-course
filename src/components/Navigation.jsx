import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/fetchingApis'>Api Call</Link>
            </li>
            <li>
                <Link to='/global-state-management'>State Management</Link>
            </li>
            <li>
                <Link to='/react-query'>React Query</Link>
            </li>
            <li>
                <Link to='/todo'>Todo</Link>
            </li>
            <li>
                <Link to='/forms'>Forms</Link>
            </li>
            <li>
                <Link to='/usestate'>useState</Link>
            </li>
            <li>
                <Link to='/users'>Users</Link>
            </li>
            <li>
                <Link to='/planets'>Planets</Link>
            </li>
        </ul>
    </div>
  )
}