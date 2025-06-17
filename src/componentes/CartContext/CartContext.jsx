import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (produto) => {
    setCartItems((prevItems) => {
      const itemExistente = prevItems.find((item) => item.id === produto.id);

      if (itemExistente) {
        return prevItems.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + produto.quantidade }
            : item
        );
      } else {
        return [...prevItems, produto];
      }
    });
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
