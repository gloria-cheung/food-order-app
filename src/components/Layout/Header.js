import {Fragment} from 'react';
import mealsImage from '../../assets/food.jpeg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  const {onShowCart} = props;

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='table full of delicious food' />
      </div>
    </Fragment>
  )
};

export default Header;