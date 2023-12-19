import "./App.css";
import { AvailableProducts } from "./components/AvaliableProducts";
import { Cart } from "./components/Cart";
import { Total } from "./components/Total";

function App() {
  return (
    <>
      <Total />
      <AvailableProducts />
      <Cart />
    </>
  );
}

export default App;
