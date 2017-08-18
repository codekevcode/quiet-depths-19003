import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className ="jumbotron jumbotron-fluid align-baseline" style={{backgroundImage:'url(bgimg.jpg)'}}>
       <div className ="container">
         <h1> Chingu Owls team 23 React Splash Page </h1>
         <p className= "App-logo">Changing Background Text</p>
         <p><a className="btn btn-primary" href="http://www.google.com" target="_blank"> Discovery things</a></p>
       </div>

     </div>
    );
  }
}

export default App;
