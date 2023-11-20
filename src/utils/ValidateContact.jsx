

function ValidateContact({ email, name, message}) {

    let errorsList = {
        email: '',
        name: '',
        message:''
    };
    if (!name) {
        errorsList.name = "Name is required";
      }
      if (!email) {
        errorsList.email = "Email address is required";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        errorsList.email = "Email address is Invalid";
      }
      if (!message) {
        errorsList.message = "Message is required";
      }
      return errorsList;
}

export default ValidateContact;

// function ValidateContact({ email, name, message}) {
//     const [errors, setErrors] = useState(
//        []
//     );
//     let errorsList = {}
//     if (!name) {
//         setErrors({...errors, name: "Name is required"});
//       }
//       if (!email) {
//         setErrors({...errors, email: "Email address is required"});
//       } else if (!/\S+@\S+\.\S+/.test(email)) {
//         setErrors({...errors, email: "Email address is invalid"});
//       }
//       if (!message) {
//         setErrors({...errors, message: "Message is required"});
//       }
//       return errors;
// }

// export default ValidateContact;