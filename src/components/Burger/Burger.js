import React from 'react';

import BurgerIngridient from './BurgerIngridient/BurgerIngridient';

import classes from './Burger.css';

const Burger = (props) => {
    let ingridients = props.ingridients.map((ingridient, key) => {
        return <BurgerIngridient key={key} type={ingridient} />
    });
    if(props.ingridients.length < 1) {
        ingridients = <p>Put ingridients in your burger!</p>
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngridient type="bread-top" />
            {ingridients}
            <BurgerIngridient type="bread-bottom" />
        </div>
    )
}

export default Burger;