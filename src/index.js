import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/Home'
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';









const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path = "/" element ={<Home/>}/>
      <Route path="Login" element={<Login />} />
      <Route path="Register" element={<Register/>} />
      <Route path="Product" element={<Product/>} />
      <Route path="Productlist" element={<ProductList />} />
      <Route path="Cart" element={<Cart/>} />

    </Routes>
  </BrowserRouter>
);
