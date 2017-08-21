import React from 'react';

import './bootstrap.css'
import './App.css';
import Feature from './feature';
import { SurveyBanner } from './SurveyBanner';
import { Nav } from './nav';
import { Footer } from './footer';
import {Jumbotron} from './jumbotron'


export class App extends React.Component{
  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <SurveyBanner />
        <Feature />
        <Footer />
      </div>
    );
  }
}

export default App;
