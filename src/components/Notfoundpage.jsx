import React from 'react';
import '../css/style.css';
import { Container, Row, Col} from "reactstrap";

const Notfoundpage = () =>
 

           <Container>
               <Row>
                   <Col md="12" xs="12">
                    <div  className="notfoundpage">
                    <img src={require("../images/404_Not Found.jpg")} className="img-responsive"/>
                    </div>
                    </Col>
                    </Row>
                    </Container>

              
                
                



export default Notfoundpage;