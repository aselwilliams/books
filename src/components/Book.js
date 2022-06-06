import React from 'react';
import {useCart} from '../context/CartContext'
import { useCurrency } from '../context/CurrencyContext';

function Book({book}) {
    const {items, handleAdd, handleDelete} = useCart();
    const {currency} =useCurrency()

    const isAdded=items.some((item)=>item.id===book.id)
  return (
    <div>
    <img src={book.image} alt={book.title} />
    <h2>{book.title}</h2>
    <h3>{currency==='USD' ? '$' : '€'}{book.price}</h3>
    <button onClick={isAdded ? ()=>handleDelete(book) : ()=>handleAdd(book)}>{isAdded ? 'Remove from Cart' : 'Add to Cart'}</button>
  </div>
  )
}

export default Book