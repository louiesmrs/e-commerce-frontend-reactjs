
import { UseForm } from "../../utils/UseForm";
import validate from "../../utils/ValidateLogin";
import { Container, Grid, Button} from "semantic-ui-react";
import Navbar from "../../components/Navbar/Navbar";
import reactLogo from "../../assets/react.svg";

const Login = () => {
  const { values, errors, handleChange, handleSubmit } = UseForm(
    validate
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
        <Navbar image={reactLogo} />
        <Container>
        <Grid divided>
        <Grid.Row justify="space-between" align="middle">
            <Grid.Column >
                <form autoComplete="off" onSubmit={handleSubmit}>
                <Grid.Column span={24}>
                    <input
                    type="text"
                    name="email"
                    placeholder="Your Email"
                    value={values.email || ""}
                    onChange={handleChange}
                    />
                    <ValidationType type="email" />
                </Grid.Column>
                <Grid.Column span={24}>
                    <input
                    type="text"
                    name="password"
                    placeholder="Your Password"
                    value={values.password || ""}
                    onChange={handleChange}
                    />
                    <ValidationType type="password" />
                </Grid.Column>
                <Button name="submit">{"Submit"}</Button>
                </form>
            </Grid.Column>
        </Grid.Row>
        </Grid>
        </Container>
   
    </>
  );
};

export default Login;
