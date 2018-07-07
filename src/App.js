import React, { Component } from 'react';
// import './App.css';
import NewButton from './components/NewButton';
import WorkoutDescription from './components/WorkoutDescription';


  // Attempt to use the fetch API. Should be moved somewhere it makes sense, so that the button onClick will fetch data and send as props to components with workout description
      let url = "https://spreadsheets.google.com/feeds/list/1hwe64eKPIU7W-jvzFWR8MUzW9DrQerp67G7QBVxvdjk/od6/public/values?alt=json";
      let wod = "100 PUSHUPS";





// The app component
class App extends Component {
  constructor(){
    super();
    this.state = {
      dataContent: [],
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
              console.log("data: " + data.feed.entry[0].gsx$description.$t);
              // console.log("response entry: " + data.feed.entry[0].gsx$description.$t);
              // let dataContent = data.feed.entry[0].gsx$description.$t;
              // console.log("dataContent: " + dataContent);
              this.setState({ dataContent: data.feed.entry[0].gsx$description.$t })              
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
        <WorkoutDescription value={this.state.dataContent}/>
        < NewButton value="New WOD 💪" />
      </div>
      );
    }
  };
  


  

export default App;
