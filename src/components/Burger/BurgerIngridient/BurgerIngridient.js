import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';

import classes from './BurgerIngridient.css';

class BurgerIngridient extends Component {
    render() {
        let ingridient = null;
        switch(this.props.type){
            case('bread-top'):
                ingridient = <div className={classes.BreadTop}></div>
                break;
            case('cheese'):
                ingridient = <div className={classes.Cheese}></div>
                break;
            case('meat'):
                ingridient = <div className={classes.Meat}></div>
                break;
            case('salad'):
                ingridient = <div className={classes.Salat}></div>
                break;
            case('cabbage'):
                ingridient = <div className={classes.Cabbage}></div>
                break;
            case('bread-bottom'):
                ingridient = <div className={classes.BreadBottom}></div>
                break;
            default:
                ingridient = null;
                break;
        }
        return(
            <Aux>
                {ingridient}
                {/*<div className={classes.BreadTop}></div>
                <div className={classes.Salat}></div>
                <div className={classes.Meat}></div>
                <div className={classes.Cheese}></div>
                <div className={classes.Cabbage}></div>
                <div className={classes.BreadBottom}></div>*/}
            </Aux>
        )
    }
}

BurgerIngridient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngridient;