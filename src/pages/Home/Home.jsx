import { Container, Grid } from "semantic-ui-react";
import "./Home.css"
import Product from "../../components/Product/Product";
import reactLogo from "../../assets/react.svg";
import Navbar from "../../components/Navbar/Navbar";
function Home() {
    
    return (
        <div className="home">
            <Navbar image={reactLogo}/>
            <Container>
                <Grid divided>
                    <Grid.Row>
                        {[...Array(4)].map((product, index) => {
                        return (
                            <Grid.Row>
                            <Grid.Column >
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
export default Home;
