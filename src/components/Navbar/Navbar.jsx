
import "./Navbar.css"
import { Link } from 'react-router-dom';
import {
    HomeOutlined,
    ShoppingCartOutlined,
    PhoneOutlined 
} from '@ant-design/icons';
import { useContext, useEffect, useState} from "react";
import { CartContext } from "../../utils/cartUtil";
import { AuthContext } from "../../utils/useAuth";

function Navbar() {
    const { getNumberInCart } = useContext(CartContext);
    const { user } = useContext(AuthContext);
    const [showLogin, setShowLogin] = useState(true);
    const [showSell, setShowSell] = useState(false);
    

    useEffect(() => {
        console.log(user);
        console.log(user.email);
        if (user.email !== undefined) {
            setShowLogin(false);
        } else {
            setShowLogin(true);
        }
        if(user.admin === true) {
            setShowSell(true);
        } else {
            setShowSell(false);
        }

    }, [user]);
    
    let profileItem;
    if(showLogin) {
        profileItem = 
        <>
            <Link to="/Login" className="link">
                        Login/
            </Link>
            <Link to="/Register" className="link">
                        Register
            </Link> 
        </>;
    } else {
        profileItem = 
        <Link to="/Profile" className="link">
                    Profile
                </Link>
    }
    let sellItem;
    if(showSell) {
        sellItem = 
        <>
           <Link to="/Sell" className="link">
                    Sell 
                </Link>
        </>;
    } else {
        sellItem = 
        <></>
    }

    return (
    <nav className='nav'>
        <Link to="/home">
            <HomeOutlined style={{ fontSize: '250%'}} />
        </Link>
        <h3 className='nav-header'>Sweng Group 27</h3>
        <ul className='nav-items'>
            <li>
                {sellItem}
            </li>
            <li>
                {profileItem}
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
            <h3>{getNumberInCart()}</h3>
      </div>
    </nav>
    ); 
  }

export default Navbar;