import { useState } from "react";
import "./ProductDetails.css"
import reactLogo from "../../assets/react.svg";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
function ProductDetails() {

    const title = useParams();
    
    const [product, setProduct] = useState(
        {
            name:'',
            price:'',
            sizes:'',
            id:''
        }
    );
    const url = `http://localhost:8080/online-shop/product/${title.title}`;
    axios
        .get(url)
        .then((response) => {
            setProduct(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            });
    const sizeArray = product.sizes.split(" ");

    
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
                        {product.price}$
                    </div>
                    <select className="product-select">
                            <option>S &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sizeArray[0]} remaining</option>
                            <option>M &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sizeArray[1]} remaining</option>
                            <option>L &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sizeArray[2]} remaining</option>
                            <option>XL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sizeArray[3]} remaining</option>
                    </select>
                    <button className="add-to-cart-button">Add to Cart</button>
             </div>
        </div>
        </div>

    );
}
export default ProductDetails;
