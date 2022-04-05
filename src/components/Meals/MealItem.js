import { useContext } from 'react';
import classes from '../UI/MealItem.module.css';
import MealForm from './MealForm';
import CartContext from '../store/cart-context';
const MealItem = (props)=>{
    const ctx = useContext(CartContext);
    const price = `Rs. ${props.price.toFixed(2)}`; 
    
    const addtoCart = (amount)=>{
      ctx.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price,
      });
    };
    return (
      <li className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div>
        <MealForm id={props.id} onAddtoCart = {addtoCart}/>
        </div>
      </li>
    );
}

export default MealItem;