import { useState, useEffect } from "react";
import axios from "axios";
import { notification } from "antd";
export const useForm = (validate, type) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const openNotificationWithIcon = () => {
    console.log("notif")
    notification.open({
      message: "Success",
      description: "Your message has been sent!",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    // Your url for API
    const url = `http://localhost:8080/${type}`;
    setShouldSubmit(true);
    if (Object.keys(values).length === 3) {
      axios
        .post(url, {
          ...values,
        })
        .then(() => {
          setShouldSubmit(true);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
          });
    }
  };


  useEffect(() => {
    console.log(errors);
    console.log(Object.values(errors)[0] === "");
    console.log(Object.values(errors)[1] === "");
    console.log(Object.values(errors)[2] === "");
    if (Object.values(errors)[0] === "" && Object.values(errors)[1] === "" && Object.values(errors)[2] === ""  && shouldSubmit) {
      setValues("");
      openNotificationWithIcon();
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
