import {useState} from 'react'
import './App.css';
import data from './data';
import PriceSelector from './components/PriceSelector';
import Cart from './components/Cart'
import Books from './components/Books'
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <Header />
      <PriceSelector />
      <Cart items={items} />
    <Books data={data} currency={currency} />
    </div>
  );
}

export default App;
