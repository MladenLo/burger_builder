import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGRIDIENTS_PRICES = {
    salad: 5,
    cabbage: 3,
    meat: 20,
    cheese: 8
}

class BurgerBuilder extends Component {

    state = {
        ingridients: [],
        price: 8,
        ingridientIsZero: {
            salad: {isZero: true, amount: 0},
            cabbage: {isZero: true, amount: 0},
            cheese: {isZero: true, amount: 0},
            meat: {isZero: true, amount: 0}
        },
        purchasable: false,
        orderButtonClicked: false
    }

    addIngridientHandler = (type) => {
        let ingridientAmount = this.state.ingridientIsZero[type].amount;
        const ingridientIsZeroCopy = {
            ...this.state.ingridientIsZero,
        };
        ingridientIsZeroCopy[type].amount = ingridientAmount + 1;
        if(ingridientIsZeroCopy[type].isZero) {
            ingridientIsZeroCopy[type].isZero = false;
        }
        let ingridientsCopy = this.state.ingridients.slice();
        ingridientsCopy.push(type);
        let priceCopy = this.state.price;
        priceCopy += INGRIDIENTS_PRICES[type];
        this.setState({
            ingridients: ingridientsCopy,
            price: priceCopy,
            ingridientIsZero: ingridientIsZeroCopy,
            purchasable: priceCopy !== 8
        })
    }
    removeIngridientHandler = (type) => {
        if(this.state.ingridientIsZero[type].amount <= 0) {
            console.log(this.state.ingridientIsZero[type])
            return;
        }
        
        let ingridientsCopy = this.state.ingridients.slice();
        const lastIndexOfElement = ingridientsCopy.lastIndexOf(type);
        if(lastIndexOfElement !== -1) {
            const ingridientIsZeroCopy = {
                ...this.state.ingridientIsZero,
            };
            if(ingridientIsZeroCopy[type].amount === 1) {
                ingridientIsZeroCopy[type].isZero = true;
            }
            ingridientIsZeroCopy[type].amount--;
            ingridientsCopy.splice(lastIndexOfElement, 1);
            const newPrice = this.state.price - INGRIDIENTS_PRICES[type];
            this.setState({
                ingridients: ingridientsCopy,
                price: newPrice,
                purchasable: newPrice !== 8
            })
        }
    }

    orderButtonHandler = () => {
        this.setState({
            orderButtonClicked: true
        })
    }
    backdropClosed = () => {
        this.setState({
            orderButtonClicked: false
        })
    }
    purchaseContinueHandler = () => {
        alert("Continue");
    }

    render() {
        return (
            <Aux>
                <Modal 
                    show={this.state.orderButtonClicked}
                    backdropClosed={this.backdropClosed}
                >
                    <OrderSummary 
                        price={this.state.price}
                        ingridients={this.state.ingridientIsZero}
                        buttonClose={this.backdropClosed}
                        purchaseContinue={this.purchaseContinueHandler}/>
                </Modal>
                <Burger ingridients={this.state.ingridients}/>
                <BuildControls
                    ingridientIsZero={this.state.ingridientIsZero}
                    price={this.state.price}
                    ingridientAdded={this.addIngridientHandler}
                    ingridientRemoved={this.removeIngridientHandler}
                    purchasable={this.state.purchasable}
                    orderButtonHandler={this.orderButtonHandler}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;