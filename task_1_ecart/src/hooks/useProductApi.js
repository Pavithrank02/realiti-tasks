import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productList } from '../redux/productSlice'
const useProductApi = () => {

  const dispatch = useDispatch()
  const productDetails = useSelector(
    (store) => store.product.products
  )


  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetch("https://fakestoreapi.com/products")
      const response = await data.json()
      dispatch(productList(response))

    }
    fetchProducts()
  }, [dispatch])

  return productDetails

}

export default useProductApi