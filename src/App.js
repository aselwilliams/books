import {useState} from 'react'
import './App.css';
import data from './data';
import PriceSelector from './components/PriceSelector';
import Cart from './components/Cart'
import Books from './components/Books'
import Header from './components/Header';

function App() {

  const [currency, setCurrency] = useState('USD');
  const [items, setItems] = useState([])
 

  const handleCurrency=(selected)=>{
    console.log(selected)
    setCurrency(selected)
    }
    const handleAdd=(book)=>{
     if(!items.some((item)=>item.id===book.id)){
       let newItems=[...items, book]
       setItems(newItems)
     }
    }
  return (
    <div className="App">
      <Header />
      <PriceSelector handleCurrency={handleCurrency} />
      <Cart items={items} />
    <Books data={data} handleAdd={handleAdd} items={items} currency={currency} />
    </div>
  );
}

export default App;
