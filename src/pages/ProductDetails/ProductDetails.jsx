import { useState, useContext} from "react";
import "./ProductDetails.css"
import reactLogo from "../../assets/react.svg";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { notification } from "antd";
import { CartContext } from "../../utils/cartUtil";
function ProductDetails() {
    const title = useParams();
    const { addToCart } = useContext(CartContext);
    const [product, setProduct] = useState(
        {
            name:'',
            price:'',
            sizes:'',
            _id:'',
            selectedSize: 's',

        }
    );
    
    const handleClick = () => {
        if(addToCart(product)) {
            openNotificationSuccess();
        } else {
            openNotificationFail();
        }
    }
    const openNotificationSuccess = () => {
        notification.open({
          message: "Success",
          description: "Item has been addded to card!",
        });
      };
    const openNotificationFail = () => {
        notification.open({
          message: "Fail",
          description: "There are no more available items for this size",
        });
      };
    
    const url = `http://localhost:8080/online-shop/product/${title.title}`;
    axios
        .get(url)
        .then((response) => {
            setProduct({...product, name:response.data.name, price:response.data.price, sizes:response.data.sizes, _id:response.data._id});
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
                    <select className="product-select" value={product.selectedSize} onChange={e => setProduct({...product,selectedSize:e.target.value})}>
                            <option>Select Size</option>
                            <option value="s">S &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sizeArray[0]} remaining</option>
                            <option value="m">M &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sizeArray[1]} remaining</option>
                            <option value="l">L &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sizeArray[2]} remaining</option>
                            <option value="xl">XL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sizeArray[3]} remaining</option>
                        </select>
                    <button className="add-to-cart-button" onClick={handleClick}>Add to Cart</button>
             </div>
        </div>
        </div>

    );
}
export default ProductDetails;
