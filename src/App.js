import {useState} from 'react'
import './App.css';
import data from './data';
import PriceSelector from './components/PriceSelector';
import Cart from './components/Cart'
import Books from './components/Books'
import Header from './components/Header';

function App() {

  const [currency, setCurrency] = useState('USD');
  const handleCurrency=(selected)=>{
    console.log(selected)
    setCurrency(selected)
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
