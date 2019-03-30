import React, { Component } from 'react';
import WorkoutDescription from './WorkoutDescription';
import workoutOldScore from './oldWorkoutScore';

class DescriptionContainer extends Component {
    render() {
        return (
            <WorkoutDescription></WorkoutDescription>
            <workoutOldScore></workoutOldScore>
        );
    }
}

export default DescriptionContainer;