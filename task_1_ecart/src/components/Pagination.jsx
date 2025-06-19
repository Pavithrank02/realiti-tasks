import React from 'react'
import useProductApi from '../hooks/useProductApi'
import { useSelector } from 'react-redux';
import { FiChevronsLeft, FiChevronRight } from "react-icons/fi"

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  useProductApi()
  const handlePrevious = () => {
    setCurrentPage((prev) => prev - 1)
  }
  const handleNext = () => {
    setCurrentPage((prev) => prev + 1)
  }
  const products = useSelector((state) => state.product.products);
  const totalProducts = products.length
  const noOfPages = Math.ceil(totalProducts / totalPages)
  return !products.length ? (<h2>
    No products found
  </h2>) : (
    <div>Pagination
      <div>
        <button disabled={currentPage === 0}></button>
      </div>
    </div>
  )
}

export default Pagination