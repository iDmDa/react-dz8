import React from 'react';
import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/main/main';
import ProductPage from './components/product/product';
import { CartProvider } from './components/common/CartContext';
import ShopPage from './components/shoppingCart/shopPage';


function App() {
  return (
    <>
      <CartProvider>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/shopcart' element={<ShopPage />} />
          
        </Routes>
      </CartProvider>

    </>
  );
}

export default App;