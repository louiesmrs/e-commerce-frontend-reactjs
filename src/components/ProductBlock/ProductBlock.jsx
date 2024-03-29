import { Container, Grid, Input} from "semantic-ui-react";
import "./ProductBlock.css"
import Product from "../../components/Product/Product";
import reactLogo from "../../assets/react.svg";
import Navbar from "..//Navbar/Navbar";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { CartContext } from '../../utils/cartUtil';

const ProductBlock = () => {
    const [products, setProducts] = useState([]);
    const [input, setInput] = useState('');
    const { checkout, isCheckedOut } = useContext(CartContext);
    useEffect(() => {
        if(isCheckedOut) {
            checkout();
        }
    }, [])
    
    const url = "http://localhost:8080/online-shop/products";
    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setProducts(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                });
            }, []);
    let inputChange = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInput(lowerCase);
      };

    const filteredProducts = products.filter((el) => {
        //if no input the return the original
        if (input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.name.toLowerCase().includes(input)
        }
    })
    
    return (
        <div className="prod">
            <Navbar />
            <Container>
            <div className="search" >
                    <Input 
                        type="text" 
                        placeholder="Search..."
                        onChange={inputChange}
                    ></Input>
                </div>
                <Grid divided>
                    <Grid.Row>
                        {[...filteredProducts].map((product, index) => {
                          
                        return (
                            <Grid.Column stretched key={index}>
                                <Product
                                    key={index}
                                    name={product.name}
                                    price={product.price}
                                    image={product.image}
                                    sizes={product.sizes}
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
