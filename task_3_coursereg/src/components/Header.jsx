import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
const Header = () => {

  return (
    <div className="bg-black flex flex-col sm:flex-row sm:justify-between sm:items-center w-full max-w-8xl mx-auto px-6 py-4 gap-4 rounded-md shadow-md border border-gray-100 ">
      <div className="flex items-center gap-3 ">
        <img
          src={logo}
          alt="Logo"
          style={{ height: '30px', width: 'auto' }}
          className="object-contain"
        />
        <ThemeToggle />

      </div>
      <div className=" text-gray-100 py-4 px-6">
        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center">
          <li ><NavLink to='/'
            className={({ isActive }) =>
              `cursor-pointer transition text-xl font-bold ${isActive ? 'text-[#FFA500]' : 'hover:text-[#FFA500]'
              }`
            }>Home</NavLink></li>
          <li ><NavLink to='/registered'
            className={({ isActive }) =>
              `cursor-pointer transition text-xl font-bold ${isActive ? 'text-[#FFA500]' : 'hover:text-[#FFA500]'
              }`
            }> My Courses</NavLink></li>
        </ul>
      </div>
    </div>

  )
}

export default Header