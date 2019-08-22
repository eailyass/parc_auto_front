import React, { Component } from 'react';
import messages from './Messages';

import Drivers from './Drivers';

import logo from '../logo.svg';
import '../styles/App.css';

class App extends Component {
  
  render() {

    return (
      <div className="App">
       
        {/* <div className="App-header">

          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div> */}
        {/* <Drivers /> */}
        
        {/* {messages.map((item, index) =>(
        <div>
          <h3>{item.firstName}</h3>
          <p>{item.message}</p>
        </div>
        ))} */}
      </div>
    );
  }
}

export default App;
