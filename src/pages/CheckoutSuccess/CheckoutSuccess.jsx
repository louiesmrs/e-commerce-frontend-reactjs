import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { CartContext } from '../../utils/cartUtil';
import Navbar from '../../components/Navbar/Navbar';
import "./CheckoutSuccess.css"
const CheckoutSuccess = () => {
 

  return (
    <div >
      <Navbar />
      <div >
        <h2>Thank you for your order!</h2>
        <p >
          If you have any questions, please contact us here
            <Link to="/Contact" className='link'> Contact</Link>          
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

export default CheckoutSuccess;