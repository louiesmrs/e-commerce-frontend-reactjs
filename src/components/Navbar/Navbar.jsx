
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
                <Link to="/Login">
                    Login/
                </Link>
                <Link to="/Register">
                    Register
                </Link>
                </li>
            <li>
            <Link to="/Contact">
                Contact
            </Link><PhoneOutlined /></li>
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