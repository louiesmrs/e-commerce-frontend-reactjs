import { Container, Grid } from "semantic-ui-react";
import "./ProductBlock.css"
import Product from "../../components/Product/Product";
import reactLogo from "../../assets/react.svg";
import Navbar from "..//Navbar/Navbar";
import axios from "axios";
import { useState } from "react";

const Cart = () => {
    const [cart, setCart] = useState([]);
    const url = "http://localhost:8080/:userid/cart";
    axios
        .get(url)
        .then((response) => {
            setCart(...response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            });
     return (
        <>
            
            <Navbar showLogin={true} />
            <Container>
                <Grid divided>
                    <Grid.Row>
                        {cart.map((product, index) => {
                        return (
                            <Grid.Column stretched key={index}>
                                <Product
                                    id={index}
                                    key={index}
                                    title={product.title}
                                    price={product.price}
                                    rating={product.rating}
                                    image={product.image}
                                ></Product>
                            </Grid.Column>
                            
                        );
                        })}
                    </Grid.Row>
                   
                    
                </Grid>
            </Container>
        </>
     )  ;     
}

export default Cart;