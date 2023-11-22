
import { lazy } from "react";
import ContactBlock from "../../components/ContactBlock/ContactBlock";
const RegisterBlock = lazy(() => import("../../components/ContactBlock/ContactBlock"));
const Contact = () => {
  

  return (
    <>
       <ContactBlock />
    </>
  );
};

export default Contact;
