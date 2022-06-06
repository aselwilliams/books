import React from 'react';
import {useCart} from '../context/CartContext'

function Book({book, currency}) {
    const {items, handleDelete, handleDelete} = useCart();

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