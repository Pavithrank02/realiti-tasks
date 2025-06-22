import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeCart } from '../redux/cartSlice';

const ProductList = ({ products }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.addCart)
  const addProductsToCart = (product) => {
    const isInCart = cartItems.some(item => item.id === product.id);
    if (isInCart) {
      dispatch(removeCart(product.id));
    } else {
      dispatch(addToCart(product));
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 bg-white">
      {products ? products.map(product => (
        <div
          key={product.id}
          className="group border border-gray-200 rounded-lg shadow hover:shadow-xl transition overflow-hidden bg-white flex flex-col"
        >
          <div className="h-48 flex justify-center items-center bg-white overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="object-contain h-full transform group-hover:scale-105 transition"
            />
          </div>
          <div className="bg-[#fff8ee] flex flex-col justify-between flex-grow p-4">
            <div>
              <h3 className="text-base font-semibold text-brand-charcoal mb-1">{product.title}</h3>
              <p className="text-sm text-brand-slate mb-2 capitalize">Category: {product.category}</p>
              <p className="text-sm text-brand-slate mb-2 line-clamp-3">{product.description}</p>
              <div className="text-sm text-brand-orange font-semibold mb-2">
                ⭐ {product.rating?.rate} ({product.rating?.count})
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-bold text-brand-teal">${product.price}</span>
              <button
                onClick={() => addProductsToCart(product)}
                className="bg-brand-orange hover:bg-brand-orange/90 text-white text-sm px-3 py-1 rounded transition"
              >
                {cartItems.some(item => item.id === product.id) ? 'Remove' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>
      )) : (
        <p className="col-span-full text-center text-brand-slate animate-pulse">Loading...</p>
      )}
    </div>




  );
};

export default ProductList;
