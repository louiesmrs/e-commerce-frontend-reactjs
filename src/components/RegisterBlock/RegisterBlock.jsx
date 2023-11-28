
import { Button, Form, Icon, Message } from 'semantic-ui-react'
import { useForm } from "../../utils/useForm";
import validate from "../../utils/ValidateRegister";
import Navbar from "..//Navbar/Navbar";
import './RegisterBlock.css'
import {
    QuestionOutlined,
    LoginOutlined
} from '@ant-design/icons';

const RegisterBlock = () => {
    const { values, errors, handleChange, handleSubmit } = useForm(
        validate, "register"
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
        <div className='reg'>
            <Message 
                attached
                header='Welcome to our site!'
                content='Fill out the form below to sign-up for a new account'
                />
            <Form className='attached fluid segment'>
            <Form.Group widths='equal'>
                <Form.Input
                fluid
                label='User Name'
                placeholder='User Name'
                type='text'
                value={values.name || ""}
                onChange={handleChange}
                />
                 <ValidationType type="name" />
            </Form.Group>
            <Form.Group>
                <Form.Input label='Email' placeholder='Username' type='text' value={values.email || ""}
                        onChange={handleChange} />
                <ValidationType type="email" />
            </Form.Group>
            <Form.Group>
                <Form.Input label='Password' type='password' value={values.password || ""}
                    onChange={handleChange} />
                    <p>Passwords must contain 1 number and 1 special character and between 6-16 characters</p>
                <ValidationType type="password" />
            </Form.Group>
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