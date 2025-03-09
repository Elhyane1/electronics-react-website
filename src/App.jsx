// import { useState } from 'react'
import {BrowserRouter, Router, Routes, Route, Navigate} from 'react-router-dom';
import Layout from './pages/Layout';
import NavBar from './components/NavBar'
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import About from './pages/About';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import AdminDashboard from './components/admin/ProductManagement';
import AdminNavbar from './pages/AdminNavbar';
import UserManagement from './components/admin/UserManagement';
import OrderManagement from './components/admin/OrdersManagement';

function App() {

  return (
    <>
      {/* <NavBar></NavBar> */}
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Navigate to="/home" replace />} />
              <Route path="home" element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="contacts" element={<Contact />} />
              <Route path="about" element={<About />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
            </Route>
              <Route path="login" element={<Login />} />
              <Route path="admin" element={<AdminNavbar />} >
                <Route path="products" element={<AdminDashboard />} />
                <Route path="clients" element={<UserManagement />} />
                <Route path="orders" element={<OrderManagement />} />
              </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
