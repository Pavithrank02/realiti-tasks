import React, { useEffect } from 'react';
import useProductApi from '../hooks/useProductApi';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductList = () => {
  useProductApi(); // just to fetch data and dispatch it

  const dispatch = useDispatch();

  // Get product list from Redux store
  const products = useSelector((state) => state.product.products);

  const addProductsToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {products && products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow-lg">
            <img
              src={product.image}
              alt={product.title}
              className="h-32 mx-auto mb-2 object-contain"
            />
            <h3 className="text-sm font-semibold">{product.title}</h3>
            <p className="text-xs text-gray-500 mb-2">${product.price}</p>
            <button
              onClick={() => addProductsToCart(product)}
              className="bg-lime-700 hover:bg-lime-800 text-white py-1 px-2 rounded text-sm"
            >
              Add to cart
            </button>
          </div>
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">Loading products...</p>
      )}
    </div>
  );
};

export default ProductList;
