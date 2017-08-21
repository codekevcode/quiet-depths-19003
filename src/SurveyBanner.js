import React from 'react';
import './App.css';
import { SurveyButton } from './SurveyButton';



export class SurveyBanner extends React.Component {
	render() {
		return (
			<div className="container-fluid midsection">
        <div className="row">
          <div className="col-8">
        <h3>  Take a Quick Survey, Built By US </h3>
          </div>
          <SurveyButton />
        </div>
      </div>
    );
	}
}
export default SurveyBanner	;
