

export default function ValidateLogin({ name, email, password}) {
    let errorsList = 
        {
            name: '',
            email: '',
            password: ''
        };
      if (!name) {
          errorsList.name = "Name is required";
      }
      if (!email) {
        errorsList.email = "Email address is required";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        errorsList.email = "Email address is Invalid";
      }
      if (!password) {
        errorsList.password = "Password is required";
      } else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)) {
            errorsList.password =  "Password is invalid";
      }
      return errorsList;
}