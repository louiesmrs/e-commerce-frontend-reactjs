import { lazy } from "react";
const RegisterBlock = lazy(() => import("../../components/RegisterBlock/RegisterBlock"));
const Register = () => {

    return (
    <>
       <RegisterBlock />
    </>
    );
    }

export default Register;