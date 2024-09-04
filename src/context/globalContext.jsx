import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlabalState = ({ children }) => {
  const [cart, setCart] = useState([]);

  function changeCart(newItem) {
    const doubleCart = [...cart];
    const index = doubleCart.findIndex((item) => item.id === newItem.id);
    if (index === -1) {
      doubleCart.push(newItem);
    } else {
      doubleCart.splice(index, 1);
    }
    setCart(doubleCart);
  }

  return (
    <GlobalContext.Provider value={{ cart,changeCart }}>
      {children }
    </GlobalContext.Provider>
  );
};

export default GlabalState;
