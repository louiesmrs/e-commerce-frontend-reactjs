import { Container, Grid } from "semantic-ui-react";
import "./ProductDetails.css"
import Product from "../../components/Product/Product";
import reactLogo from "../../assets/react.svg";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
function ProductDetails() {

    const title = useParams();


    
    return (
        <div className="home">
            <Navbar />
            <div className="product-detail-container">
                <div className="product-image-container">
                    <img src={reactLogo} alt="Product" />
                </div>
                <div className="product-info-container">
                    <h1>Product Title</h1>
                    <p className="product-description"> This is the description </p>
                    <div className="product-price">
                        1$
                    </div>
                    <button className="add-to-cart-button">Add to Cart</button>
             </div>
        </div>
        </div>

    );
}
export default ProductDetails;
