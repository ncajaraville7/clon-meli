import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import ProductDetail from './components/Products/ProductDetail/ProductDetail';
import ProductListContainer from './components/Products/ProductList/ProductListContainer';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [items, setItems] = useState([]);

  const getProducts = async () => {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${searchValue}`
    );
    const data = await response.json();
    setItems(data.results);
  };

  return (
    <BrowserRouter>
      <Navbar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        getProducts={getProducts}
      />
      <Routes>
        <Route
          path="/"
          element={
            <ProductListContainer searchValue={searchValue} items={items} />
          }
        />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
