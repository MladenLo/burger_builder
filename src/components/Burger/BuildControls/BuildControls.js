import React from 'react';

import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.css';

const CONTROLS = [
    {label: "Meat", type: "meat"},
    {label: "Cheese", type: "cheese"},
    {label: "Cabbage", type: "cabbage"},
    {label: "Salad", type: "salad"}
]

const BuildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p className={classes.Price}>Price: {props.price}kr</p>
            {CONTROLS.map((control, key) => {
                return <BuildControl
                            key={key} 
                            ingridientIsZero={props.ingridientIsZero[control.type].isZero}
                            label={control.label} 
                            type={control.type}
                            add={() => props.ingridientAdded(control.type)}
                            remove={() => props.ingridientRemoved(control.type)}
                        />
            })}
            <button 
                disabled={!props.purchasable} 
                className={classes.OrderButton}
                onClick={props.orderButtonHandler}>
                Order Now!
            </button>
        </div>
    )
}

export default BuildControls;