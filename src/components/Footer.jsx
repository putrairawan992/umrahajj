import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import '../css/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';
import {NavLink} from 'reactstrap';


class Footer extends Component {
    render() {
     return(
      	<Container fluid className="footer">
          <Row>
            <Col xs="12" lg="12">
              <div className="menufirst">
                <ul className="menu menu11">
                  {/*<li><img src={require("../images/logokatek.png")}/></li>*/}
                </ul>
              </div>
              </Col>
           </Row>
           <Row className="menufirst77">
              <Col  xs="12" sm="2"  lg="2">
              <div className="menufirst1">
                <ul className="menu">
                <li className="menu22">
                <NavLink to="#">
                    <img src={require("../images/logokatek.png")}/>
                </NavLink>
                </li>
                <li className="menu33">
                  <NavLink to="#">
                  <img src={require("../images/phone2.png")}/>
                    <p>+62 21 27899910</p>
                  </NavLink>
                </li>
                <li className="menu44">
                <NavLink to="#">
                  09:00 am - 05:00 pm
                </NavLink>
                </li>
                </ul>
              </div>
						</Col>
            <Col  xs="12" sm="2"  lg="2">
              <div className="menufirst1">
                <ul className="menu">
                <li className="menu22">
                <NavLink tag={Link} to="/home">
                    Modestravel
                </NavLink>
                </li>
                <li>
                  <NavLink tag={Link} to="/tentangumrahajj">
                    About Modestravel
                  </NavLink>
                </li>
                <li>
                  <NavLink tag={Link}  to="/faq">
                   FAQ
                  </NavLink>
                </li>
                <li>
                  <NavLink tag={Link} to="/aturanpenggunaan">
                   Rules of Use
                  </NavLink>
                </li>
                <li>
                  <NavLink tag={Link} to="/privacypolicy">
                  Privacy Policy
                  </NavLink>
                </li>
                </ul>
              </div>
						</Col>
            <Col  xs="12" sm="2"  lg="2">
            <div className="menufirst2">
							<ul className="menu">
              <li className="menu22">
                  <NavLink  tag={Link} to="#">
                  Partner
                  </NavLink>
                </li>
                <li>
                  <NavLink  tag={Link} to="/caramenggunakan">
                  How to use
                  </NavLink>
                </li>
                <li>
                  <NavLink  tag={Link} to="/carapembayaran">
                  Payment method
                  </NavLink>
                </li>
                <li>
                  <NavLink  tag={Link} to="/jaminanaman">
                  Safe guarantee
                  </NavLink>
                </li>
							</ul>
						</div>
            </Col>
            <Col  xs="12" sm="2"  lg="2">
							<div className="menufirst3">
									<ul className="menu">
                  <li className="menu22">
                  <NavLink  tag={Link} to="howtobepartner">
                  Partner
                  </NavLink>
                </li>
                <li>
                <NavLink  tag={Link} to="/carabergabung">
                How to join
                </NavLink>
                </li>
                <li>
                <NavLink  tag={Link} to="/caramemasang">
                How to install the package
                </NavLink>
                </li>
                <li>
                <NavLink  tag={Link} to="/caramenjual">
                How to sell
                </NavLink>
                </li>
									</ul>
							</div>
            </Col>
            <Col  xs="12" sm="1" lg="1">
							<div className="menufirst4">
									<ul className="menu">
                  <li className="menu22">
                  <NavLink  tag={Link} to="#">
                  Etc
                  </NavLink>
                </li>
                <li>
                  <NavLink  tag={Link} to="#">
                 Magazine
                  </NavLink>
                </li>
									</ul>
							</div>
            </Col>
            <Col  xs="12" lg="3" sm="3">
              {/* <div  className="subscribe">
                <b className="footer-bold">Subscribe to Umrahajj via Email</b>
                  <p className="footer-p">Excepteur sint occaecat cupidatat non proident.</p>
                  <form>
										<div className="form-group">
											<input className="form-control" type="text" name="email" placeholder="youremail@example.com"/>
												<button className="btn btn-success btn3" type="submit">SUBSCRIBE</button>
										</div>
									</form>
              </div> */}
              <div className="download-icon">
							<b>Download Modestravel Apps</b>
              <img src={require("../images/googleplay.png")} className=" img-responsive googleplay" />
              <img src={require("../images/iosstore.png")} className=" img-responsive iosstore"/>
              <br/><br/><br/>
              <b><a href="https://www.facebook.com/umrahajjworld/" target="_blank">
              <FontAwesomeIcon icon={faFacebook} className="callme" /></a>
              <a href="https://www.instagram.com/umrahajj/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} className="callme" /></a>
              <a href="https://www.linkedin.com/company/umrahajj/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} className="callme" /></a>
              <a href="https://twitter.com/umrahajjworld" target="_blank">
              <FontAwesomeIcon icon={faTwitter} className="callme" /></a></b>
							</div>
            </Col>
            <Col xs="12" lg="12" className="footer-bottom ">
                  <p> www.modestravel.com &copy; Modestravel 2018</p>
            </Col>
          </Row>
        </Container>




    );
  }
}

export default Footer;
