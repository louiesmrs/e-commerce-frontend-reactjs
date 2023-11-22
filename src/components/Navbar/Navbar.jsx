
import "./Navbar.css"
import { Link } from 'react-router-dom';
import {
    HomeOutlined,
    ShoppingCartOutlined,
    PhoneOutlined 
} from '@ant-design/icons';

function Navbar() {
    return (
    <nav className='nav'>
        <Link to="/home">
            <HomeOutlined style={{ fontSize: '250%'}} />
        </Link>
        <h3 className='nav-header'>Sweng Group 27</h3>
        <ul className='nav-items'>
            <li>
                <Link to="/Login" className="link">
                    Login/
                </Link>
                <Link to="/Register" className="link">
                    Register
                </Link>
                </li>
            <li>
            <Link to="/Contact" className="link">
                Contact
            </Link><PhoneOutlined style={{ color: '#d0adf0'}}/></li>
        </ul>
        <div className="navbar-right">
            <Link to="/checkout">
                <ShoppingCartOutlined style={{ fontSize: '250%'}}/>
            </Link>
      </div>
    </nav>
    ); 
  }

export default Navbar;