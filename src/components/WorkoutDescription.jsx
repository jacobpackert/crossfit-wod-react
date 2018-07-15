import React from 'react';

class WorkoutDescription extends React.Component {
    
    componentDidUpdate() {

        const { wodContent } = this.props;
        console.log("workoutDescription, wodContent: " + wodContent);

        
    };

    render () {
        return (
            // this component could have it's own inner state by destructuring a component it accepts as a prop
            <div>
                <h1 dangerouslySetInnerHTML={{ __html: this.props.wodContent }}></h1>
                <p dangerouslySetInnerHTML={{ __html: this.props.wodContent }}></p>
            </div>
        );
    }
};

export default WorkoutDescription;