import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCart } from '../redux/cartSlice'
const Cart = () => {

  const cartItems = useSelector((state) => state.addCart)
  const dispatch = useDispatch()
  // console.log(cartItems)
  const handleRemove = (id) => {
    dispatch(removeCart(id))
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Cart Items</h2>
      { }
    </div>
  )
}

export default Cart