
import "./Profile.css"
import { useEffect, useState, useContext} from "react";
import Navbar from "../../components/Navbar/Navbar";
import { AuthContext } from "../../utils/useAuth";
import { Link } from "react-router-dom";
import axios from "axios";
import { Grid } from "semantic-ui-react";
import Order from "../../components/Order/Order";
function Profile() {
    const [showProfile, setProfile] = useState(false);
    const { user, logout, isLoggedIn } = useContext(AuthContext);
    const [ orders, setOrders] = useState([]);
    
    const url = `http://localhost:8080/online-shop/orders/${user.email}`;
    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setOrders(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                });
            }, []);
    useEffect(() => {
        if (user.email) {
            setProfile(true);
        } else {
            setProfile(false);
        }
    }, [user]);
   
    let profileItem;
    if(showProfile) {
        profileItem = 
        <>
           <h3>Email: {user.email}</h3>
           <h3>User Privilige: { user.admin ? (
            <span>Admin</span> ) : ( <span>User</span> ) }
            </h3>
            <button
                    className="logout-button"
                    onClick={logout}
            >Logout</button>
            <Grid divided>
                    <Grid.Row>
                        {[...orders].map((order, index) => {
                          
                        return (
                            <Grid.Column stretched key={index}>
                                <Order
                                    key={index}
                                    items={order.items}
                                    email={order.email}
                                    total={order.total}
                                    postcode={order.postcode}
                                ></Order>
                            </Grid.Column>
                            
                        );
                        })}
                    </Grid.Row>
                   
                    
                </Grid>
        </>;
    } else {
        profileItem =
        <>
            <h1>You are not logged in</h1>
            <Link to="/login"><button className="login">Login Here</button></Link>
        </> 
    }
    
    return (
    <>
        <Navbar />
        {profileItem}
    </>
    ); 
  }

export default Profile;