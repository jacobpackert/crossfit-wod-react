import React, { Component } from 'react';
// import './App.css';
import NewButton from './components/NewButton';


// The app component
class App extends Component {
    render() {
      return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Random Crossfit Wod Generator</h1>
        </header>
        <p className="App-intro">
          This is going to be a cool project. Stay tuned..
        </p>
        < NewButton value="New WOD 💪" />
      </div>
      );
    }
  };
  

  // Attempt to use the fetch API. Should be moved somewhere it makes sense, so that the button onClick will fetch data and send as props to components with workout description

  let url = "https://spreadsheets.google.com/feeds/list/1hwe64eKPIU7W-jvzFWR8MUzW9DrQerp67G7QBVxvdjk/od6/public/values?alt=json";

  fetch(url).then(
    function(response){
      if(response.status !== 200){
        console.log("there is a problem!! " + response.status);
        return;
      }

    response.json().then(function (data) {
    console.log("data: " + data);
    console.log("response entry: " + data.feed.entry[0].gsx$description.$t);

      });
    }     
  )
  .catch(function(err) {
    console.log("Fetch error: ", err);
  });
  

export default App;
