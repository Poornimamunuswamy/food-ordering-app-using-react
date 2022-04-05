import {Fragment} from 'react';
import classes from '../UI/Header.module.css';
import mainMeals from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) =>{
    return (
      <Fragment>
        <header className={classes.header}>
          <h1>Order Your Favourite Food</h1>
          <HeaderCartButton onShow={props.onshowCart}></HeaderCartButton>
        </header>
        <div className={classes["main-image"]}>
          <img src={mainMeals} alt="Main Meals"></img>
        </div>
      </Fragment>
    );
}

export default Header;
