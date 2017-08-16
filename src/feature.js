import React from 'react';
import './App.css';


export class Feature extends React.Component {
	render() {
		return (
			<div>
			<hr className="featurette-divider" />
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
			<hr className="featurette-divider" />
		</div>
    );
	}
}
export default Feature;
