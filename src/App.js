import React, { Component } from 'react';
import './App.css';
import NewButton from './components/NewButton';
import WorkoutDescription from './components/WorkoutDescription';
import WorkoutAmount from './components/WorkoutAmount';

let url = process.env.REACT_APP_DB_URL;

// I need to add shared state to App.js so it can be passed down to NewButton and WorkoutDescription. So Button.onClick -> updates state in App.js

// The app component
class App extends Component {

  constructor() {
    super();
    this.state = {
      wodContent: [], //this can be changed to accept an *object* and then the component can destructure that object and parse the data it needs.
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
    console.log(`hello from handleWorkoutAmountSelected in App.js with ${amount} selected`)
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
            let wodNumber = Math.floor(data.feed.entry.length * Math.random());
            // console.log("name: " + data.feed.entry[wodNumber].gsx$name.$t);
            // console.log("score: " + data.feed.entry[wodNumber].gsx$score.$t);
            let selectedWod = data.feed.entry[wodNumber];
            // console.log("selectedWod: " + selectedWod);
            this.setWodState(selectedWod);
            this.setButtonState();
            // this.setState({ wodContent: data.feed.entry[wodNumber].gsx$description.$t })       //something about needing to .bind(this)       
          });
      }
    )
      .catch(function (err) {
        console.log("Fetch error: ", err);
      });
  };

  // Add a 'open number/headline' component and a 'this was your score last time' component
  render() {
    
    
    // conditionally render the component only if the button has been pressed
    const buttonHasBeenPressed = this.state.buttonHasBeenPressed;
    // console.log("buttonhasbeenpressed: " + buttonHasBeenPressed);
    let description;

    if (buttonHasBeenPressed) {
      description = 
      <WorkoutDescription
        wodContent={this.state.wodContent}
        buttonHasBeenPressed={this.state.buttonHasBeenPressed}
      />
    }


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Random Crossfit Wod Generator</h1>
        </header>
        <p className="App-intro">
          Click the button to receive a random workout.
        </p>

        <WorkoutAmount
          onSelection={this.handleWorkoutAmountSelected}
        />

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
