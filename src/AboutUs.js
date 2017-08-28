import React from 'react';
import './App.css';



class AboutUsButton extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {target: 'About Us'};
		this.LearnAbout = this.LearnAbout.bind(this);
	}

	LearnAbout() {
									this.setState({target: 'You are now Learning!'});
								} // End takeSurvey

	render() {
						return (
									  <div className="col-4 ">
									    <p><a className="btn  btn-primary btn-lg btn-block" onClick = {this.LearnAbout}>{this.state.target}</a></p>
									  </div>
									);
					}
}

export class AboutUsSection extends React.Component {
	render() {

		return (
						<div className="container-fluid aboutUsSection">
			        <div className="row  ">
			          <div className="col-10  aboutUsParaph">
			        <h3> Learn More About Us  </h3>
							<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
			          <AboutUsButton  />
								</div>
			        </div>
			      </div>
    );
	}
}

export default AboutUsSection	;
