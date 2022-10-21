import classes from "./Header.module.css";
import Meals from "../../Assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React meals</h1>
        <HeaderCartButton onClick={props.onActivateCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={Meals} alt="meals" />
      </div>
    </>
  );
};

export default Header;
