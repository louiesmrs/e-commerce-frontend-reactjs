
import "./Navbar.css"
import { Link } from 'react-router-dom';
import reactLogo from "../../assets/react.svg";
function Navbar( {image}) {
    return (
    <nav className='nav'>
        <Link to="/home">
            <img src={image} className='nav-logo' />
        </Link>
        <h3 className='nav-header'>Sweng Group 27</h3>
        <ul className='nav-items'>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="navbar-right">
            <Link to="/checkout">
            <img src={reactLogo}></img>
            </Link>
      </div>
    </nav>
    ); 
  }

export default Navbar;