import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import CartProvider from './components/store/CartProvider'
function App() {
  const [cartIsShown, setcartIsShown]=useState(false);

  const showCartHandler = ()=>{
    setcartIsShown(true);
  }
   const hideCartHandler = () => {
     setcartIsShown(false);
   };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onshowCart = {showCartHandler}></Header>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
