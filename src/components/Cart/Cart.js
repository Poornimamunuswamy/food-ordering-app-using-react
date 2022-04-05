import { useContext } from "react";
import classes from "../UI/Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../store/cart-context";
import CartItem from "../Cart/CartItem";
const Cart = (props) => {
  const cartItemsCtx = useContext(CartContext);
  const cartTotal = `Rs. ${cartItemsCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartItemsCtx.items.length > 0;
  const removeItemHandler = (id) => {
    cartItemsCtx.removeItem(id);
  };
  const addItemHandler = (item) => {
    cartItemsCtx.addItem({ ...item, amount: 1 });
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartItemsCtx.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={removeItemHandler.bind(null, item.id)}
          onAdd={addItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartTotal}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
