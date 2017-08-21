import React from 'react';
import './App.css';
import { SurveyButton } from './SurveyButton';



export class SurveyBanner extends React.Component {
	render() {
		return (
			<div className="container-fluid midsection">
        <div className="row">
          <div className="col-8 align-baseline">
        <h3>  We are doing a survey about the usage of our bot and we want to know what you think </h3>
          </div>
          <SurveyButton />
        </div>
      </div>
    );
	}
}
export default SurveyBanner	;
