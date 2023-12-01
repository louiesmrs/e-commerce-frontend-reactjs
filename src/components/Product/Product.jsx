import { Card, Image, Button, Rating } from "semantic-ui-react";
import "./Product.css";
import { Link } from 'react-router-dom';
import { notification } from "antd";
import { useContext, useState } from "react";
import { CartContext } from "../../utils/cartUtil";
function Product( props ) {
    const { addToCart } = useContext(CartContext);
    const [product, setProduct] = useState(
        {
            name:props.name,
            price:props.price,
            selectedSize: 's',
            sizes:props.sizes,
            
        }
    );
    
    
    const handleInput = () => {
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
          placement: "topLeft"
        });
      };
    const openNotificationFail = () => {
        notification.open({
          message: "Fail",
          description: "There are no more available items for this size",
          placement: "topLeft"
        });
      };
    const sizeArray = props.sizes.split(" ");
      
    return (
        <div className="product product__card" >
                <div >
                    <Link to={`/product/${props.name}`}>   
                    <Card >
                    
                        <Image className="product__image" centered src={props.image} />
                        <Card.Content>
                        <Card.Header className="product__title">{props.name}</Card.Header>
                        <Card.Description>
                            <span className="product__price">${props.price}</span>
                        </Card.Description>
                        </Card.Content>
                     
                        </Card>
                        </Link>
                </div>
                    <Card>
                        <Card.Content extra className="product__footer">
                        <select className="product-select" value={product.selectedSize} onChange={e => setProduct({...product, selectedSize : e.target.value})}>
                            <option value="s">S &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sizeArray[0]} remaining</option>
                            <option value="m">M &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sizeArray[1]} remaining</option>
                            <option value="l">L &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sizeArray[2]} remaining</option>
                            <option value="xl">XL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sizeArray[3]} remaining</option>
                        </select>
                        
                        </Card.Content>
                        <button className="product__button" onClick={handleInput}>Add to Cart</button>
                    </Card>
        </div>

      );
}

export default Product;