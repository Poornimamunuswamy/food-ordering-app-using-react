import React from 'react';
import classes from '../UI/FormInput.module.css';

const FormInput = React.forwardRef((props,ref)=>{
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} {...props.input}/>
    </div>
});

export default FormInput;