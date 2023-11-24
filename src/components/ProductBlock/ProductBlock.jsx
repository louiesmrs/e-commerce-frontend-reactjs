import { Container, Grid } from "semantic-ui-react";
import "./ProductBlock.css"
import Product from "../../components/Product/Product";
import reactLogo from "../../assets/react.svg";
import Navbar from "..//Navbar/Navbar";
import axios from "axios";
import { useState } from "react";

const ProductBlock = ( {productNumber}) => {
    const [products, setProducts] = useState([]);
    const url = "http://localhost:8080/online-shop/products";
    axios
        .get(url)
        .then((response) => {
            setProducts(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            });

  
    
    return (
        <div className="prod">
            <Navbar showLogin={true}/>
            <Container>
                <Grid divided>
                    <Grid.Row>
                        {[...products].map((product, index) => {
                          
                        return (
                            <Grid.Column stretched key={index}>
                                <Product
                                    id={index}
                                    key={index}
                                    title={product.name}
                                    price={product.price}
                                    rating="5"
                                    image={reactLogo}
                                ></Product>
                            </Grid.Column>
                            
                        );
                        })}
                    </Grid.Row>
                   
                    
                </Grid>
            </Container>
        </div>

    );
}
export default ProductBlock;