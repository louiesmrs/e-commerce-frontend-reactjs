
import "./Navbar.css"


function Navbar( {image}) {
    return (
    <nav className='nav'>
        <img src={image} className='nav-logo' />
        <h3 className='nav-header'>Sweng Group 27</h3>
        <ul className='nav-items'>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
    ); 
  }

export default Navbar;