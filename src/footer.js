import React from 'react';
import './App.css';
import './css/font-awesome-4.7.0/css/font-awesome.min.css';

// fix all the css classes
export class Footer extends React.Component {
	render() {
    return(
      <footer>
        <div className="container">
          <div className="row footer_row">
            <div className="col-lg-6 col-xs-8 col-xs-12 footer__row-description">
              <p className="footer__paragraph footer__paragraph-bold">
                <strong>BOTNAME IS A NEW KIND OF BOT</strong>
              </p>
              <p className="footer__paragraph footer__paragraph-description">
                "Our bot focuses on new ideas to expand new horizons to bring prestige."
              </p>
            </div> {/* /.col-lg-6 col-xs-8 col-xs-12 footer__row-description */}
            <div className="col-lg-4 col-lg-offset-2 col-xs-12">
              <p className="footer__paragraph">
                <strong>CONTACT US</strong>
              </p>
              <ul className="social_icons">
                <li>
                  <a href="#" title="Bot @ LinkedIn">
                    <span>
                      <i className="fa fa-linkedin-square fa-lg" />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" title="Bot @ Facebook">
                    <span>
                      <i className="fa fa-facebook-square fa-lg" />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" title="Bot @ Twitter">
                    <span>
                      <i className="fa fa-twitter-square fa-lg" />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="/" title="Bot @ Instagram">
                    <span>
                      <i className="fa fa-instagram fa-lg" />
                    </span>
                  </a>
                </li>
              </ul>
            </div>  {/*}/.col-lg-4 col-lg-offset-2 col-xs-12 */}
            <div className="footer__row row-flat">
              <div className="row">
                <div className="col-lg-2 col-xs-6">
                  <p className="footer__paragraph footer__paragraph-bold">
                    <strong>BOT</strong>
                  </p>
                  <p className="footer__paragraph">
                    <a className="footer__paragraph--link" href="#">About Us
                    </a>
                  </p>
                  <p className="footer__paragraph">
                    <a className="footer__paragraph--link" href="#">Our Team
                    </a>
                  </p>
                </div> {/* /.col-lg-2 col-xs-6 */}
                <div className="col-lg-2 col-sx-6">
                  <p className="footer__paragraph footer__paragraph-bold">
                    <strong>ARTICLES</strong>
                  </p>
                  <p className="footer__paragraph">
                    <a className="footer__paragraph--link" href="#">Blog
                    </a>
                  </p>
                </div> {/* /.col-lg-2 col-xs-6 */}
                <div className="col-lg-2 col-sx-6">
                  <p className="footer__paragraph footer__paragraph-bold">
                    <strong>HELP US OUT</strong>
                  </p>
                  <p className="footer__paragraph">
                    <a className="footer__paragraph--link" href="#">GitHub
                    </a>
                  </p>
                </div> {/* /.col-lg-2 col-sx-6 */}
                <div className="col-lg-4 col-xs-12">
                  <p className="footer__paragraph footer__paragraph-bold">
                    <strong>OUR LOCATION</strong>
                  </p>
                  <p className="footer__paragraph footer__paragraph-description">
                    Anywhere, USA
                  </p>
                </div> {/* ./col-lg-4 col-xs-12 */}
              </div> {/* /.row */}
            </div> {/* /.footer___row row-flat */}
            </div> {/* /.row footer__row */}
        </div> {/* /.container */}
      </footer>
    )}
} export default Footer
