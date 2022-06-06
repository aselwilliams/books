import "./App.css";
import data from "./data";
import PriceSelector from "./components/PriceSelector";
import Cart from "./components/Cart";
import Books from "./components/Books";
import Header from "./components/Header";
import { CartProvider } from "./context/CartContext";
import { CurrencyProvider } from "./context/CurrencyContext";

function App() {
  return (
    <CartProvider>
      <CurrencyProvider>
        <Header />
        <PriceSelector />
        <Cart />
        <Books data={data} />
      </CurrencyProvider>
    </CartProvider>
  );
}

export default App;
