
import { Container, Grid, Button} from "semantic-ui-react";
import { useForm } from "../../utils/useForm";
import "./SellBlock.css"
import Navbar from "../../components/Navbar/Navbar";
import validate from "../../utils/ValidateProduct";
function SellBlock() {

    const { values, errors, handleChange, handleSubmit } = useForm(
        validate, "product"
      );
    
  
    const ValidationType = ({ type }) => {
        const ErrorMessage = errors[type];
        return (
          <>
            <span erros={errors[type]}>{ErrorMessage}</span>
         </>
        );
      };
    
    return (
       <> 
        <Navbar showLogin={true} />
        <Container className="sell-card">
        <Grid divided>
        <Grid.Row justify="space-between" align="middle">
            <Grid.Column >
                <form autoComplete="off" >
                <Grid.Column span={24}>
                    <input
                    type="text"
                    name="name"
                    placeholder="Name of product"
                    value={values.name || ""}
                    onChange={handleChange}
                    />
                    <ValidationType type="name" />
                </Grid.Column>
                <Grid.Column span={24}>
                    <input
                    type="text"
                    name="price"
                    placeholder="Price of Product"
                    value={values.price || ""}
                    onChange={handleChange}
                    />
                    <ValidationType type="price" />
                </Grid.Column>
                <Grid.Column span={24}>
                    <input
                    type="text"
                    name="sizes"
                    placeholder="Size of Product"
                    value={values.sizes || ""}
                    onChange={handleChange}
                    />
                    <p>Sizes must be S M L XS seperated each by a single space character</p>
                    <ValidationType type="sizes" />
                </Grid.Column>
                <Button className="submit" onClick={handleSubmit}>{"Submit"}</Button>
                </form>
            </Grid.Column>
        </Grid.Row>
        </Grid>
        </Container>
   
    </>

    );
}
export default SellBlock;
