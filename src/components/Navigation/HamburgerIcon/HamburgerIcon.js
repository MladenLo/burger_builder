import React from 'react';

import classes from './HamburgerIcon.css';

const HamburgerIcon = (props) => {
    return(
        <div 
            className={classes.HamburgerIcon}
            onClick={props.open}
        >
            <i className="fas fa-align-justify"></i>
        </div>
    )
}

export default HamburgerIcon;