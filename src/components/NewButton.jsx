import React, { Component } from 'react';
import './NewButton.css'

class NewButton extends Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        // e.preventDefault();
        console.log("button click")
        this.props.onButtonClick();
    }


    render() {
        return (
            <button onClick={this.handleClick}>{this.props.buttonContent} {this.props.emoji}</button>
        )
    }
};

export default NewButton;