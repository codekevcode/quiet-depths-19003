import React from 'react';
import './App.css';



class SButton extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {target: 'Answer Our Survey'};
		this.takeSurvey = this.takeSurvey.bind(this);
	}

	takeSurvey() {
									this.setState({target: 'Take Other QUIZES'});

								} // End takeSurvey

	render() {


		return (

          <div className="col-4 ">
            <p><a className="btn sb btn-primary btn-lg 	pull-right" onClick = {this.takeSurvey}   >{this.state.target}</a></p>
          </div>
    );
	}
}

export class SurveyBanner extends React.Component {





	render() {

		return (

			<div className="container-fluid midsection">
        <div className="row">
          <div className="col-8 align-baseline">
        <p>We are doing a survey about the usage of our bot and we want to know what you think</p>
          </div>
          <SButton  />
        </div>
      </div>
    );
	}
}

export default SurveyBanner	;
