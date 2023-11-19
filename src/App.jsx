import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Checkout from "./pages/Checkout/Checkout"
import ProductDetails from './pages/ProductDetails/ProductDetails';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/product/:title" element={<ProductDetails />}></Route>
          {
            //<Route path="/login" component={Login}></Route>
           
          }
        </Routes>
      </Router>
    </>
  )
}

export default App
