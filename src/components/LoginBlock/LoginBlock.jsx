
import { useForm } from "../../utils/useForm";
import validate from "../../utils/ValidateLogin";
import { Container, Grid, Button} from "semantic-ui-react";
import Navbar from "../Navbar/Navbar";
import './LoginBlock.css'
import {
  LoginOutlined
} from '@ant-design/icons';
import { useState, useEffect } from "react";


const LoginBlock = () => {
  const { values, errors, handleChange, handleSubmit, shouldSubmit } = useForm(
    validate, "login"
  );

  
  const [showLogin, setShowLogin] = useState(true);
  const ValidationType = ({ type }) => {
    const ErrorMessage = errors[type];
    return (
      <>
        <span className="span" erros={errors[type]}>{ErrorMessage}</span>
     </>
    );
  };

  useEffect(() => {
    if(errors.name === "" 
        && errors.email === "" && errors.password === "" 
            && values.message !== "" && values.email !== "" && values.password !== "" && shouldSubmit) {
    setShowLogin(false);
  }},[]);

  return (
    <>
        <Navbar  />
        <Container className="login-card">
        <Grid divided>
        <Grid.Row justify="space-between" align="middle">
            <Grid.Column >
                <form autoComplete="off" >
                <Grid.Column span={24}>
                    <input className="ui"
                    type="text"
                    name="name"
                    placeholder="Your Username"
                    value={values.name || ""}
                    onChange={handleChange}
                    />
                    <ValidationType type="name" />
                </Grid.Column>
                <Grid.Column span={24}>
                    <input className="ui"
                    type="text"
                    name="email"
                    placeholder="Your Email"
                    value={values.email || ""}
                    onChange={handleChange}
                    />
                    <ValidationType type="email" />
                </Grid.Column>
                <Grid.Column span={24}>
                    <input className="ui"
                    type="text"
                    name="password"
                    placeholder="Your Password"
                    value={values.password || ""}
                    onChange={handleChange}
                    />
                    
                    <ValidationType type="password" />
                </Grid.Column>
                <p>Passwords must contain 1 number and 1 special character and between 6-16 characters</p>
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

export default LoginBlock;