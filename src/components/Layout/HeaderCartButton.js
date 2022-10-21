import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import cartContext from "../../store/cart-context";
import { useContext, useEffect, useState } from "react";
const HeaderCartButton = (props) => {
  const [buttonBump, setButtonBump] = useState(false)
    const headerButtonContext = useContext(cartContext)
    const numberOfCartItems = headerButtonContext.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0);
    const btnClasses = `${classes.button} ${buttonBump ? classes.bump : ''}`;
    const {items} = headerButtonContext
    useEffect(() => {
      if (items.length === 0) {
        return ;
      }
        setButtonBump(true)
        const timer = setTimeout(() => {
          setButtonBump(false)
        }, 300)
        return () => {
          clearTimeout(timer)
        }
    }, [items])
  return (
    <>
      <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    </>
  );
};

export default HeaderCartButton;
