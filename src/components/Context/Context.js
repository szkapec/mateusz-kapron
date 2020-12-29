import React, { useState, createContext } from "react";
export const CartContext = createContext(null);

export default function CartProvider({ children }) {
    const [data, setData] = useState('')
    const [menu,setMenu] = useState(true)
    const [, setLeanguage] = useState('')
    
  function changeMenu(item) {
    setMenu(item)
  }
  function changeLanguage(item) {
          setData(item)
    } 
  function language(item) {
          setLeanguage(item)
    } 
  return (
    <CartContext.Provider
      value={{
        changeLanguage: changeLanguage,
        changeMenu: changeMenu,
        language: language,
        menu,
        data,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}