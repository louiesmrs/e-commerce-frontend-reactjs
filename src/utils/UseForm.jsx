import { useState, useEffect } from "react";
import axios from "axios";
import { notification } from "antd";
export const useForm = ( validate, type ) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const openNotificationWithIcon = () => {
    notification.open({
      message: "Success",
      description: "Your message has been sent!",
      placement: "topLeft",
    });
  };

  const openNotificationRegistrationFailed = () => {
    notification.open({
      message: "Failure",
      description: "Email has already been registered to an account. Please log in",
      placement: "topLeft",
    });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    // Your url for API
    const url = `http://localhost:8080/online-shop/${type}`;
    if (Object.keys(values).length === 3) {
      axios
        .post(url, {
          ...values,
        })
        .then(() => {
          setShouldSubmit(true);
        })
        .catch(function (error) {
            if(error.response && type == "addUser") {
              openNotificationRegistrationFailed();
              setValues("");
            }
            // handle error
            console.log(error);
          });
    }
  };


  useEffect(() => {
    if (Object.values(errors)[0] === "" && Object.values(errors)[1] === "" && Object.values(errors)[2] === ""  && shouldSubmit) {
      setValues("");
      openNotificationWithIcon();
      setShouldSubmit(false);
    }
  }, [errors, shouldSubmit]);

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    shouldSubmit
  };
};
