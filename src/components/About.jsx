import React, { Component } from 'react';
import '../css/style.css';
import { Container, Row, Col} from "reactstrap";
import ScrollToTopOnMount from '../pages/ScrollToTopOnMount';
import Smartphoneslide2 from './Smartphoneslide2';
import './Smartphoneslide2.css';


class About extends Component {
    render() {
        return (      
            <div className="content-home-1"> 
                <ScrollToTopOnMount/>
            <Container fluid>
                <Row>
                    <Col lg="12" md="12" sm="12">
                        <img src={require("../images/market_place.svg")} className="img-responsive img99"/> 
                    </Col>
                    <Col lg="2"></Col>
                        <Col lg="8">
                            <div className="device2  animated bounceInDown">
                                <div className="wp33 device-content">
                                    <Smartphoneslide2 />
                                </div>
                            </div>
                        </Col>      
                    <Col lg="2"></Col>
                </Row>
            </Container>
            </div>
      
     
        
        );
    }
}


export default About;

