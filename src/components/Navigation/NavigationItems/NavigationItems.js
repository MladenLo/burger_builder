import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.css';

const NavigationItems = (props) => {
    return(
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" active>Burger Shop</NavigationItem>
            <NavigationItem link="/checkout">Checkout</NavigationItem>
        </ul>
    )
}

export default NavigationItems;