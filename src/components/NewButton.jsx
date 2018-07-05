import React, { Component } from 'react';
import './NewButton.css'

class NewButton extends Component {
    render() {
        return (
            <button>{this.props.value}</button>
        )
    }
};

export default NewButton;