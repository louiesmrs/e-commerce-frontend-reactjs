import { useState } from "react";
import "./ProductDetails.css"
import reactLogo from "../../assets/react.svg";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
function ProductDetails() {

    const title = useParams();
    
    const [product, setProduct] = useState([]);
    const url = "http://localhost:8080/product";
    axios
        .get(url)
        .then((response) => {
            setProduct(...response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            });
    
    console.log(title);
    
    return (
        <div className="home">
            <Navbar />
            <div className="product-detail-container">
                <div className="product-image-container">
                    <img src={reactLogo} alt="Product" />
                </div>
                <div className="product-info-container">
                    <h1>{title.title}</h1>
                    <p className="product-description"> This is the description </p>
                    <div className="product-price">
                        1$
                    </div>
                    <select className="product-select">
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                    </select>
                    <button className="add-to-cart-button">Add to Cart</button>
             </div>
        </div>
        </div>

    );
}
export default ProductDetails;
