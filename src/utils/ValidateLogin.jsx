

export default function ValidateLogin({ email, password}) {
    let errorsList = 
        {
            email: '',
            password: ''
        };
      if (!email) {
        errorsList.email = "Email address is required";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        errorsList.email = "Email address is Invalid";
      }
      if (!password) {
        errorsList.password = "Password is required";
      }
      return errorsList;
}