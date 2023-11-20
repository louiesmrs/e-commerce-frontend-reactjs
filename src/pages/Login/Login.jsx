
import { useForm } from "../../utils/useForm";
import validate from "../../utils/ValidateLogin";
import { Container, Grid, Button, Form, Icon} from "semantic-ui-react";
import Navbar from "../../components/Navbar/Navbar";
import './Login.css'
import {
  LoginOutlined
} from '@ant-design/icons';


const Login = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
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
        <Navbar />
        <Container>
        <Grid divided>
        <Grid.Row justify="space-between" align="middle">
            <Grid.Column >
                <form autoComplete="off" >
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
                    <p>Passwords must contain 1 number and 1 special character</p>
                    <ValidationType type="password" />
                </Grid.Column>
                <Button className="submit" onClick={handleSubmit}>{"Submit"}</Button>
                <LoginOutlined />
                </form>
            </Grid.Column>
        </Grid.Row>
        </Grid>
        </Container>
   
    </>
  );
};

export default Login;
