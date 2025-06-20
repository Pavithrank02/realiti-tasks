import React from 'react'
import useProductApi from '../hooks/useProductApi'
import { useSelector } from 'react-redux';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"


const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  useProductApi()

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  const products = useSelector((state) => state.product.products);


  return !products.length ? (<h2>
    No products found
  </h2>) : (
    <div className="w-full flex flex-col items-center gap-4 mt-8">
      <p className="text-lg font-semibold text-gray-700">Pages</p>

      <div className="flex items-center gap-2">
        <button
          disabled={currentPage === 0}
          onClick={handlePrevious}
          className="p-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <FiChevronLeft size={20} />
        </button>
        {[...Array(totalPages).keys()].map((num) => (
          <button
            key={num}
            onClick={() => handlePageChange(num)}
            className={`px-3 py-1 rounded-md text-sm font-medium border transition ${currentPage === num
              ? "bg-brand-orange text-white border-brand-orange"
              : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
          >
            {num + 1}
          </button>)
        )}
        <button
          disabled={currentPage === totalPages}
          onClick={handleNext}
          className="p-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <FiChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}

export default Pagination