import React, { Component } from 'react';
import './App.css';
import {Routes} from "./Routes";
//import SectionFinal from "./components/landingProducts/SectionFinal";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
        {/*<SectionFinal/>*/}
      </div>
    );
  }
}

export default App;
