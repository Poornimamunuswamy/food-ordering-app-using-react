import { useRef, useState } from 'react';
import classes from '../UI/MealForm.module.css';
import FormInput from './FormInput';
const MealForm = (props)=>{

   const [isValid, setisValid] = useState(true);
   const amountRef = useRef();
  
   const submitHandler = (event)=>{
     event.preventDefault();
      const amount = amountRef.current.value;
      const amountNum = +amount;
    if(amount.trim().length === 0 || amountNum < 1 || amountNum > 5){
      setisValid(false);
      return;
    }
    
    props.onAddtoCart(amountNum);
   }
    return (
      <form className={classes.form} onSubmit={submitHandler}>
        <FormInput 
            ref = {amountRef}
            label="Amount" 
            input={{
            id: 'amount_'+props.id,
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
        }}/>
        <button>+ Add</button>
        {!isValid && <p>Please enter a valid number from 1 to 5.</p>}
      </form>
    );
}

export default MealForm;