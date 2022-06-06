import React from 'react'

function Book({book, currency,handleAdd, items}) {

    const isAdded=items.some((item)=>item.id===book.id)
  return (
    <div>
    <img src={book.image} alt={book.title} />
    <h2>{book.title}</h2>
    <h3>{currency==='USD' ? '$' : '€'}{book.price}</h3>
    <button onClick={()=>handleAdd(book)}>{isAdded ? 'Remove from Cart' : 'Add to Cart'}</button>
  </div>
  )
}

export default Book