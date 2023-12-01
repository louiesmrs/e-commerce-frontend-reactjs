import { Suspense } from 'react'

import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Checkout from "./pages/Checkout/Checkout"
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import Sell from './pages/Sell/Sell';
import CheckoutSuccess from './pages/CheckoutSuccess/CheckoutSuccess';
function App() {
  return (
    <Suspense fallback={null}>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/product/:title" element={<ProductDetails />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/Sell" element={<Sell />}></Route>
          <Route path="/success" element={<CheckoutSuccess />}></Route>
        </Routes>
   </Suspense>
      
  )
}

export default App
