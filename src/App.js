import React, { Component} from "react";
import "./App.css";
import QtoCusta from "./QtoCusta";
import TheFridayQuestion from "./theFridayQuestion";

class App extends Component{
  render(){
    return(
      <div className="App" name="app-root">
        <h1>Osizo Dojo!</h1>
        <TheFridayQuestion />
        <br />
        <hr />
        <br />
        <QtoCusta />
        <br />
      </div>
    );
  }
}

export default App;