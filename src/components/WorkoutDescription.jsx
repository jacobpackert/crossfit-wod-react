import React from 'react';

class WorkoutDescription extends React.Component {
    render () {
        return (
            <div dangerouslySetInnerHTML={{__html: this.props.wodContent}}></div>
        )
    }
};

export default WorkoutDescription;