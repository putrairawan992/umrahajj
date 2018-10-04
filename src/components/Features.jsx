import React, { Component } from 'react';
import '../css/style.css';
import {
    CarouselItem
  } from 'reactstrap';

import Smartphoneslide from './Smartphoneslide';
import { Container, Row, Col} from "reactstrap";

class Home extends Component {
    render() {
        return (

        
                <div className="jumbotron2">
                   <Container fluid>

                        <Row>
                            <Col md="12" xs="12" lg="12" sm="12">
                            <img src={require("../images/our features.svg")} className="hr_sendiri1"/>
                            </Col>
		                </Row>

                        <Row>
                            <Col md="3">
                                <div className="device wp3 animated bounceInDown">
                                    <div className="device-content">
                                      <Smartphoneslide />
                                    </div>
                                </div>
                            </Col>
                                <Col xs="12" md="3" lg="3" sm="3">
                                    <img src={require("../images/test11.png")} className="img-responsive img1 img2"/>
                                </Col>

                                <Col xs="12" md="3" lg="3" sm="3">
                                    <img src={require("../images/test22.png")} className="img-responsive img1"/>
                                </Col>

                                <Col xs="12" md="3" lg="3" sm="3">
                                    <img src={require("../images/test33.png")} className="img-responsive img1 img3"/>
                                </Col>
                          </Row>

                    </Container>
                </div>   
                
                
           
        );
    }
}


export default Home;