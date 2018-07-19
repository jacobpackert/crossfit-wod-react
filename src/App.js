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
            // Maybe the 'multiplier' function should live in here to craft an object consisting of several wods depending on the workoutAmountSelected number
            //inspired by Andreas' code: there can be multiple return()s. You can put an additional return() in a function and then map over the data and return components and whatnot. 
            // Inspiration from here: https://github.com/wasp129/mentor-class-react-app/blob/master/client/components/NewArticle.js line 105
              console.log("need more wodnumbers");
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
                // selectedWodObject.map(xconsole.log(selectedWodObject[0].gsx$description.$t));
              }
            
            // else{
            //   var wodNumber = Math.floor(data.feed.entry.length * Math.random());
            // }
            
            // console.log("name: " + data.feed.entry[wodNumber].gsx$name.$t);
            // console.log("score: " + data.feed.entry[wodNumber].gsx$score.$t);
            let selectedWod = data.feed.entry[wodNumber]; 
            console.log("selectedWod: " + selectedWod);
            console.log(selectedWod)
            this.setWodState(selectedWodObject);
            this.setButtonState();
            // this.setState({ wodContent: data.feed.entry[wodNumber].gsx$description.$t })       //something about needing to .bind(this)       
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
    // console.log("buttonhasbeenpressed: " + buttonHasBeenPressed);
    let description;

    if (buttonHasBeenPressed) {
      description = 
      // probably some type of loop here with this.state.workoutAmountSelected controlling how many times the component will render
      //tried with the for loop - didn't work. Should be something along the lines of a .map function
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
