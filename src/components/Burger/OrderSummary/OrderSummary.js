import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {

    const listItems = Object.keys(props.ingridients)
        .map((key, index) => {
            return <li 
                key={index}>
                <span style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingridients[key].amount}
                </li>;
        })
    return(
        <Aux>
                <h2>Your order</h2>
                <p>Hamburger with following ingridients:</p>
                <ul>
                    {listItems}
                </ul>
                <p>Total price: { props.price }</p>
                <p>Continue to checkout</p>
                <Button
                    buttonAction={props.buttonClose}
                    btnType="Danger"
                >Cancel
                </Button>
                <Button
                    buttonAction={props.purchaseContinue}
                    btnType="Success"
                >Continue
                </Button>
            </Aux>
    );
}

export default OrderSummary;