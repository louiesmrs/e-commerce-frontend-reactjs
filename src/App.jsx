import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />}></Route>
          {
            //<Route path="/login" component={Login}></Route>
            //<Route path="/checkout" component={Checkout}></Route>
          }
        </Routes>
      </Router>
    </>
  )
}

export default App
