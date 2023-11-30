import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import { notification } from "antd";
import validate from "./ValidateLogin"
import { CartContext } from "./cartUtil";
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [shouldSubmit, setShouldSubmit] = useState(false);
  const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { clearCart } = useContext(CartContext);

  const openNotificationWithIcon = () => {
    notification.open({
      message: "Success",
      description: "Your have logged in!",
      placement: "topLeft",
    });
  };

  const openLogginFailnottif = () => {
    notification.open({
      message: "Failure",
      description: "Account is not registered. Please register first to log in",
      placement: "topLeft",
    });
  };

  const notificationLogout = () => {
    notification.open({
      message: "Success",
      description: "You have logged out!",
      placement: "topLeft",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    // Your url for API
    const url = `http://localhost:8080/online-shop/login`;
    if (Object.keys(values).length === 2) {
      axios
        .post(url, {
          ...values,
        })
        .then((res) => {
           setShouldSubmit(true);
           setUser({email:values.email, admin:res.data});
           setIsLoggedIn(true);
        })
        .catch(function (error) {
            if(error.response) {
                openLogginFailnottif();
            }
            // handle error
            console.log(error);
          });
    }
  };
  
  const logout = (event) => {
    event.preventDefault();
    setUser([]);
    setIsLoggedIn(false);
    notificationLogout();
    clearCart();
}
{
  const register = ( regEmail, regAdmin ) => {
    console.log(regAdmin);
    console.log(regEmail);
    setUser({email:regEmail, admin:regAdmin});
    openNotificationWithIcon();
    setIsLoggedIn(true);
  }
  

  useEffect(() => {
    if (Object.values(errors)[0] === "" && Object.values(errors)[1] === ""  && shouldSubmit) {
      openNotificationWithIcon();
      setValues("");
      setShouldSubmit(false);
    }
  }, [errors, shouldSubmit]);

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  };

  useEffect(() => {
    const data = localStorage.getItem('user');
    if (data) {
      setUser(JSON.parse(data));
    } 
  }, []);

  useEffect(() => {
    console.log(user);
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]); 



  return (
    <AuthContext.Provider
        value={{
        handleChange,
        handleSubmit,
        logout,
        register,
        values,
        errors,
        user,
        isLoggedIn
        }}
        >{children}
    </AuthContext.Provider >
  );
};
}
