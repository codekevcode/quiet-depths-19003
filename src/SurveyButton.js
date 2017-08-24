import React from 'react';
import './App.css';





export class SurveyButton extends React.Component {
	render() {
		return (

          <div className="col-4 ">
            <p><a className="btn sb btn-primary btn-lg btn-block" href="http://www.google.com" target="_blank"> Take Survey</a></p>
          </div>
    );
	}
}
export default SurveyButton	;
