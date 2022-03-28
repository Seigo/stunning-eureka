import React, { Component} from "react";
import "./App.css";
import TheFridayQuestion from "./theFridayQuestion";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Osizo Dojo!</h1>
        <TheFridayQuestion />
      </div>
    );
  }
}

export default App;