import {createContext, useContext,useState} from 'react';

const CurrencyContext=createContext();

export const CurrencyProvider=({children})=>{

    const [currency, setCurrency] = useState('USD');

    const handleCurrency=(selected)=>{
      console.log(selected)
      setCurrency(selected)
      }
    return (
        <CurrencyContext.Provider value={{currency,handleCurrency}}>
            {children}
        </CurrencyContext.Provider>
    )
}
export const useCurrency=()=>useContext(CartContext)