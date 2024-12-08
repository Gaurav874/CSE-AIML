import React from 'react'
import "./MainLayout.css"
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

function MainLayout() {
  return (
    <div>
      <h2>welcome to MainLayout page</h2>
      <nav>
        <ul className="aa">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/registration">REGISTRATION</Link></li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  )
}

export default MainLayout
