import React from 'react';

import Logo from '../../../components/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon';

import classes from './Toolbar.css';

const Toolbar = (props) => {
    return(
        <header className={classes.Toolbar}>
            <HamburgerIcon open={props.openMenu} />
            <Logo />
            <nav className={classes.DesktopOnly}><NavigationItems /></nav>
        </header>
    )
}

export default Toolbar;