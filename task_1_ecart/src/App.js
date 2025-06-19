
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart.jsx';
import SearchFilter from './components/SearchFilter.jsx';
import { useState } from 'react';
import Pagination from './components/Pagination.jsx';

function App() {

  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  return (
    <div className="App">
      <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProductList searchTerm={searchTerm} currentPage={currentPage} />
      <Cart />
      <Pagination currentPage={currentPage} totalPages={5} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
