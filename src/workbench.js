
import React from 'react';
import './App.css';




class WButton extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {target: 'View Our Blog'};
		this.ViewBlog = this.ViewBlog.bind(this);
	}

	ViewBlog() {
									this.setState({target: 'Now Viewing Blog'});

								} // End takeSurvey

	render() {


		return (

          <div className="col-4 ">
            <p><a className="btn sb btn-primary 	pull-right" onClick = {this.ViewBlog}   >{this.state.target}</a></p>
          </div>
    );
	}
}

export class WorkBench extends React.Component {
	render() {
		return (
        <div className="album text-muted">
          <div className="container">
            <div className="row">
            <h1 className="pull-left"> Future Projects </h1>
            <div class="col-sm-10">

            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
            <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                      <a className="nav-link active" href="#">All</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Portfolio Items</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Research</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Process</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">We Are Owls</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                  </ul>

            </div>
              <div className="card">
                <img src= {"http://lorempixel.com/output/nightlife-q-c-480-480-4.jpg"}  alt="Card image cap" />

              </div>
              <div className="card">
                <img src= {"http://lorempixel.com/output/nightlife-q-c-480-480-4.jpg"}  alt="Card image cap" />

              </div>
              <div className="card">
                <img src= {"http://lorempixel.com/output/nightlife-q-c-480-480-4.jpg"}  alt="Card image cap" />

              </div>
              <div className="card">
                <img src= {"http://lorempixel.com/output/nightlife-q-c-480-480-4.jpg"}  alt="Card image cap" />

              </div>

            </div>
            <WButton />
          </div>

        </div>

    );
	}
}
export default WorkBench;
