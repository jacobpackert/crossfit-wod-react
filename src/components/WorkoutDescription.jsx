import React from 'react';

class WorkoutDescription extends React.Component {
    render () {
        return (
            <p><div dangerouslySetInnerHTML={{__html: this.props.wodContent}}></div></p>
        )
    }
};

export default WorkoutDescription;