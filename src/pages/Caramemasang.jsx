import * as React from 'react';
import '../css/style.css';
import ScrollToTopOnMount from './ScrollToTopOnMount';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';
import classnames from 'classnames';

class Caramemasang extends React.Component {
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
        <Container className="content-ask1 content-carabergabung">

          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '3' })}
                onClick={() => { this.toggle('3'); }}
              >
                Become a partner
             </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}
              >
                How to use partner’s dashboard
             </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}
              >
                How to sell
             </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="3">
              <Row>
                <Col md="12">
                  <div className="aturan-pengguna carabergabung">
                    <h3>Become a partner</h3>
                    <p>To join as our partner, visit the following link:<a href="https://partner.Modestravel.co/#/?signup=home">https://partner.Modestravel.co/#/?signup=home</a> After directed to the registration page, simply fill in the form, by key in your e-mail, travel name, PIC name and telephone number. Check your email and follow the next steps. We have made a step-by-step guide on how to register as our partner, it can be accessed via <a href="http://bit.ly/2n6vaYv.">http://bit.ly/2n6vaYv.</a></p>
                    {/* <Row className="cara-bergabung1">
                       <Col md="3">       

                       <div className="cara-bergabung">
                           <b>01</b><br/>
                           <img src={require("../images/document-2.png")}/>
                           <b className="cara-bergabung-heading">Daftar di Umrahajj</b>
                           <p>isi informasi anda dan pendukung</p>
                       </div>
                       </Col> 
                       
                       <Col md="3">       

                       <div className="cara-bergabung">
                           <b>02</b><br/>
                           <img src={require("../images/shaking-hands.png")}/>
                           <b className="cara-bergabung-heading">Email Konfirmasi</b>
                           <p>Cek Email dan lakukan konfirmasi</p>
                       </div>
                       </Col> 

                       
                       <Col md="3">       

                       <div className="cara-bergabung">
                           <b>03</b><br/>
                           <img src={require("../images/badge.png")}/>
                           <b className="cara-bergabung-heading">Silaturahmi Partner</b>
                           <p>Pilih jadwal kunjungan dan pelatihan</p>
                       </div>
                       </Col> 

                       
                       <Col md="3">       

                       <div className="cara-bergabung">
                           <b>04</b><br/>
                           <img src={require("../images/equality.png")}/>
                           <b className="cara-bergabung-heading">Upload Paket</b>
                           <p>Mulai upload Paket anda dan jual</p>
                       </div>
                       </Col> 
                       </Row> */}

                  </div>

                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="1">
              <Row>
                <ScrollToTopOnMount />
                <Col md="12" className="caramemasang">
                  <h3>How to use partner’s dashboard</h3>
                  <p>After you successfully join as a partner. You will be given an access to Modestravel’s partner dashboard as a service provider for Umrah and Hajj packages. In the dashboard you will be advised to start completing your travel profile information such as License, Logo, Branch office address, and things related to your travel information.</p>
                  <p>The dashboard will guide you to add your travel packages. On this page you will be directed to enter information regarding your travel packages. Starting with the package names, duration, time of departure & return, and all other information regarding the facilities provided in your packages. Then there is also the next tab to enter the image / icon that represents your travel package. Please note that the last step you need to do is to click save button then later the status will change to pending before getting verified by Modestravel team. </p>
                  {/* <img src={require("../images/pineapple.jpg")}/>
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
            */}

                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col md="12">
                  <div className="cara-menjual">

                    <div className="media">
                      {/* <div className="media-left">
                               <img src={require("../images/pineapple.jpg")}/>
                               </div> */}
                      <div className="media-body">
                        <h4 className="media-heading">How to sell</h4>
                        <p>To start selling / offering your travel package services, the travel package with pending status will be activated by the Modestravel party for a maximum of 1x24 hours before getting published to Modestravel platform. After the travel package has been published within the platform, don't forget to activate the sharing feature on your package link and use that service to integrated with your travel.</p>
                      </div>
                    </div>

                    {/* <div className="media">
                               <div className="media-body media-body2">
                                   <h4 className="media-heading media-heading2">Headline</h4>
                                       <p>Lorem ipsum dolor sit amet, quo ne idque viderer epicuri. Ex sed saepe argumentum, nibh accumsan ut vis, sed iudicabit ullamcorper no. Intellegat accommodare philosophia eos cu. At ius nulla elitr. At laudem tibique mea, ea modo imperdiet eum.</p>
                               </div>
                               <div class="media-right">
                                   <img src={require("../images/pineapple.jpg")}/>
                               </div>
                           </div> */}


                  </div>


                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Container></div>
    );
  }
}

export default Caramemasang;