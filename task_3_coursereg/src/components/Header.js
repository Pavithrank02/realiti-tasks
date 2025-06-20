import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div className="bg-black flex flex-col sm:flex-row sm:justify-between sm:items-center w-full max-w-5xl mx-auto px-6 py-4 gap-4 rounded-md shadow-md border border-gray-100 mt-4">
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Logo"
          style={{ height: '40px', width: 'auto' }}
          className="object-contain"
        />
      </div>
      <div className=" text-gray-100 py-4 px-6">
        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center">
          <li className="cursor-pointer hover:text-blue-400 transition"><NavLink to='/'>Home</NavLink></li>
          <li className="cursor-pointer hover:text-blue-400 transition"><NavLink to='/register'>Registration</NavLink></li>
          <li className="cursor-pointer hover:text-blue-400 transition"><NavLink to='/registered'> My Courses</NavLink></li>
        </ul>
      </div>
    </div>

  )
}

export default Header