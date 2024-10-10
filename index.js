import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from './App';
import Layout from "./Layout"
import GetAll from "./GetAll"
import reportWebVitals from './reportWebVitals';
import GetById from './GetById';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/products" element={<GetAll />} />
        <Route path="/product/:id" element={<GetById />} />
        <Route path="/products/add" element={<AddProduct />} />
        <Route path="/product/edit/:id" element={<EditProduct />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
