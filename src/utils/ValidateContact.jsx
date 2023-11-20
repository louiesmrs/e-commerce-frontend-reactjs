import { useState } from "react";

export default function ValidateContact({ email, name, message}) {
    const [errors, setErrors] = useState(
        {
            email: '',
            name: "",
            message: ""
        }
    )
    if (!name) {
        setErrors({...errors, name: "Name is required"});
      }
      if (!email) {
        setErrors({...errors, email: "Email address is required"});
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        setErrors({...errors, email: "Email address is invalid"});
      }
      if (!message) {
        setErrors({...errors, message: "Message is required"});
      }
      return errors;
}