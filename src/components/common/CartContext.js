import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error('Ошибка при загрузке из localStorage:', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cartItems));
      console.log('(localStorage) Сохранено:', cartItems);
    } catch (error) {
      console.error('(localStorage) Ошибка:', error);
    }
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((i) => i.id === item.id);

      if (itemExists) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });

    console.log('add/upd:', item);
  };

  const decreaseQuantity = (item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((i) => i.id === item.id);

      if (itemExists && itemExists.quantity > 1) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
        );
      } else {
        return prevItems.filter((i) => i.id !== item.id);
      }
    });
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
    console.log('Удалено:', item);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, decreaseQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
