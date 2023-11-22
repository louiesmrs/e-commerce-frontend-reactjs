import { Card, Image, Button, Rating } from "semantic-ui-react";
import "./Product.css";
import { Link } from 'react-router-dom';
function Product( {id, title, price, rating, image}) {
   
    return (
        <div className="product product__card" >
                <div >
                    <Link to={`/product/${title}`}>   
                    <Card >
                    
                        <Image className="product__image" centered src={image} />
                        <Card.Content>
                        <Card.Header className="product__title">{title}</Card.Header>
                        <Card.Meta>
                            <Rating icon="star" defaultRating={rating} maxRating={5} />
                        </Card.Meta>
                        <Card.Description>
                            <span className="product__price">${price}</span>
                        </Card.Description>
                        </Card.Content>
                     
                        </Card>
                        </Link>
                </div>
                    <Card>
                        <Card.Content extra className="product__footer">
                        <Button inverted className="product__button">
                            ADD TO BASKET
                        </Button>
                        </Card.Content>
                    </Card>
        </div>

      );
}

export default Product;