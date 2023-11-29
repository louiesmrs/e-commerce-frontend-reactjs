import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from './utils/cartUtil.jsx';
import { AuthProvider } from './utils/useAuth.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  
    <CartProvider>
    <AuthProvider>
      <App />
      </AuthProvider>
    </CartProvider>
  </BrowserRouter>,
)
