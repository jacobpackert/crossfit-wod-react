import React, { Component } from 'react';
// import './App.css';
import NewButton from './components/NewButton';
import WorkoutDescription from './components/WorkoutDescription';

let url = process.env.REACT_APP_DB_URL;

// I need to add shared state to App.js so it can be passed down to NewButton and WorkoutDescription. So Button.onClick -> updates state in App.js

// The app component
class App extends Component {
  
  constructor(){
    super();
    this.state = {
      wodContent: [],
      buttonContent: ["New WOD"],
      buttonContentEmoji: ["💪", "🏋️‍♂️", "🏃‍♂️"], //this can be mixed up so it's a random emoji later on
    };
    this.setWodState.bind(this);
  }

  setWodState(selectedWod){
    this.setState({wodContent: selectedWod})
  }

  handleButtonClick = () => {
    console.log("button click")

    fetch(url).then(
              response => {
                if (response.status !== 200) {
                  console.log("there is a problem!! " + response.status);
                  return;
                }

                response.json()
                .then(data => {
                  let wodNumber = Math.floor(data.feed.entry.length * Math.random());
                  let selectedWod = data.feed.entry[wodNumber].gsx$description.$t;
                  console.log("selectedWod: " + selectedWod);
                  this.setWodState(selectedWod);
                  // this.setState({ wodContent: data.feed.entry[wodNumber].gsx$description.$t })       //something about needing to .bind(this)       
                });
              }
            )
            .catch(function (err) {
              console.log("Fetch error: ", err);
            });
      };
  
  
  render() {
      return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Random Crossfit Wod Generator</h1>
        </header>
        <p className="App-intro">
          This is going to be a cool project. Stay tuned..
        </p>
        <WorkoutDescription wodContent={this.state.wodContent}/>
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
