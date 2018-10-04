import React, { Component } from 'react';
import { TabPane, Col, Row } from 'reactstrap';

class General extends Component {
    render() {
        return (
          <TabPane tabId={this.props.tabId}>
            <Row id="home">
                <Col md="6">
                  <form action="/action_page.php">
                    <div className="form-group">
                      <label className="control-label">Nama</label>
                        <input type="text" className="form-control-logindata" id="text" required/>
                    </div>
                    <div className="form-group">
                      <label className="control-label">Email</label>
                        <input type="email" className="form-control-logindata" id="email" required/>
                    </div>
                    <div className="form-group">
                      <label className="control-label">Password</label>
                        <input type="password" className="form-control-logindata" id="password" required/>
                    </div>
                        <a href="#"><b className="generaluser-b">Change Password?</b></a>
                    </form>
                            </Col>
                            <Col md="6">
                                <form action="/action_page.php">
                                        <div className="form-group">
                                                <label className="control-label">Phone Number</label>
                                            <input type="text" className="form-control-logindata" id="phone-number" required/>
                                        </div>
                                        <div className="form-group">
                                                <label className="control-label">Address</label>
                                                <textarea className="form-control-logindata" rows="5" id="address" required></textarea>
                                        </div>
                                </form>
                                <a className="button-logindata" href="#"><button type="button" className="button-logindata1">Save</button></a>
                        </Col>
            </Row>
          </TabPane>
        );
    }
}

export default General;
