import {createContext, useContext, useState} from 'react';

const CartContext=createContext();

export const CartProvider=({children})=>{
    const [items, setItems] = useState([])
 
      const handleAdd=(book)=>{
       if(!items.some((item)=>item.id===book.id)){
         let newItems=[...items, book]
         setItems(newItems)
       }
      }

      const handleDelete=(book)=>{
          if(items.some((item)=>item.id===book.id)){
              setItems(items.filter((item)=>item.id!==book.id))
          }
      }
    return (
        <CartContext.Provider value={{items, handleAdd, handleDelete}} >
        {children}
        </CartContext.Provider>
    )
}

export const useCart=()=>useContext(CartContext);