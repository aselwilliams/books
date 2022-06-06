import {createContext, useContext,useState} from 'react';

const CurrencyContext=createContext();

export const CurrencyProvider=({children})=>{

    return (
        <CurrencyContext.Provider value={{}}>
            {children}
        </CurrencyContext.Provider>
    )
}