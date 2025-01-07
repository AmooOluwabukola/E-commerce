import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Checkout from './pages/Checkout';
import Order from './pages/Order';
import Login from './pages/Login';
import Signup from './pages/auth/Signup';
import UserProfile from './pages/UserProfile'
import Resetpassword from './pages/Resetpassword'
import Forgotpassword from './pages/Forgotpassword';
import Product from './pages/Product'
import ProductDetail from './pages/Productdetail'

function App() {


  return (
    <>
  <Router>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productdetail/:id" element={<ProductDetail />} />
          <Route path="/order" element={<Order />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="*" element={<PageNotfound />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/reset-password/:token" element={<Resetpassword />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
