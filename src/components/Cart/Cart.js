import { useContext } from 'react';

import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const {onClose} = props;

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  
  const hasItems = cartCtx.items.length > 0;
 
  const removeItemHandler = (id) => {

  };

  const addItemHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
  };

  const cartItems = cartCtx.items
    .map(item => (
      <CartItem 
        key={item.id} 
        {...item} 
        onAdd={() => {addItemHandler(item)}} 
        onRemove={() => {removeItemHandler(item.id)}} 
      />
    ));

  return (
    <Modal onClose={onClose} >
      <ul className={classes['cart-items']}>
        {cartItems}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onClose} >Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  )
};

export default Cart;