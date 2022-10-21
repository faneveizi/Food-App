import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
function App(props) {
  const [isShown, setIsShown] = useState(false)
  const showCartHandler = () => {
    setIsShown(true);
  }
  const hideCartHandler = () => {
    setIsShown(false);
  }
  
  return (
    <CartProvider>
      <Header onActivateCart={showCartHandler} />
      {isShown && <Cart onClose={hideCartHandler} />}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
