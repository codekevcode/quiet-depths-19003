import React from 'react';
import './App.css';
import './css/font-awesome-4.7.0/css/font-awesome.min.css';
import './img/comingSoon.png';
import owl from './img/owl.svg';

export class Nav extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <a className="navbar-brand " href="#"><img className="img-fluid" /><img src={owl} className="App-logo" alt="logo" /></a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">About <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">FAQ</a>
            </li>
						<li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu">
          <a className="dropdown-item" id="dropdown1-tab" href="#dropdown1" role="tab" data-toggle="tab" aria-controls="dropdown1">About Us</a>
          <a className="dropdown-item" id="dropdown2-tab" href="#dropdown2" role="tab" data-toggle="tab" aria-controls="dropdown2">Team Stuff</a>
        </div>
      </li>
          </ul>
          <ul className="nav item my-2 my-lg-0">
						<li className="nav-item">
							<a className="nav-link" href="#"><span>

								<i className="fa fa-linkedin-square fa-2x" />
							</span></a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#"><span>

								<i className="fa fa-twitter fa-2x" />
							</span></a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#"><span>

        <i className="fa fa-instagram fa-2x" />
      </span></a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#"><span>

        <i className="fa fa-facebook-square fa-2x" />
      </span></a>
					</li>
          </ul>
        </div>
      </nav>
    );
	}
}
export default Nav;
