import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavBar from './components/MyNavBar';
import LoginPage from "./components/pages/LoginPage"
import HomePage from "./components/pages/HomePage"
import ItemsPage from "./components/pages/ItemsPage"
import CartPage from "./components/pages/CartPage"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <MyNavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/items" element={<ItemsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route exact path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
