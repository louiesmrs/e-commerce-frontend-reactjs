

function ValidateProduct({ name, price, sizes}) {

    let errorsList = {
        name: '',
        price: '',
        sizes: ''
    };
    if (!name) {
        errorsList.name = "Name is required";
      }
      if (!price) {
        errorsList.price = "Price is required";
      } else if(!/^\d+$/.test(price)) {
        errorsList.price = "Price must be a number";
      }
      if (sizes === "0 0 0 0") {
        errorsList.sizes= "Sizes are required";
      } 
      return errorsList;
}

export default ValidateProduct;

{
    //else if(!/^(?!(?:\S*\s){3})([0-9\'\s]+)$/.test(sizes)) {
    //     errorsList.sizes= "Sizes must be numbers seperated by 3 whitespaces";
    //   }
}