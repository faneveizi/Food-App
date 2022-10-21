import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import cartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import { useContext } from "react";
const Cart = (props) => {
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount : 1})
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  };
  const cartCtx = useContext(cartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((cartItem) => {
        return (
          <CartItem
            key={cartItem.id}
            name={cartItem.name}
            amount={cartItem.amount}
            price={cartItem.price}
            onRemove={cartItemRemoveHandler.bind(null, cartItem.id)}
            onAdd={cartItemAddHandler.bind(null, cartItem)}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
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
