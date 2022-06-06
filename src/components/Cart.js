import React from 'react'

function Cart({items}) {
  return (
    <div className='cart'>
        {items.length} {items.length===1 ? 'item' : 'items'}
    </div>
  )
}

export default Cart