import { Container, Grid } from "semantic-ui-react";
import "./Home.css"
import Product from "../../components/Product/Product";
import reactLogo from "../../assets/react.svg";
import Navbar from "../../components/Navbar/Navbar";

function Home() {
    
    return (
        <div className="home">
            <Navbar />
            <Container>
                <Grid divided>
                    <Grid.Row>
                        {[...Array(4)].map((product, index) => {
                        return (
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
                            
                        );
                        })}
                    </Grid.Row>
                   
                    
                </Grid>
            </Container>
        </div>

    );
}
export default Home;
