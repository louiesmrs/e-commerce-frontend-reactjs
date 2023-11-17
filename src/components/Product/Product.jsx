import { Card, Image, Button, Rating } from "semantic-ui-react";
import "./Product.css";

function Product( {id, title, price, rating, image}) {
    return (
        <div className="product">
          <Card className="product__card">
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