import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Feature from './feature';
import { AttentionGrabber } from './fold';
import { Nav } from './nav';
import { Footer } from './footer';
import {Jumbotron} from './jumbotron'
import registerServiceWorker from './registerServiceWorker';

export class App extends React.Component{
  render() {
    return (
      <div>
      <Nav />
      <Jumbotron />
      <AttentionGrabber />
      <Feature />
      <Footer />
      </div>
    );
  }
}

export default App;
