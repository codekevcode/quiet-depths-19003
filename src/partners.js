import React from 'react';
import './App.css';
import owl from './img/owl.svg';
import npm from './img/npm.png'
import react from './img/react.png'
import ECMA6 from './img/react.png'
import webpack from './img/webpack.jpeg'
import babel from './img/babel.png'
import html5 from './img/html5.png'
import css from './img/css.png'


export class Partners extends React.Component {
	render() {
		return (
      <div className="container">
      <div className="row">
          <h2> Our partners </h2>
      </div>
      <div className="row">
        <div className="col">
          <img className="img-fluid" /><img src={npm} className="App-logo" alt="logo" />
        </div>
        <div className="col">
          <img className="img-fluid" /><img src={webpack} className="App-logo" alt="logo" />
        </div>
        <div className="col">
          <img className="img-fluid" /><img src={ECMA6} className="App-logo" alt="logo" />
        </div>
      </div>
          <div className="row">
            <div className="col">
              <img className="img-fluid" /><img src={babel} className="App-logo" alt="logo" />
            </div>
            <div className="col">
              <img className="img-fluid" /><img src={css} className="App-logo" alt="logo" />
            </div>
            <div className="col">
              <img className="img-fluid" /><img src={html5} className="App-logo" alt="logo" />
            </div>
          </div>
          <div className="row">
          <h2> One Quick Question </h2>
          Did you already build a cloud-based IoT platform or a new type of sensor that we or one of our ventures can use? Are you looking to building a new business and need some help or want to co-create something?

    Reach out! We’re always looking for new collaborations and partnerships.
          </div>
        </div>
    );
	}
}
export default Partners;
