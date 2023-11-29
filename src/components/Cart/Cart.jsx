import { Container, Grid } from "semantic-ui-react";
import "./Cart.css"
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import reactLogo from "../../assets/react.svg";
import Navbar from "..//Navbar/Navbar";
import axios from "axios";

import validate from "../../utils/ValidateCheckout";
import { useContext, useState, useEffect} from "react";
import { CartContext } from "../../utils/cartUtil";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
const Cart = () => {
    const [shouldSubmit, setShouldSubmit] = useState(false);
    const { cartItems, clearCart, getCartTotal, checkout } = useContext(CartContext);
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const handleChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            [event.target.name]: event.target.value,
        }));
        setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
        };
    const ValidationType = ({ type }) => {
        const ErrorMessage = errors[type];
        return (
            <>
            <span className="span" erros={errors[type]}>{ErrorMessage}</span>
            </>
        );
    };
    const Checkout = (event) => {
        event.preventDefault();
        console.log(errors);
        console.log(values);
        setErrors(validate(values));
        const url = `http://localhost:8080/onlineshop/addOrder`;
        if (Object.keys(values).length === 2 && Object.values(errors)[0] === "" && Object.values(errors)[1] === "") {
            axios
                .post(url, {
                cartItems,
                })
                .then(() => {
                setShouldSubmit(true);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });  
        }
    }
    useEffect(() => {
        if (shouldSubmit) {
          setValues("");
          openCheckoutNotficiation();
          navigate(`/success`);
          checkout();
        }
      }, [shouldSubmit]);
    
      const openCheckoutNotficiation = () => {
        notification.open({
          message: "Success",
          description: "Your order was successful",
          placement: "topLeft",
        });
      };

    const openNotificationWithIcon = () => {
        notification.open({
          message: "Success",
          description: "Your cart has been cleared!",
          placement: "topLeft",
        });
      };
     return (
        <div className="cart">
            <Navbar  />
            <Container textAlign="center">
                <Grid divided>
                    <Grid.Row>
                        {cartItems.map((product, index) => {
                        return (
                            <Grid.Column stretched key={index}>
                                <CheckoutProduct
                                    id={product._id}
                                    key={index}
                                    name={product.name}
                                    price={product.price}
                                    image={reactLogo}
                                    quantity={product.quantity}
                                    selectedSize={product.selectedSize}
                                    sizes={product.sizes}
                                ></CheckoutProduct>
                            </Grid.Column>
                            
                        );
                        })}
                    </Grid.Row>
                
                    {
                    cartItems.length > 0 ? (
                        <div>   
                            <Grid.Row justify="space-between" align="middle">
                            <h3>Checkout Form</h3>
                            <Grid.Column >
                                <form autoComplete="off" >
                                <Grid.Column span={24}>
                                    <input className="email"
                                    type="text"
                                    name="email"
                                    placeholder="Your Email"
                                    value={values.email|| ""}
                                    onChange={handleChange}
                                    />
                                    <ValidationType type="email" />
                                </Grid.Column>
                                <Grid.Column span={24}>
                                    <input className="postcode"
                                    type="text"
                                    name="postcode"
                                    placeholder="Your Postcode"
                                    value={values.postcode || ""}
                                    onChange={handleChange}
                                    />
                                    <ValidationType type="postcode" />
                                </Grid.Column>
                                </form>
                            </Grid.Column>
                            </Grid.Row>
                        
                    <h1>Total: ${getCartTotal()}</h1>
                    <button
                        className="clear-cart-button"
                        onClick={() => {
                        clearCart()
                        openNotificationWithIcon()
                        }}
                    >
                        Clear cart
                    </button>
                    <button
                        className="checkout-button"
                        onClick={(e) => {
                        Checkout(e);
                        }}
                    >
                        Checkout
                    </button>
                    </div>
                    ) : (
                        <h1>Your cart is empty</h1>
                    )
                    }
             
        </Grid>

        </Container>
        </div>
     )  ;     
}

export default Cart;