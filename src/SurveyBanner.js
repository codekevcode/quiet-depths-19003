import React from 'react';
import './App.css';


export class SurveyBanner extends React.Component {
	render() {
		return (
			<div className="container-fluid midsection">
        <div className="row">
          <div className="col-8">
        <h3>  Take a Quick Survey, Built By US </h3>
          </div>
          <div className="col-4 pull-right">
            <p><a className="btn btn-primary" href="http://www.google.com" target="_blank"> Discover things</a></p>
          </div>
        </div>
      </div>
    );
	}
}
export default SurveyBanner	;
