import React, { Component } from 'react';
// import './App.css';
import NewButton from './components/NewButton';
import WorkoutDescription from './components/WorkoutDescription';

let url = "https://spreadsheets.google.com/feeds/list/1hwe64eKPIU7W-jvzFWR8MUzW9DrQerp67G7QBVxvdjk/od6/public/values?alt=json";

// I need to add shared state to App.js so it can be passed down to NewButton and WorkoutDescription. So Button.onClick -> updates state in App.js

// The app component
class App extends Component {
  constructor(){
    super();
    this.state = {
      wodContent: [],
      // buttonContent: [],
    };
  }


  // Writing the fetch
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
              // console.log("response entry: " + data.feed.entry[0].gsx$description.$t);
              // let dataContent = data.feed.entry[0].gsx$description.$t;
              // console.log("dataContent: " + dataContent);
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
        < NewButton value="New WOD 💪" />
      </div>
      );
    }
  };
  

export default App;
