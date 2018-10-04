import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import axios from 'axios';

class Package extends Component {
    createHotelList(hotels) {
        return (
          <ul>
              <li> {hotels.firstHotelName} </li>
              <li> {hotels.secondHotelName} </li>
          </ul>
        );
    }

    createFlightList(flights) {
        return (
          <ul>
              <li> {flights.departAirline} ({flights.departAirportCode} - {flights.departAirportArvCode}) {flights.departEst} - {flights.departEstArv} </li>
              <li> {flights.returnAirline} ({flights.returnAirportCode} - {flights.returnAirportArvCode}) {flights.returnEst} - {flights.returnEstArv} </li>
          </ul>
        );
    }

    createFacilitiesList(facilities) {
        var list = [];

        for (var i = 0; i < facilities.length; i++) {
            list.push(<Col key={i} md="2">
                <li><img src={require("../../../images/512 (4).png")} alt={facilities[i].name} />
                <p>{facilities[i].name}</p>
              </li>
              </Col>
            );
        }

        return list;
    }

    createPaymentList(payments) {
        var list = [];

        for (var i = 0; i < payments.length; i++) {
            list.push(<Col md="12">
              <Row>
                <Col md="2">
                    <p>{payments[i].type}</p>
                </Col>
                              <Col md="2">
                    <p>{payments[i].payment_name}</p>
                </Col>
                              <Col md="2">
                    <p>{payments[i].nominal_html}</p>
                </Col>
              </Row>
            </Col>
            );
        }

        return list;
    }

    render() {
        return (
          <div>
            <br/>
            <h3>{this.props.packageName}</h3>
            <br/>
            <div className="package-summary">
            <br/>
              <div className="package-summary1">
                <div className="row">
                <div className="col-md-2">
                    <p>No. Invoice</p>
                    <p>#{this.props.invoice}</p>
                </div>
                <div className="col-md-2">
                    <p>Booking Date</p>
                    <p>{this.props.bookingDate}</p>
                </div>
                <div className="col-md-2">
                    <p>Partner</p>
                    <p>{this.props.vendor}</p>
                </div>
                <div className="col-md-2">
                    <p>Jemaah</p>
                    <p>{this.props.totalCustormer} Person</p>
                </div>
                <div className="col-md-2">
                    <p>Rooms Type</p>
                    <p>{this.props.roomType}</p>
                </div>
                <div className="col-md-2">
                    <p>Total Price</p>
                    <p>{this.props.totalPrice}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <hr/>
                  <b>Description</b>
                  <p dangerouslySetInnerHTML={{__html: this.props.description }} />
              </div>
                </div>

              </div>


            <div className="package-summary3">
              <div className="row">
              <div className="col-md-6">
                <b className="flight2">Hotel</b>
                {this.createHotelList(this.props.hotels)}
              </div>
              <div className="col-md-6">
                  <b className="flight1">Flight</b>
                    {this.createFlightList(this.props.flights)}
                </div>
            </div>
          </div>
                    <br/>
                    <br/>

              <b className="fasicilities">Facilities</b>

            <br/><br/>

                    <div className="package-summary2">
          <Row>
            {this.createFacilitiesList(this.props.facilities)}
          </Row>
          </div>
                <br/><br/>
                <div className="package-summary4">
          <Row>
          <br/><br/>
              <Col md="12">
                <Row>
                    <Col md="2">
                      <b>Payment type</b>
                    </Col>
                                  <Col md="2">
                      <b>Transaction</b>
                    </Col>
                                  <Col md="2">
                      <b>First Payment</b>
                    </Col>
                </Row>
              </Col>
              {this.createPaymentList(this.props.paymentList)}

          </Row>
                </div>

          </div>
        </div>
        );
    }
}

export default Package;
