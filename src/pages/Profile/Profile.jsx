
import "./Profile.css"
import { useEffect, useState, useContext} from "react";
import Navbar from "../../components/Navbar/Navbar";
import { AuthContext } from "../../utils/useAuth";
import { useNavigate } from "react-router-dom";
function Profile() {
    const [showProfile, setProfile] = useState(false);
    const { user, logout, isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (user.email) {
            setProfile(true);
        }
    }, [user]);
    useEffect(() => {
        console.log(isLoggedIn);
        if(!isLoggedIn) {
            navigate(`/login`);
        }
    }, [isLoggedIn]);

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
        </>;
    } else {
        profileItem = 
            <h1>You are not logged in</h1>
    }
    
    return (
    <>
        <Navbar />
        {profileItem}
    </>
    ); 
  }

export default Profile;