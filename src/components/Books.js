import React from 'react';
import Book from './Book'


function Books({data,currency,handleAdd,items}) {
    // const [books, setBooks] = useState(data)
  return (
    <div className='books'>
        {data.map((book,index)=>{
            return (
                <Book book={book} key={book.id} items={items} currency={currency} handleAdd={handleAdd} />
            )
        }
            )}
    </div>
  )
}

export default Books