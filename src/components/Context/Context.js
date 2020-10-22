import React, { useState, createContext } from "react";
import db from '../../db.json';
export const CartContext = createContext(null);

export default function CartProvider({ children }) {
    const [data, setData] = useState(db)
    const [menu,setMenu] = useState(true)

    
  function changeMenu(item) {
    setMenu(item)
  }
  function changeLeanguage(item) {
          setData(item)
    } 
  return (
    <CartContext.Provider
      value={{
        changeLeanguage: changeLeanguage,
        changeMenu: changeMenu,
        menu,
        data,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}