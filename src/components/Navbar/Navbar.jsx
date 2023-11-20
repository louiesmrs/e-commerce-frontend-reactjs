
import "./Navbar.css"
import { Link } from 'react-router-dom';

function Navbar( {image}) {
    return (
    <nav className='nav'>
        <Link to="/home">
            <img src={image} className='nav-logo' />
        </Link>
        <h3 className='nav-header'>Sweng Group 27</h3>
        <ul className='nav-items'>
            <li>
                <Link to="/Login">
                    Login
                </Link>
                </li>
            <li>
            <Link to="/Contact">
                Contact
            </Link></li>
        </ul>
        <div className="navbar-right">
            <Link to="/checkout">
                <img src={image} />
            </Link>
      </div>
    </nav>
    ); 
  }

export default Navbar;