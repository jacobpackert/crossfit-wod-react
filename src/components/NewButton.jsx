import React, { Component } from 'react';
import './NewButton.css'

class NewButton extends Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        console.log("button click")
    }


    render() {
        return (
            <button onClick={this.handleClick}>{this.props.value} {this.props.emoji}</button>
        )
    }
};

export default NewButton;