import React, { Component } from 'react';

import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';
import classes from './Modal.css';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.show !== nextProps.show;
    }
    render() {
        return(
            <Aux>
                <Backdrop show={this.props.show} closed={this.props.backdropClosed} />
                <div 
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)': 'translateY(-100vh)',
                        opacity: this.props.show ? '1':'0'
                        }}>
                    {this.props.children}
                </div>    
            </Aux>
        )
    }
}

export default Modal;