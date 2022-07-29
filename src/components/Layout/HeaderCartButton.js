import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const {onClick} = props;
  const cartCtx = useContext(CartContext);

  const numCartItems = cartCtx.items.reduce((currNum, item) => {currNum + item.amount}, 0);

  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}><CartIcon /></span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numCartItems}</span>
    </button>
  )
};

export default HeaderCartButton;