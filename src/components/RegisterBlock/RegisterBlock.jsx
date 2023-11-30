
import { Button, Form, Icon, Message } from 'semantic-ui-react'
import { useForm } from "../../utils/useForm";
import validate from "../../utils/ValidateRegister";
import Navbar from "..//Navbar/Navbar";
import './RegisterBlock.css'
import {
    QuestionOutlined,
    LoginOutlined
} from '@ant-design/icons';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../utils/useAuth';
import { useNavigate } from "react-router-dom";
const RegisterBlock = () => {
    const { values, errors, handleChange, handleSubmit, shouldSubmit } = useForm(
        validate, "addUser"
      );
    const navigate = useNavigate();
    const { register, isLoggedIn } = useContext(AuthContext);

    useEffect(() => {
        console.log(values.email);
        console.log(values.admin);
        if(shouldSubmit) {
            register(values.email, values.admin);
        }
    }, [shouldSubmit])

    useEffect(() => {
        console.log(isLoggedIn);
        if(isLoggedIn) {
            navigate(`/profile`);
        }
    }, [isLoggedIn]);

    useEffect(() => {
        values.admin = false;
    }, [values.admin])
      
    const ValidationType = ({ type }) => {
    const ErrorMessage = errors[type];
    return (
        <>
        <span className='span' erros={errors[type]}>{ErrorMessage}</span>
        </>
    );
    };

      
    return (
    <>
        <Navbar />
        <div className='reg'>
            <Message 
                attached
                header='Welcome to our site!'
                content='Fill out the form below to sign-up for a new account'
                />
            <Form className='attached fluid segment'>
            
            <Form.Group>
            <input className="ui"
                    type="text"
                    name="email"
                    placeholder="Your Email"
                    value={values.email || ""}
                    onChange={handleChange}
                    />
                <ValidationType type="email" />
            </Form.Group>
            <Form.Group>
            <input className="ui"
                    type="password"
                    name="password"
                    placeholder="Your Password"
                    value={values.password || ""}
                    onChange={handleChange}
                    />
                <ValidationType type="password" />
            </Form.Group>
            <p>Passwords must contain 1 number and 1 special character and between 6-16 characters</p>
            <Button className='submit' color='blue' onClick={handleSubmit}>Submit</Button>
            <LoginOutlined />
            </Form>
            <Message attached='bottom' warning>
            <QuestionOutlined />
            <Icon className='login' />
            Already signed up?&nbsp;<a href='/Login'>Login here</a>&nbsp;instead.
            </Message>
        </div>
    </>
    );
    }

export default RegisterBlock;