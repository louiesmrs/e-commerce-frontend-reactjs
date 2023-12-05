


import { Container, Grid, Button} from "semantic-ui-react";
import Navbar from "../Navbar/Navbar";
import './LoginBlock.css'
import {
  LoginOutlined
} from '@ant-design/icons';
import { AuthContext } from "../../utils/useAuth";
import { useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";

const LoginBlock = () => {
  const { values, errors, handleChange, handleSubmit, isLoggedIn} = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(isLoggedIn) {
        navigate(`/profile`);
    }
}, [isLoggedIn]);

  
  
  const ValidationType = ({ type }) => {
    const ErrorMessage = errors[type];
    return (
      <>
        <span className="span" erros={errors[type]}>{ErrorMessage}</span>
     </>
    );
  };

 

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
                    name="email"
                    placeholder="Your Email"
                    value={values.email || ""}
                    onChange={handleChange}
                    />
                    <ValidationType type="email" />
                </Grid.Column>
                <Grid.Column span={24}>
                    <input className="ui"
                    type="password"
                    name="password"
                    placeholder="Your Password"
                    value={values.password || ""}
                    onChange={handleChange}
                    />
                    
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

export default LoginBlock;