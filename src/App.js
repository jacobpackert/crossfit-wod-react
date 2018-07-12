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
  }


  // Writing the fetch when the component loads/mounts
  componentDidMount(){

    
    fetch(url).then(
          response => {
            if (response.status !== 200) {
              console.log("there is a problem!! " + response.status);
              return;
            }

            response.json()
            .then(data => {
              let wodNumber = Math.floor(data.feed.entry.length * Math.random());
              console.log("wodNumber: " + wodNumber + ", data: " + data.feed.entry[wodNumber].gsx$description.$t);
              this.setState({ wodContent: data.feed.entry[wodNumber].gsx$description.$t })              
            });
          }
        )
        .catch(function (err) {
          console.log("Fetch error: ", err);
        });
  }
  
  
  render() {
      return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Random Crossfit Wod Generator</h1>
        </header>
        <p className="App-intro">
          This is going to be a cool project. Stay tuned..
        </p>
        <WorkoutDescription value={this.state.wodContent}/>
        < NewButton value={this.state.buttonContent} emoji={this.state.buttonContentEmoji} />
      </div>
      );
    }
  };
  

export default App;
