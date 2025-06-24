import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/view/HomePage'
import Cart from './components/Cart'


const App = () => {
  return (
    <div>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App