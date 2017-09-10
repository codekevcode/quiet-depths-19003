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
          <img className="img-fluid" src={npm}  alt="logo" />
        </div>
        <div className="col">
          <img className="img-fluid" src={webpack}  alt="logo" />
        </div>
        <div className="col">
          <img className="img-fluid" src={ECMA6}  alt="logo" />
        </div>
      </div>
          <div className="row">
            <div className="col">
              <img className="img-fluid" src={babel}  alt="logo" />
            </div>
            <div className="col">
            <img className="img-fluid" src={css}  alt="logo" />
            </div>
            <div className="col">
              <img className="img-fluid" src={html5}  alt="logo" />
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
