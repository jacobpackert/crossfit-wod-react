import React, { Component } from 'react';
import './App.css';
import NewButton from './components/NewButton';
import WorkoutDescription from './components/WorkoutDescription';
import WorkoutAmount from './components/WorkoutAmount';

let url = process.env.REACT_APP_DB_URL;


// The app component
class App extends Component {

  constructor() {
    super();
    this.state = {
      wodContent: [], 
      buttonContent: ["New WOD"],
      buttonContentEmoji: ["💪", "🏋️‍♂️", "🏃‍♂️"],
      buttonHasBeenPressed: false,
      workoutAmountSelected: 1,
    };
    this.setWodState.bind(this);
    this.handleWorkoutAmountSelected = this.handleWorkoutAmountSelected.bind(this);
  }

  setWodState(selectedWod) {
    this.setState({ wodContent: selectedWod })
  }

  setButtonState() {
    this.setState({ buttonHasBeenPressed: true })
  }

  // this function is used to store the state of amount of workouts selected in the parent component so the WorkoutAmount component can pass state upward
  handleWorkoutAmountSelected(amount){
    this.setState({ workoutAmountSelected: amount})
  }

  handleButtonClick = () => {
    // console.log("button click")

    fetch(url).then(
      response => {
        if (response.status !== 200) {
          // console.log("there is a problem!! " + response.status);
          return;
        }

        response.json()
          .then(data => {
              const wodNumber = [];
              let selectedWodObject;
              for(let i=1; i<this.state.workoutAmountSelected+1; i++){
                wodNumber.push(
                  Math.floor(data.feed.entry.length * Math.random())
                );
                console.log("pushing: " + i);
                console.log("wodNumber is now: " + wodNumber);
                //also need a function to make sure there is no duplicates in the array
                selectedWodObject = wodNumber.map(x => data.feed.entry[x]);
                console.log(selectedWodObject);
              }
            
            let selectedWod = data.feed.entry[wodNumber]; 
            console.log("selectedWod: " + selectedWod);
            console.log(selectedWod)
            this.setWodState(selectedWodObject);
            this.setButtonState();
          });
      }
    )
      .catch(function (err) {
        console.log("Fetch error: ", err);
      });
  };

  render() {
    
    
    // conditionally render the component only if the button has been pressed
    const buttonHasBeenPressed = this.state.buttonHasBeenPressed;
    let description;

    if (buttonHasBeenPressed) {
      description = 
      this.state.wodContent.map(i => 
        <WorkoutDescription
          wodContent={i}
          buttonHasBeenPressed={this.state.buttonHasBeenPressed}
        />
      )
      

    }


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Random Crossfit Wod Generator</h1>
        </header>
        <p className="App-intro">
          Click the button to receive a random workout.
        </p>

       <div> <WorkoutAmount
          onSelection={this.handleWorkoutAmountSelected}
        />
        </div>

        {description}

        <NewButton
          buttonContent={this.state.buttonContent}
          emoji={this.state.buttonContentEmoji}
          onButtonClick={this.handleButtonClick}
        />
      </div>
    );
  }
};


export default App;
