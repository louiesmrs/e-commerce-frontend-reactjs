import { Container, Grid } from "semantic-ui-react";
import "./Cart.css"
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import reactLogo from "../../assets/react.svg";
import Navbar from "..//Navbar/Navbar";
import axios from "axios";
import { useContext, useState, useEffect} from "react";
import { CartContext } from "../../utils/cartUtil";
import { notification } from "antd";
const Cart = () => {
    const [shouldSubmit, setShouldSubmit] = useState(false);
    const { cartItems, clearCart, getCartTotal } = useContext(CartContext);
    const Checkout = () => {
        const url = `http://localhost:8080/onlineshop/order`;
        setShouldSubmit(true);
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
    useEffect(() => {
        
        if (shouldSubmit) {
          openCheckoutNotficiation();
        }
      }, [shouldSubmit]);
    
      const openCheckoutNotficiation = () => {
        notification.open({
          message: "Success",
          description: "Your order was successful",
        });
      };

    const openNotificationWithIcon = () => {
        notification.open({
          message: "Success",
          description: "Your cart has been cleared!",
        });
      };
     return (
        <>
            <Navbar showLogin={true} />
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
                </Grid>
                <div>
                    {
                    cartItems.length > 0 ? (
                        <div>
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
                        onClick={() => {
                        Checkout();
                        }}
                    >
                        Checkout
                    </button>
                    </div>
                    ) : (
                        <h1>Your cart is empty</h1>
                    )
                    }
             </div>
            </Container>
        </>
     )  ;     
}

export default Cart;