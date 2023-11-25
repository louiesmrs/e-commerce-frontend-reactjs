import PropTypes from 'prop-types'
import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [])

  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem._id === item._id && cartItem.selectedSize === item.selectedSize);
        if (isItemInCart) {
            if(checkSelectedSize(isItemInCart)){
                setCartItems(
                    cartItems.map((cartItem) =>
                    cartItem._id === item._id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                    )
                );
            } else {
                return false;
            }
        } else {
        setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
        return true;
        };

  const checkSelectedSize = (item) => {
    console.log(item);
    let numberAvailable;
    const sizeArray = item.sizes.split(" ");
    switch(item.selectedSize) {
        case "s":
            numberAvailable = sizeArray[0];
        break;
        case "m":
            numberAvailable = sizeArray[1];
        break;
        case "l":
            numberAvailable = sizeArray[2];
        break;
        case "xl":
            numberAvailable = sizeArray[3];
        break; 
    }
    console.log(numberAvailable);
    console.log(item.quantity);
    return numberAvailable > item.quantity;
}

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem._id === item._id);

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem._id !== item._id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return Math.round(cartItems.reduce((total, item) => total + item.price * item.quantity, 0) * 100) / 100;
  };

  useEffect(() => {
    const data = localStorage.getItem('cartItems');
    if (data) {
      setCartItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]); // Include cartItems as a dependency here

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};