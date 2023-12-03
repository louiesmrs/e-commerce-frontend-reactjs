


function ValidateCheckout({ email, postcode }) {

    let errorsList = {
        email: '',
        postcode:''
    };
   
      if (!email) {
        errorsList.email = "Email address is required";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        errorsList.email = "Email address is Invalid";
      }
      if (!postcode) {
        errorsList.postcode = "Postcode is required";
      } else if(!/^[AC-Y]{1}[0-9]{1}[0-9W]{1}[ \-]?[0-9AC-Y]{4}$/.test(postcode)) {
        errorsList.postcode = "Postcode not valid";
      }
      return errorsList;
}

export default ValidateCheckout;

