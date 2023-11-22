
import { lazy } from 'react';
const LoginBlock = lazy(() => import("../../components/LoginBlock/LoginBlock"));
const Login = () => {
  
  return (
    <>
      <LoginBlock /> 
    </>
  );
};

export default Login;
