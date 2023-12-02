import { useState, useContext, useEffect} from "react";
import "./ProductDetails.css"
import reactLogo from "../../assets/react.svg";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { notification } from "antd";
import { CartContext } from "../../utils/cartUtil";
import { Select } from 'antd'
function ProductDetails() {
    const title = useParams();
    const { addToCart } = useContext(CartContext);
    const [product, setProduct] = useState(
        {
            name:'',
            price:'',
            sizes:'',
            selectedSize: 's',
            image:''

        }
    );

   
    useEffect(() => {
        const url = `http://localhost:8080/online-shop/product/${title.title}`;
        axios
            .get(url)
            .then((response) => {
               
                setProduct({...product, name:response.data.name, price:response.data.price, sizes:response.data.sizes, image:response.data.image});
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                });
    }, [product])
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
          placement: "topLeft",
        });
      };
    const openNotificationFail = () => {
        notification.open({
          message: "Fail",
          description: "There are no more available items for this size",
          placement: "topLeft",
        });
      };
    
    const handleChange = (value) => {
        setProduct({...product, selectedSize: value});
    }
    const sizeArray = product.sizes.split(" ");
  
    
    return (
        <div className="home">
            <Navbar />
            <div className="product-detail-container">
                <div className="product-image-container">
                    <img src={`data:image/jpeg;base64,${product.image}`} alt="Product" />
                </div>
                <div className="product-info-container">
                    <h1>{title.title}</h1>
                    <p className="product-description"> This is the description </p>
                    <div className="product-price">
                        {product.price}$
                    </div>
                    <Select
                        className="product-select"
                        defaultValue="Small"
                        onChange={handleChange}
                        options={[
                            { value: 's', label: 'Small '  + sizeArray[0] + ' remaining'},
                            { value: 'm', label: 'Medium ' + sizeArray[1] + ' remaining' },
                            { value: 'l', label: 'Large ' + sizeArray[2] + ' remaining' },
                            { value: 'xl', label: 'Extra Large ' + sizeArray[3] + ' remaining'},
                        ]}
                         />
                    <button className="add-to-cart-button" onClick={handleClick}>Add to Cart</button>
             </div>
        </div>
        </div>

    );
}
export default ProductDetails;


{
//     <select className="product-select" value={product.selectedSize} onChange={handleChange}>
//     <option value="s">S &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sizeArray[0]} remaining</option>
//     <option value="m">M &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sizeArray[1]} remaining</option>
//     <option value="l">L &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sizeArray[2]} remaining</option>
//     <option value="xl">XL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sizeArray[3]} remaining</option>
// </select>
}