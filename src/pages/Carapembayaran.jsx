import * as React from 'react';
import '../css/style.css';
import ScrollToTopOnMount from './ScrollToTopOnMount';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';
import classnames from 'classnames';

class Carapembayaran extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
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
                 How To Use
               </NavLink>
             </NavItem>
             <NavItem>
               <NavLink
                 className={classnames({ active: this.state.activeTab === '1' })}
                 onClick={() => { this.toggle('1'); }}
               >
                 Payment Method
               </NavLink>
             </NavItem>
             <NavItem>
               <NavLink
                 className={classnames({ active: this.state.activeTab === '2' })}
                 onClick={() => { this.toggle('2'); }}
               >
                 Safe Gurantee
               </NavLink>
             </NavItem>
           </Nav>
           <TabContent activeTab={this.state.activeTab}> 
             <TabPane tabId="3">
               <Row>
                   <Col md="12">
                   <div className="cara-menjual">
                      
                      <div className="media">
                          {/* <div className="media-left">
                          <img src={require("../images/pineapple.jpg")}/>
                          </div> */}
                          <div className="media-body">
                          <h4 className="media-heading">HOW TO USE</h4>
                          <p>Modestravel is a free application for your needs, you can find and download on Google Play (Coming Soon at Ios). You will requested to sign up if you want to transaction, other than that you can use Modestravel’s features like Qibla Compass, Prayer Reminder, The Nearest Mosque, and Da’wa Schedule for your hijra needs.</p>
                          </div>
                      </div>

                      {/* <div className="media">
                          <div className="media-body media-body2">
                              <h4 className="media-heading media-heading2">Headline</h4>
                                  <p>Lorem ipsum dolor sit amet, quo ne idque viderer epicuri. Ex sed saepe argumentum, nibh accumsan ut vis, sed iudicabit ullamcorper no. Intellegat accommodare philosophia eos cu. At ius nulla elitr. At laudem tibique mea, ea modo imperdiet eum.</p>
                          </div>
                          <div className="media-right">
                              <img src={require("../images/pineapple.jpg")}/>
                          </div>
                      </div> */}

                      {/* <div className="media">
                          <div className="media-left">
                          <img src={require("../images/pineapple.jpg")}/>
                          </div>
                          <div className="media-body">
                          <h4 className="media-heading">Headline</h4>
                          <p>Lorem ipsum dolor sit amet, quo ne idque viderer epicuri. Ex sed saepe argumentum, nibh accumsan ut vis, sed iudicabit ullamcorper no. Intellegat accommodare philosophia eos cu. At ius nulla elitr. At laudem tibique mea, ea modo imperdiet eum.</p>
                          </div>
                      </div> */}
                  
                  </div>
                   </Col>
               </Row>
             </TabPane>  
             <TabPane tabId="1">
               <Row>
               <ScrollToTopOnMount/>
                   <Col md="12" className="caramemasang">
                       <h3>PAYMENT METHOD</h3>
                           <p>When you want to proceed the payment, you will able to pay your package through:</p>
                           <img src={require("../images/bank-transfer.png")} className="img-responsive"/>
                            {/* <b className="nomor-caramemasang">01</b><br/>
                           <b>Bank Transfer</b>
                          <p>Lorem ipsum dolor sit amet, quo ne idque viderer epicuri. Ex sed saepe argumentum, nibh accumsan ut vis, sed iudicabit ullamcorper no. Intellegat accommodare philosophia eos cu. At ius nulla elitr. At laudem tibique mea, ea modo imperdiet eum.</p> */}

                            {/* <p>Lorem ipsum dolor sit amet, quo ne idque viderer epicuri. Ex sed saepe argumentum, nibh accumsan ut vis, sed iudicabit ullamcorper no. Intellegat accommodare philosophia eos cu. At ius nulla elitr. At laudem tibique mea, ea modo imperdiet eum.</p> */}
                           <img src={require("../images/credit-card.png")} className="img-responsive"/>
                           {/* <b className="nomor-caramemasang">02</b><br/>
                           <b>Headline</b>
                           <p>Lorem ipsum dolor sit amet, quo ne idque viderer epicuri. Ex sed saepe argumentum, nibh accumsan ut vis, sed iudicabit ullamcorper no. Intellegat accommodare philosophia eos cu. At ius nulla elitr. At laudem tibique mea, ea modo imperdiet eum.</p> */}

                            {/* <p>Lorem ipsum dolor sit amet, quo ne idque viderer epicuri. Ex sed saepe argumentum, nibh accumsan ut vis, sed iudicabit ullamcorper no. Intellegat accommodare philosophia eos cu. At ius nulla elitr. At laudem tibique mea, ea modo imperdiet eum.</p>
                           <img src={require("../images/pineapple.jpg")}/>
                           <b className="nomor-caramemasang">03</b><br/>
                           <b>Headline</b>
                           <p>Lorem ipsum dolor sit amet, quo ne idque viderer epicuri. Ex sed saepe argumentum, nibh accumsan ut vis, sed iudicabit ullamcorper no. Intellegat accommodare philosophia eos cu. At ius nulla elitr. At laudem tibique mea, ea modo imperdiet eum.</p> */}
           
           
                 </Col>
               </Row>
             </TabPane>
             <TabPane tabId="2">
               <Row>
                 <Col md="12">
                       <div className="jaminan-aman">
                           <h3>SAFE GURANTEE</h3>
                               <p>To prevent unauthorized access, we enforce reasonable physical, electronic and organizational procedures to protect Personal Data from unlawful or accidental destruction, or loss, accidental alteration, or unauthorized access or disclosure. How We Use the Information collected and how we use Personal Data and other information collected through the Site. After registering to the Site, we will provide you with requested products and services information, build various features to make it easier to use, and contact you about all the service. This includes faster booking requests, better customer service and timely notification of new services and special offers.</p>

                       {/* <Row>
                          
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
                        
                       </Row>    */}

                       {/* <p>Lorem ipsum dolor sit amet, quo ne idque viderer epicuri. Ex sed saepe argumentum, nibh accumsan ut vis, sed iudicabit ullamcorper no. Intellegat accommodare philosophia eos cu. At ius nulla elitr. At laudem tibique mea, ea modo imperdiet eum.</p>     
                        */}
                           
                         
                       
                       </div>
   
                 
                 </Col>
               </Row>
             </TabPane>
           </TabContent>
         </Container></div>
        );
      }
    }

export default Carapembayaran;