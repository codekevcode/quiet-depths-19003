import React from 'react';
import './App.css';



class SButton extends React.Component {


	render() {


		return (

          <div className="col-4 ">
            <p><a className="btn sb btn-primary btn-lg btn-block"  href="#target1" > Take Survey</a></p>
          </div>
    );
	}
}

export class SurveyBanner extends React.Component {
	handleClick() {
		 alert(`I am an event handler.
			 If you see this message,
			 then I have been called.`);
	 }




	render() {

		return (

			<div className="container-fluid midsection">
        <div className="row">
          <div className="col-8 align-baseline">
        <h3>  We are doing a survey about the usage of our bot and we want to know what you think </h3>
          </div>
          <SButton onClick = {this.handleClick} />
        </div>
      </div>
    );
	}
}

export default SurveyBanner	;
