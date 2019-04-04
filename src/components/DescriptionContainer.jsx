import React, { Component } from 'react';
import WorkoutDescription from './WorkoutDescription';
import OldWorkoutScore from './OldWorkoutScore';

class DescriptionContainer extends Component {

    render() {
        const { wodContent } = this.props;

        return (
            <div>
                <WorkoutDescription 
                    wodContent={wodContent}
                    />
                <OldWorkoutScore
                    wodContent={wodContent}
                    />
            </div>
        );
    }
}

export default DescriptionContainer;