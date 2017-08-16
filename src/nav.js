import React from 'react';
import './App.css';
import './css/font-awesome-4.7.0/css/font-awesome.min.css';

export class Nav extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <a className="navbar-brand" href="#">Botname</a>
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
          </ul>
          <ul className="nav item my-2 my-lg-0">
					<li className="nav-item">
						<a className="nav-link" href="#"><span>

        <i className="fa fa-linkedin-square fa-lg" />
      </span></a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#"><span>

        <i className="fa fa-btc fa-lg" />
      </span></a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#"><span>

        <i className="fa fa-instagram fa-lg" />
      </span></a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#"><span>

        <i className="fa fa-facebook-square fa-lg" />
      </span></a>
					</li>
          </ul>
        </div>
      </nav>
    );
	}
}
export default Nav;
