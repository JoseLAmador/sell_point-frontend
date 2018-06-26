import React, { Component } from 'react';
import './App.css';
import {Routes} from "./Routes";
//import SectionFinal from "./components/landingProducts/SectionFinal";
import {BackTop} from 'antd';

class App extends Component {
  render() {
    return (
      <div className="App">
          <BackTop visibilityHeight={100}/>
        <Routes />
        {/*<SectionFinal/>*/}
      </div>
    );
  }
}

export default App;
