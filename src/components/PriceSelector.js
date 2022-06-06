import React from 'react';
import {useCurrency} from '../context/CurrencyContext'

function PriceSelector() {
    const {handleCurrency} =useCurrency()
  return (
    <div className='icon-wrapper'>
       <img className='icon' src= "https://m.media-amazon.com/images/I/51XSXMvcp0L._AC_SX679_.jpg" onClick={()=>handleCurrency('USD')} alt='currency'/>
       <img className='icon' src= "https://m.media-amazon.com/images/I/51Rre7jy18L._AC_UL640_FMwebp_QL65_.jpg" onClick={()=>handleCurrency('EU')} alt='currency' />
    </div>
  )
}

export default PriceSelector