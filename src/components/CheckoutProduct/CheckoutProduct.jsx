import { Card, Image, Button, Rating } from "semantic-ui-react";
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
    const sizeArray = props.sizes.split(" ");
    const checkSelectedSize = () => {
        let numberAvailable;
        switch(product.selectedSize) {
            case "s":
                numberAvailable = sizeArray[0];
            break;
            case "m":
                numberAvailable = sizeArray[1];
            break;
            case "l":
                numberAvailable = sizeArray[2];
            break;
            case "xl":
                numberAvailable = sizeArray[3];
            break; 
        }
        console.log(numberAvailable);
        console.log(product.quantity);
        return numberAvailable > product.quantity;
    }
    
    const handleRemoveFromCart = () => {
        removeFromCart(product);
        openNotificationWithIcon();
      
    }
    const openNotificationWithIcon = () => {
        notification.open({
          message: "Success",
          description: "Item has been removed from card!",
        });
      };

    const notfiNoRemainingSizes = () => {
        notification.open({
          message: "Sorry",
          description: "There are no more avaiable size in this item",
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
                        </Card.Content>
                     
                        </Card>
                        </Link>
                </div>
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

      );
}

export default CheckoutProduct;