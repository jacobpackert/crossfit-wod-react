import React, { Component } from 'react';
import './NewButton.css'

class NewButton extends Component {
    render() {
        return (
            <button>{this.props.value}</button>
        )
    }
};

// Now use .fetch() to call data (instead of jQuery as you usually do)

export default NewButton;