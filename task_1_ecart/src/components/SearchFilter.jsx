import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png'

const SearchFilter = ({ searchTerm, setSearchTerm }) => {
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    const isValid = /^[a-zA-Z0-9\s,'"-]*$/.test(value);

    if (!isValid) {
      setError('Invalid characters in search.');
    } else {
      setError('');
      setSearchTerm(value);
    }
  };

  useEffect(() => {
    if (searchTerm === '') {
      setError('');
    }
  }, [searchTerm])
  return (
    <div className="bg-black flex flex-col sm:flex-row justify-between items-center w-full max-w-5xl mx-auto px-4 py-6 gap-4 rounded-md shadow-md border border-gray-100">
      <div className="flex items-center gap-3 ">
        <img
          src={logo}
          alt="E-Cart Logo"
          style={{ height: '32px', width: 'auto' }}
          className="object-contain"
        />
        <h2 className="text-2xl font-semibold text-white mt-3">E-Cart</h2>
      </div>

      <div className="w-full sm:w-1/2">
        <input
          type="text"
          value={searchTerm}
          placeholder="Search your items..."
          onChange={handleChange}
          className={`w-full border px-4 py-2 rounded-md shadow-sm focus:outline-none transition text-gray-800 ${error
            ? 'border-red-400 focus:ring-red-400'
            : 'border-gray-300 focus:ring-2 focus:ring-brand-orange'
            }`}
        />
        {error && (
          <p className="text-red-500 text-sm mt-1">
            {error}
          </p>
        )}
      </div>
    </div>

  );
};

export default SearchFilter;
