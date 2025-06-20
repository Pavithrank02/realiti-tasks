import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCart } from '../redux/cartSlice'

const Cart = ({ closeModal }) => {

  const cartItems = useSelector((state) => state.addCart)
  const dispatch = useDispatch()
  // console.log(cartItems)
  const handleRemove = (id) => {
    dispatch(removeCart(id))
  }

  const total = cartItems.reduce((acc, item) => acc + item.price, 0)

  return (
    <div onClick={closeModal} className="fixed inset-0 flex justify-center flex-col items-center bg-black bg-opacity-50 backdrop-blur-sm z-40"
    >

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600 text-lg bg-white">No items in cart</div>
      ) : (
        <div className="space-y-4 w-2/4 " onClick={(e) => e.stopPropagation()}   >
          {cartItems.map((item) => (
            <div
              key={item.id}

              className="flex flex-col sm:flex-row justify-between items-center border rounded-md p-4 shadow-sm bg-white"
            >
              <div className="flex items-center space-x-4 w-full sm:w-2/3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-16 w-16 object-contain"
                />
                <div className="flex flex-col">
                  <span className="font-medium text-sm sm:text-base line-clamp-1">{item.title}</span>
                  <span className="text-sm text-gray-500">${item.price}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2 mt-4 sm:mt-0">
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-600 hover:text-red-800 text-sm sm:text-base"
                >
                  Remove
                </button>
              </div>

            </div>
          ))}
          <div className=" flex items-center justify-center text-center h-10 mt-6 bg-brand-orange w-auto ">
            <h3 className="text-lg font-semibold">
              Total: <span className="">${total.toFixed(2)}</span>
            </h3>
          </div>

        </div>
      )}

    </div>
  )
}

export default Cart
