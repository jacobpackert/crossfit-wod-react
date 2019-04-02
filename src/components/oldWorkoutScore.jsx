import React, { Component } from 'react';

class OldWorkoutScore extends Component {
    
    render() {
        const { wodContent } = this.props;

        return (
            <div>
                <p id="oldscore">Your previous score was {wodContent.gsx$score.$t}</p>
            </div>
        );
    }
}

export default OldWorkoutScore;