import React, { useState } from 'react'

const SearchFilter = ({ searchTerm, setSearchTerm }) => {
  const [error, setError] = useState(false)

  return (
    <div className="flex items-center justify-center w-full sm:w-1/2">
      <input
        type="text"
        value={searchTerm}
        placeholder="Search your items..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className={`w-full border px-4 py-2 rounded-md shadow-sm focus:outline-none transition dark:text-gray-800 ${error
          ? 'border-red-400 focus:ring-red-400'
          : 'border-2 border-orange-500 focus:ring-2 focus:ring-brand-orange'
          }`}
      />
    </div>
  )
}

export default SearchFilter