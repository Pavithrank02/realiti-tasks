import React from 'react'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { courseData } from '../MOCK_DATA.js'

const Pagination = ({ currentPage, totalPages, nextPage, prevPage, goToPage }) => {


  return !courseData.length ? (<h2>
    No course found
  </h2>) : (
    <div className="w-full flex flex-col items-center gap-4 mt-8">
      <p className="text-lg font-semibold text-gray-700">Pages</p>

      <div className="flex items-center gap-2">
        <button
          disabled={currentPage === 0}
          onClick={prevPage}
          className="p-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <FiChevronLeft size={20} />
        </button>
        {[...Array(totalPages).keys()].map((num) => (
          <button
            key={num}
            onClick={() => goToPage(num)}
            className={`px-3 py-1 rounded-md text-sm font-medium border transition ${currentPage === num
              ? "bg-orange-500 text-white"
              : "bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200"
              }`}
          >
            {num + 1}
          </button>)
        )}
        <button
          disabled={currentPage === totalPages}
          onClick={nextPage}
          className="px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-r disabled:opacity-50"
        >
          <FiChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}

export default Pagination