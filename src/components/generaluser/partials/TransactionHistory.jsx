import React, { Component } from 'react';
import { Col, Row, NavLink } from 'reactstrap';
import {Link} from 'react-router-dom';
import { setUserOption } from '../../../actions/user-options';
import store from '../../../store';

class TransactionHistory extends Component {
    constructor(props) {
        super(props);
        this.setSelectedBookingCode = this.setSelectedBookingCode.bind(this);
    }

    setSelectedBookingCode() {
        store.dispatch(setUserOption('selectedBookingCode', this.props.invoice));
    }

    render() {
        return (
          <Col md="12">
            <div className="generaluser1">
            <NavLink tag={Link} onClick={this.setSelectedBookingCode} to="logindata">
              <Row>
                <Col md="6">
                    <p className="invoice">#{this.props.invoice}</p>
                </Col>
                  <Col md="6">
                      <p className="tanggal-generaluser1">{this.props.transactionDate}</p>
                  </Col>
                      <Col md="2">
                          <b>{this.props.packageName}</b>
                      </Col>
                        <Col md="2">
                            <p>{this.props.vendor}</p>
                        </Col>
                            <Col md="2">
                                <p>{this.props.destinationCode}</p>
                            </Col>
                                <Col md="2">
                                    <p>{this.props.totalCustomer} person</p>
                                </Col>
                                    <Col md="2">
                                        <p>{this.props.priceType} Rooms</p>
                                    </Col>
                                        <Col md="2">
                                            <p>{this.props.startDate} - {this.props.endDate}</p>
                                                <b className="harga-user">{this.props.totalPrice}</b>
                                        </Col>
                </Row>


                    </NavLink>
                </div>
            </Col>
        );
    }
}

export default TransactionHistory;
