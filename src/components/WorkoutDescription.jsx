import React from 'react';
import './WorkoutDescription.css';

class WorkoutDescription extends React.Component {

    render () {
        const { wodContent } = this.props;
        // console.log(wodContent);
        
        return (
            <div>
                <h1>
                Open workout {wodContent.gsx$name.$t}
                </h1> 
                <p dangerouslySetInnerHTML={{ __html: wodContent.gsx$description.$t }}></p>
                {/* <p id="oldscore">Your previous score was {wodContent.gsx$score.$t}</p> */}
            </div>
        );
    }
};

export default WorkoutDescription;