import React, { Component } from 'react';
import './NewButton.css'

class NewButton extends Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("button click")
    }


    render() {
        return (
            <button onClick={this.handleClick}>{this.props.value}</button>
        )
    }
};

// Now use .fetch() to call data (instead of jQuery as you usually do)

export default NewButton;