import { Card } from "semantic-ui-react";
import "./Order.css";

function Order( props ) {
  
    
    return (
        <div className="product product__card" >
                <div >
                      
                    <Card >
                    
                        <Card.Content>
                        <Card.Header className="product__title">ORDER</Card.Header>
                        <Card.Description>
                            <span className="product__price">${props.total}</span>
                        </Card.Description>
                        <Card.Description>
                            <span className="product__price">{props.postcode}</span>
                        </Card.Description>
                        <Card.Description>
                            <span className="product__price">{props.email}</span>
                        </Card.Description>
                        </Card.Content>
                        <Card.Content>
                        {[...props.items].map((product, index) => {
                          const arr = product.split(" ");
                          return (
                            <Card.Description  key={index}>
                                <span className="product__price">Name: {arr[0]} Size: {arr[1]} Quantity: {arr[2]}</span>
                            </Card.Description>
                        );
                          })}
                        </Card.Content>
                     
                        </Card>
                </div>
        </div>

      );
}



export default Order;