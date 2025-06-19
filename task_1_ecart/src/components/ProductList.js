import React, { useEffect, useState } from 'react'
import useProductApi from '../hooks/useProductApi'

const ProductList = () => {
  const productList = useProductApi()

  console.log(productList)

  return (
    <div>ProductList</div>
  )
}

export default ProductList