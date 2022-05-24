import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

function Navbar() {
  return (
    <div>
        <ul type='none'>
          <Link to="/"  className='link0'> <li>Home</li></Link>
          <Link to="/Contact" className='link1'> <li>Contact</li></Link>
          <Link to="/Student" className='link' > <li>Student</li></Link>
        </ul>
    </div>
  )
}

export default Navbar