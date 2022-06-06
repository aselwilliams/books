import React from 'react';
import {useCart} from '../context/CartContext'

function Cart() {
const {items} =useCart()
  return (
    <div className='cart'>
        {items.length} {items.length===1 ? 'item' : 'items'}
    </div>
  )
}

export default Cart