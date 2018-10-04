import * as React from 'react';
import '../css/style.css';
import ScrollToTopOnMount from './ScrollToTopOnMount';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';
import classnames from 'classnames';

class Caramenggunakan extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '3'
        };
      }
    
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }
      render() {
        return (
        <div>
          <ScrollToTopOnMount />
          <Container fluid className="content-ask2"></Container>
          <Container className="content-ask1 content-caramenggunakan">
      
            <Nav tabs>
            <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '3' })}
                  onClick={() => { this.toggle('3'); }}
                >
                  Cara Menggunakan
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                  Cara Pembayaran
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                  Jaminan Aman
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}> 
              <TabPane tabId="3">
                <Row>
                    <Col md="12">
                    <div className="cara-menjual">
                       
                       <div className="media">
                           <div className="media-left">
                           <img src={require("../images/pineapple.jpg")}/>
                           </div>
                           <div className="media-body">
                           <h4 className="media-heading">Headline</h4>
                           <p>Lorem ipsum dolor sit amet, quo ne idque viderer epicuri. Ex sed saepe argumentum, nibh accumsan ut vis, sed iudicabit ullamcorper no. Intellegat accommodare philosophia eos cu. At ius nulla elitr. At laudem tibique mea, ea modo imperdiet eum.</p>
                           </div>
                       </div>

                       <div className="media">
                           <div className="media-body media-body2">
                               <h4 className="media-heading media-heading2">Headline</h4>
                                   <p>Lorem ipsum dolor sit amet, quo ne idque viderer epicuri. Ex sed saepe argumentum, nibh accumsan ut vis, sed iudicabit ullamcorper no. Intellegat accommodare philosophia eos cu. At ius nulla elitr. At laudem tibique mea, ea modo imperdiet eum.</p>
                           </div>
                           <div className="media-right">
                               <img src={require("../images/pineapple.jpg")}/>
                           </div>
                       </div>

                       <div className="media">
                           <div className="media-left">
                           <img src={require("../images/pineapple.jpg")}/>
                           </div>
                           <div className="media-body">
                           <h4 className="media-heading">Headline</h4>
                           <p>Lorem ipsum dolor sit amet, quo ne idque viderer epicuri. Ex sed saepe argumentum, nibh accumsan ut vis, sed iudicabit ullamcorper no. Intellegat accommodare philosophia eos cu. At ius nulla elitr. At laudem tibique mea, ea modo imperdiet eum.</p>
                           </div>
                       </div>
                   
                   </div>
                    </Col>
                </Row>
              </TabPane>  
              <TabPane tabId="1">
				<Row>
                <ScrollToTopOnMount/>
					<Col md="12" className="caramemasang">
                        <h3>Cara Pembayaran </h3>
                            <p>Lorem ipsum dolor sit amet, quo ne idque viderer epicuri. Ex sed saepe argumentum, nibh accumsan ut vis, sed iudicabit ullamcorper no. Intellegat accommodare philosophia eos cu. At ius nulla elitr. At laudem tibique mea, ea modo imperdiet eum.</p>
                            <img src={require("../images/pineapple.jpg")}/>
                            <b className="nomor-caramemasang">01</b><br/>
                            <b>Headline</b>
                            <p>Lorem ipsum dolor sit amet, quo ne idque viderer epicuri. Ex sed saepe argumentum, nibh accumsan ut vis, sed iudicabit ullamcorper no. Intellegat accommodare philosophia eos cu. At ius nulla elitr. At laudem tibique mea, ea modo imperdiet eum.</p>

                             <p>Lorem ipsum dolor sit amet, quo ne idque viderer epicuri. Ex sed saepe argumentum, nibh accumsan ut vis, sed iudicabit ullamcorper no. Intellegat accommodare philosophia eos cu. At ius nulla elitr. At laudem tibique mea, ea modo imperdiet eum.</p>
                            <img src={require("../images/pineapple.jpg")}/>
                            <b className="nomor-caramemasang">02</b><br/>
                            <b>Headline</b>
                            <p>Lorem ipsum dolor sit amet, quo ne idque viderer epicuri. Ex sed saepe argumentum, nibh accumsan ut vis, sed iudicabit ullamcorper no. Intellegat accommodare philosophia eos cu. At ius nulla elitr. At laudem tibique mea, ea modo imperdiet eum.</p>

                             <p>Lorem ipsum dolor sit amet, quo ne idque viderer epicuri. Ex sed saepe argumentum, nibh accumsan ut vis, sed iudicabit ullamcorper no. Intellegat accommodare philosophia eos cu. At ius nulla elitr. At laudem tibique mea, ea modo imperdiet eum.</p>
                            <img src={require("../images/pineapple.jpg")}/>
                            <b className="nomor-caramemasang">03</b><br/>
                            <b>Headline</b>
                            <p>Lorem ipsum dolor sit amet, quo ne idque viderer epicuri. Ex sed saepe argumentum, nibh accumsan ut vis, sed iudicabit ullamcorper no. Intellegat accommodare philosophia eos cu. At ius nulla elitr. At laudem tibique mea, ea modo imperdiet eum.</p>
			
			
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col md="12">
                        <div className="jaminan-aman">
                            <h3>Jaminan Aman</h3>
                                <p>Lorem ipsum dolor sit amet, quo ne idque viderer epicuri. Ex sed saepe argumentum, nibh accumsan ut vis, sed iudicabit ullamcorper no. Intellegat accommodare philosophia eos cu. At ius nulla elitr. At laudem tibique mea, ea modo imperdiet eum.</p>

                        <Row>
                           
                            <Col md="3" className="headline-jaminan-aman">
                                <img src={require("../images/pineapple.jpg")} className="img-responsive"/>
                                    <b>Headline</b>
                                    <p>Lorem ipsum dolor sit amet, quo ne idque viderer epicuri. Ex sed saepe argumentum, nibh</p>
                            </Col>    
                            <Col md="3" className="headline-jaminan-aman">
                                <img src={require("../images/pineapple.jpg")} className="img-responsive"/>
                                    <b>Headline</b>
                                    <p>Lorem ipsum dolor sit amet, quo ne idque viderer epicuri. Ex sed saepe argumentum, nibh</p>
                            </Col>    
                            <Col md="3" className="headline-jaminan-aman">
                                <img src={require("../images/pineapple.jpg")} className="img-responsive"/>
                                    <b>Headline</b>
                                    <p>Lorem ipsum dolor sit amet, quo ne idque viderer epicuri. Ex sed saepe argumentum, nibh</p>
                            </Col>    
                            <Col md="3" className="headline-jaminan-aman">
                                <img src={require("../images/pineapple.jpg")} className="img-responsive"/>
                                    <b>Headline</b>
                                    <p>Lorem ipsum dolor sit amet, quo ne idque viderer epicuri. Ex sed saepe argumentum, nibh</p>
                            </Col>   
                         
                        </Row>   

                        <p>Lorem ipsum dolor sit amet, quo ne idque viderer epicuri. Ex sed saepe argumentum, nibh accumsan ut vis, sed iudicabit ullamcorper no. Intellegat accommodare philosophia eos cu. At ius nulla elitr. At laudem tibique mea, ea modo imperdiet eum.</p>     
                        
                            
                          
                        
                        </div>
    
                  
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </Container></div>
        );
      }
    }

export default Caramenggunakan;