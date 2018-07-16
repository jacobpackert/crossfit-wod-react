import React, { Component } from 'react';

class WorkoutAmount extends Component {

    constructor(props){
        super(props);

        this.state = {value: 1};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
        let amountofworkouts = parseInt(event.target.value, 10);
        this.props.onSelection(amountofworkouts);
    }

    render() {
        return (
            <div>
                <form action="">
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    </select>
                </form>
            </div>
        );
    }
}

export default WorkoutAmount;
