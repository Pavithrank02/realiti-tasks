import React from 'react'

const SearchFilter = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className='flex justify-around w-10/12'>
      <h2 className='p-2 w-20'>E-Cart </h2>
      <input
        type="text"
        value={searchTerm}
        placeholder='search your items...'
        onChange={((e) => setSearchTerm(e.target.value))}

        className="border p-2 w-full mb-4" />
    </div>
  )
}

export default SearchFilter