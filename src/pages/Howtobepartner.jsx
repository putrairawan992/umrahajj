import React, { Component } from 'react';
import '../css/style.css';
import { Container, Row, Col} from "reactstrap";
import ScrollToTopOnMount from './ScrollToTopOnMount';


class Howtobepartner extends React.Component {
    render () {
        return(
        <div>    
          <div className="howtobepartner1">  
          <ScrollToTopOnMount/>  
            <Container>
                <Row>
                    <Col md="12">
                    <h3>How to be Partner</h3>
                        </Col>
                    </Row>
                    <Row>
                    <Col md="3" className="howtobepartner">
                            <img src={require("../images/document-2.png")} className="img-responsive img33"/>
                        <br/>
                            <p>Daftar di UmraHajj
						        <br/>
                                    <br/>Isi informasi anda
						                    dan pendukung </p>
                        </Col>
                        <Col md="3" className="howtobepartner">
                        <img src={require("../images/shaking-hands.png")} className="img-responsive img33"/>
                        <br/>
                            <p>Email Konfirmasi
								<br/>
                                    <br/>Cek Email dan
								        lakukan Konfirmasi </p>
                    
                      </Col>
                      <Col md="3" className="howtobepartner">
                        <img src={require("../images/badge.png")} className="img-responsive img33"/>
                        <br/>
                        <p>Silaturahim Partner
							<br/>
                                <br/>Pilih jadwal
									    kunjungan dan
									            pelatihan </p>
                    
                      </Col>
                      <Col md="3" className="howtobepartner">
                        <img src={require("../images/equality.png")} className="img-responsive img33"/>
                        <br/>
                        <p>Upload Paket
										<br/>
                                        <br/>Mulai Upload Paket
										anda dan Jual</p>
                               
                    
                      </Col>
                    </Row>
            </Container>    
            </div>

            <Container>
                <div className="howtobepartner-text">
                    <Row>
                        <Col md="12">
                            <h3>Partner Benefit</h3>
                            <p>1. UmraHajj reach Millennials as new market user to contribute Umrah pilgrim to the next level.</p>
                            <p>2. As an UmraHajj for all, UmraHajj come to be daily #YourHijraPartner anytime and anywhere.</p>
                            <p>3. In this digital era, UmraHajj reach the new business with one stop solution to make Umrah Travel and User easily connected.</p>
                            <a href="https://partner.modestravel.com/#/?signup=home">
				            <button type="button" className="btn-howtobepartner-text ">I want to join</button></a>
				            <button type="button" className="btn-howtobepartner-text1 ">I will thinking it</button>
                        </Col>
                    </Row>
                </div>
            </Container>

            </div>
        );
    }
}



  

    


export default Howtobepartner;