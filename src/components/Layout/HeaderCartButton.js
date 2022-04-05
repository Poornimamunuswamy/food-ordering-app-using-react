import CartIcon from '../Cart/CartIcon';
import classes from '../UI/HeaderCartButton.module.css';
import {useContext, useEffect, useState} from 'react';
import Context from '../store/cart-context';
const HeaderCartButton = (props)=>{
  const cartCtx = useContext(Context);
  const [btnIsHighlighted, setbtnIsHighlighted]=useState(false);

  const cartItems = cartCtx.items.reduce((currVal, item)=>{
    return currVal + item.amount;
  },0);

  const {items} = cartCtx; 
  useEffect(()=>{
    if(items.length === 0){
      return;
    }
    setbtnIsHighlighted(true);
    const timer = setTimeout(()=>{
      setbtnIsHighlighted(false);
    }, 300);
    return ()=>{
      clearTimeout(timer);
    }
  },[items]);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`
  
    return (
      <button className={btnClasses} onClick={props.onShow}>
        <span className={classes.icon}>
          <CartIcon></CartIcon>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{cartItems}</span>
      </button>
    );
}

export default HeaderCartButton;