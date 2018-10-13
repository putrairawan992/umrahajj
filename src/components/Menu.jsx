import React from "react";
import {Link} from 'react-router-dom';
import {NavLink} from 'reactstrap';
import { Container, Row, Col} from "reactstrap";
import '../css/style.css';
import logo from '../images/logo.svg';

export default ({ close }) => (
  <Container fluid>
    <Row>
      <Col lg="12">
      <div className="logo-umrahajj">
        <img src={logo}  alt="twitter" className="img-responsive"/>
      </div>
      <hr className="hr_menu" />
      </Col>
      </Row>
      <div className="menu main-menu2">
        <ul>
          <Container>
          <Row>
          <Col md="3" xs="12">
            <li className="bolder-menu-text">
              <NavLink onClick={close} tag={Link} to="/home">
               Modestravel
              </NavLink>
            </li>
            <li>
              <NavLink onClick={close} tag={Link} to="/tentangumrahajj">
              About Modestravel
              </NavLink>
            </li>
            <li>
              <NavLink onClick={close} tag={Link} to="/aturanpenggunaan">
              Rules of Use
              </NavLink>
            </li>
            <li>
              <NavLink onClick={close} tag={Link} to="/privacypolicy">
              Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink onClick={close} tag={Link} to="/faq">
              FAQ
              </NavLink>
            </li>
            </Col>
            <Col md="3" xs="12">
                <li className="bolder-menu-text">
                  <NavLink onClick={close} tag={Link} to="#">
                    Partner
                  </NavLink>
                </li>
                <li>
                    <NavLink onClick={close} tag={Link} to="#">
                    Our Partner
                    </NavLink>
                  </li>
                  <li>
                  <NavLink onClick={close} tag={Link} to="/carabergabung">
                  How to join
                  </NavLink>
                  </li>   
                  <li>
                  <NavLink onClick={close} tag={Link} to="/caramenjual">
                  How to sell
                  </NavLink>
                  </li>       
                </Col>
                <Col md="2" xs="12">
                <li className="bolder-menu-text">
                  <NavLink onClick={close} tag={Link} to="/#">
                  The user
                  </NavLink>
                  </li>
                  <li>
                  <NavLink onClick={close} tag={Link} to="/caramenggunakan">
                  How to use
                  </NavLink>
                  </li>
                  <li>
                  <NavLink onClick={close} tag={Link} to="/carapembayaran">
                  Payment method
                  </NavLink>
                  </li>
                  <li>
                  <NavLink onClick={close} tag={Link} to="/jaminanaman">
                  Safe guarantee
                  </NavLink>
                  </li>
                  </Col>
                    <Col md="2" xs="12">
                    <li className="bolder-menu-text">
                      <NavLink onClick={close} tag={Link} to="#">
                        Lain - Lain
                      </NavLink>
                    </li> 
                    <li>
                    <NavLink onClick={close} tag={Link} to="#">
                      Magazine
                    </NavLink>
                  </li>
                       
                    </Col>

                     <Col md="2" xs="12">
                    <li className="bolder-menu-text">
                      <NavLink onClick={close} tag={Link} to="contact">
                       Contact Us
                      </NavLink>
                    </li> 
                    </Col>
                </Row>
                </Container>
            </ul>
        </div>
  </Container>

);
