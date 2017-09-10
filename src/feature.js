import React from 'react';
import './App.css';




export class Feature extends React.Component {
	render() {
		return (

<div classname="mx-auto feature-title">
				<h1 className="mytitle"> Sign Up </h1>

							<form className="form-inline feature">


				<label className="sr-only" htmlFor="inlineFormInput">Name</label>
				<input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0 " id="inlineFormInput" placeholder="Jane Doe" />
				<label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
				<div className="input-group mb-2 mr-sm-2 mb-sm-0">
				<div className="input-group-addon">@</div>
				<input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Username" />
				</div>
				<div className="form-check mb-2 mr-sm-2 mb-sm-0">
				<label className="form-check-label">
				<input className="form-check-input" type="checkbox" /> Remember me
				</label>
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
				</form>

</div>

    );
	}
}
export default Feature;
