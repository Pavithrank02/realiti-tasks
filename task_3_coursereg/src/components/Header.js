import React from 'react'
import logo from '../assets/logo.png'
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
      <div className="w-full sm:w-1/2">
        <input
          type="text"
          // value={searchTerm}
          placeholder="Search courses..."
          // onChange={handleChange}
          className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-gray-800"
        />
      </div>
    </div>

  )
}

export default Header