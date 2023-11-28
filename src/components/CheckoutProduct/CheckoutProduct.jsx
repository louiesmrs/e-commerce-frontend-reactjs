import { Card, Image, Button, Rating, CardDescription } from "semantic-ui-react";
import "./CheckoutProduct.css";
import { Link } from 'react-router-dom';
import { notification } from "antd";
import { useContext, useState } from "react";
import { CartContext } from "../../utils/cartUtil";
function CheckoutProduct( props ) {
    const { addToCart, removeFromCart } = useContext(CartContext);
    const [product, setProduct] = useState(
        {
            _id:props.id,
            name:props.name,
            price:props.price,
            sizes:props.sizes,
            quantity:props.quantity,
            selectedSize:props.selectedSize
        }
    );
   
    const handleRemoveFromCart = () => {
        removeFromCart(product);
        openNotificationWithIcon();
      
    }
    const openNotificationWithIcon = () => {
        notification.open({
          message: "Success",
          description: "Item has been removed from card!",
          placement: "topLeft",
        });
      };

    const notfiNoRemainingSizes = () => {
        notification.open({
          message: "Sorry",
          description: "There are no more avaiable size in this item",
          placement: "topLeft",
        });
      };
    
      
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
                        <CardDescription>
                             <span className="product__price">Size {props.selectedSize}</span>
                        </CardDescription>
                        </Card.Content>
                     
                        </Card>
                        </Link>
                </div>
                    <div >
                    <Card>
                        <Card.Content extra className="product__footer">
                        <Button
                            className="product__button"
                            onClick={() => {
                                if(!addToCart(product)) {
                                    notfiNoRemainingSizes();   
                                }
                            }}
                            >
                            +
                            </Button>
                            <p>{props.quantity}</p>
                            <Button
                            className="product__button"
                            onClick={() => {
                                if (props.quantity === 1) {
                                handleRemoveFromCart(product);
                                } else {
                                removeFromCart(product);
                                }
                            }}
                            >
                            -
                            </Button>
                        </Card.Content>
                    </Card>
                    </div>
        </div>

      );
}

export default CheckoutProduct;