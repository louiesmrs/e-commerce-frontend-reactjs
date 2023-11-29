import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { CartContext } from '../../utils/cartUtil';

const CheckoutSuccess = () => {
  const { clearCart, isCheckedOut, checkout } = useContext(CartContext);
  const navigate = useNavigate();
  useEffect(() => {
    if(isCheckedOut) {
        clearCart();
        checkout();
    } else {    
        navigate('/home');
    }
  }, []);

  return (
    <div >
      <div >
        <h2>Thank you for your order!</h2>
        <p >
          If you have any questions, please contact us here
            <Link to="/Contact">Contact</Link>          
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