import React from 'react';
import './bootstrap.css'
import './App.css';
import Feature from './feature';
import { SurveyBanner } from './SurveyBanner';
import { Nav } from './nav';
import { Footer } from './footer';
import {Jumbotron} from './jumbotron'
import {PropsDisplayer} from './PropsDisplayer'
import {Example} from './Example'

export class App extends React.Component{


  render() {
    return (
      <div>
      <PropsDisplayer myProp="Hello" otherProp='23'/>
      <Example />
        <Nav />
        <Jumbotron />
        <SurveyBanner  />
        <Feature />
        <Footer />
      </div>
    );
  }
}

export default App;
