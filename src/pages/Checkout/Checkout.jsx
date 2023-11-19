import { Container, Grid } from "semantic-ui-react";
import "./Checkout.css"
import Product from "../../components/Product/Product";
import reactLogo from "../../assets/react.svg";
import Navbar from "../../components/Navbar/Navbar";
function Checkout() {
    
    return (
        <div className="home">
            <Navbar image={reactLogo}/>
            <Container>
                <Grid divided>
                    <Grid.Row>
                        {[...Array(1)].map((product, index) => {
                        return (
                            <Grid.Row>
                            <Grid.Column stretched key={index}>
                                <Product
                                    id={index}
                                    key={index}
                                    title="Placeholder"
                                    price="0"
                                    rating="5"
                                    image={reactLogo}
                                ></Product>
                            </Grid.Column>
                            </Grid.Row>
                        );
                        })}
                    </Grid.Row>
                   
                    
                </Grid>
            </Container>
        </div>

    );
}
export default Checkout;
