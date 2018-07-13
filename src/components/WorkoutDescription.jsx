import React from 'react';

class WorkoutDescription extends React.Component {
    render () {
        return (
            <div><p dangerouslySetInnerHTML={{__html: this.props.wodContent}}></p></div>
        )
    }
};

export default WorkoutDescription;