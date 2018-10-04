import * as React from 'react';
import '../css/style.css';
import ScrollToTopOnMount from './ScrollToTopOnMount';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';
import classnames from 'classnames';

class Carabergabung extends React.Component {
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
          <Container className="content-ask1 content-carabergabung">
      
            <Nav tabs>
            <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '3' })}
                  onClick={() => { this.toggle('3'); }}
                >
                  Cara Bergabung
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                  Cara Memasang Paket
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                  Cara Menjual
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}> 
              <TabPane tabId="3">
                <Row>
                    <Col md="12">
                        <div className="aturan-pengguna carabergabung">
                            <h3>Cara Bergabung</h3>
                                <p>Untuk bergabung menjadi mitra (partner) UmraHajj dapat langsung klik link berikut : <a href="https://partner.umrahajj.co/#/?signup=home" target="blank">https://partner.umrahajj.co/#/?signup=home</a>. Setelah masuk pada halaman pendaftaran anda cukup isikan formulir yang tersedia, berupa email, nama travel, nama pic dan nomor telepon. Cek email inbox anda dan ikuti langkah-langkah selanjutnya. Kami telah membuat panduan langkah-langkah mendaftar sebagai partner, bisa diakses melalui <a href="http://bit.ly/2n6vaYv" target="blank">http://bit.ly/2n6vaYv</a>.</p>
                        <Row className="cara-bergabung1">
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
                        </Row>
                                    
                        </div>

                    </Col>
                </Row>
              </TabPane>  
              <TabPane tabId="1">
				<Row>
                <ScrollToTopOnMount/>
					<Col md="12" className="caramemasang">
                        <h3>Cara Memasang Paket</h3>
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
                        <div className="cara-menjual">
                        
                            <div className="media">
                                <div className="media-left">
                                <img src={require("../images/pineapple.jpg")}/>
                                </div>
                                <div className="media-body">
                                <h4 claclassNamess="media-heading">Headline</h4>
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
            </TabContent>
          </Container></div>
        );
      }
    }

export default Carabergabung;