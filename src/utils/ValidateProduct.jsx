

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
      if (!sizes) {
        errorsList.sizes= "Sizes are required";
      } else if(!/^(?!(?:\S*\s){4})([0-9\'\s]+)$/.test(sizes)) {
        errorsList.sizes= "Sizes must be numbers seperated by 4 whitespaces";
      }
      return errorsList;
}

export default ValidateProduct;