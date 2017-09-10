import React from 'react';
import './App.css';




export class Feature extends React.Component {
	render() {
		return (
			<div>
			<hr className="featurette-divider " />
			<div className="row featurette">
				<div className="col-md-7">
								<h2 className="featurette-heading">First featurette heading. <span className="text-muted">It will blow your mind.</span></h2>
								<p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
							</div>
							<div className="col-md-5">
								<img className="featurette-image img-fluid mx-auto" src= {"http://lorempixel.com/output/nightlife-q-c-480-480-4.jpg"} alt="Generic placeholder image" />
							</div>
						</div>
						<hr className="featurette-divider" />
						<div className="row featurette">
							<div className="col-md-7 push-md-5">
					<h2 className="featurette-heading">Oh yeah, it is that good. <span className="text-muted">See for yourself.</span></h2>
					<p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
				</div>
				<div className="col-md-5 pull-md-7">
					<img className="featurette-image img-fluid mx-auto" src={"http://lorempixel.com/output/nightlife-q-c-480-480-4.jpg"} alt="Generic placeholder image" />
				</div>
			</div>
			<hr className="featurette-divider" />
			<div className="row featurette">
				<div className="col-md-7">
					<h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
					<p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
				</div>
				<div className="col-md-5">
					<img className="featurette-image img-fluid mx-auto" src={'http://lorempixel.com/output/nightlife-q-c-480-480-4.jpg'} alt="Generic placeholder image" />
				</div>
			</div>
						<div id="formWrapper" className="col-md-5">
							<h2> Sign up for our weekly newsletter! </h2>
							<form action="/subscribe-page" method="POST">
								<div className="col-md-5">
									<label htmlFor="name">Name:</label>
									<input type="text" id="name" name="user_name" />
								</div>
								<div className="col-md-5">
									<label htmlFor="mail">E-mail:</label>
									<input id="mailId" type="email" id="mail" name="user_mail" />
								</div>
								<div className="col-md-5">
									<label htmlFor="msg">Message:</label>
									<textarea id="msg" name="user_message" defaultValue={""} />
								</div>
							</form>
							<div className="col-md-5">
							<a href="mailto: #"> <button>send</button> </a>
							</div>
						</div>

			<hr className="featurette-divider" />
		</div>
    );
	}
}
export default Feature;
