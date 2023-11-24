import { Card, Image, Button, Rating } from "semantic-ui-react";
import "./Product.css";
import { Link } from 'react-router-dom';
import { notification } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
function Product( props ) {
    const [shouldSubmit, setShouldSubmit] = useState(false);
    const handleClick = () => {
        const url = "http://localhost:8080/:userid/cart";
          axios
            .post(url, {
                props,
            })
            .then(() => {
              setShouldSubmit(true);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
              });
    }
    const openNotificationWithIcon = () => {
        notification.open({
          message: "Success",
          description: "Item has been addded to card!",
        });
      };
    
      
    
      useEffect(() => {
        if (shouldSubmit) {
          openNotificationWithIcon();
        }
      }, [shouldSubmit]);
    return (
        <div className="product product__card" >
                <div >
                    <Link to={`/product/${props.title}`}>   
                    <Card >
                    
                        <Image className="product__image" centered src={props.image} />
                        <Card.Content>
                        <Card.Header className="product__title">{props.title}</Card.Header>
                        <Card.Meta>
                            <Rating icon="star" defaultRating={props.rating} maxRating={5} />
                        </Card.Meta>
                        <Card.Description>
                            <span className="product__price">${props.price}</span>
                        </Card.Description>
                        </Card.Content>
                     
                        </Card>
                        </Link>
                </div>
                    <Card>
                        <Card.Content extra className="product__footer">
                        <Button inverted className="product__button" onClick={handleClick}>
                            ADD TO BASKET
                        </Button>
                        </Card.Content>
                    </Card>
        </div>

      );
}

export default Product;