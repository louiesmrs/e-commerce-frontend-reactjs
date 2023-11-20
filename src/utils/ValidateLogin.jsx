import { useState } from "react";

export default function ValidateLogin({ email, password}) {
    const [errors, setErrors] = useState(
        {
            email: '',
            password: "",
        }
    )
    
      if (!email) {
        setErrors({...errors, email: "Email address is required"});
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        setErrors({...errors, email: "Email address is invalid"});
      }
      if (!password) {
        setErrors({...errors, password: "Password is required"});
      } else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)) {
            setErrors({...errors, password: "Password is invalid"});
      }
      return errors;
}