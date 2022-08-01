import { useContext } from 'react';

import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartProvider from '../../store/Cart-Provider';

const Cart = (props) => {
  const cartCtx = useContext(CartProvider);
  const {onClose} = props;
 
  const cartItems = cartCtx.items
    .map(item => <li key={item.id}>{item.name}</li>);

  return (
    <Modal onClose={onClose} >
      <ul className={classes['cart-items']}>
        {cartItems}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onClose} >Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
};

export default Cart;