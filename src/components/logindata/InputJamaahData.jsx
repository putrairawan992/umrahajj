import React, { Component } from 'react';
import { TabPane, Row, Col } from 'reactstrap';
import * as moment from 'moment';
import axios from 'axios';
import store from '../../store';

class InputJamaahData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldFetch: true,
            bookingList: [],
            bookingCode: null,
            jamaahList: [],
            jamaah: {
                title: null,
                name: null,
                phone: null,
                email: null,
                no_id: null,
                no_passport: null,
                alamat: null
            }
        };

        this.handleChangeBookingCode = this.handleChangeBookingCode.bind(this);
        this.handleAllFormInputChange = this.handleAllFormInputChange.bind(this);
        this.saveJamaahList = this.saveJamaahList.bind(this);
    }

    fetchBookingInformations(userId, callback) {
        var bookingInformations = [], errors = [];

        axios.post('https://api.modestravel.com/transactions/list/' + userId)
          .then(function(response) {
              if(typeof response.data.data !== 'undefined') {
                  bookingInformations = response.data.data;
              }
          })
          .catch(function(error) {
              errors.push(error);
          })
          .then(function() {
              callback(errors, bookingInformations);
          });
    }

    initFetchOperation() {
        var errors = [];

        var currentState = store.getState();
        var rootClass = this;

        this.fetchBookingInformations(currentState.userInformations.user_id, function(error, bookingInformations) {
            errors.push(error);

            rootClass.setState({ shouldFetch: false, bookingList: bookingInformations });
        });
    }

    addJamaahDataToList(jamaah) {
        this.setState({ jamaahList: [...this.state.jamaahList, jamaah] });
    }

    storeJamaahList() {
        var currentState = store.getState();

        axios.post('https://api.modestravel.com/transactions/book_details/' + currentState.userInformations.user_id,
        {
          booking_code: this.state.bookingCode,
          customers: this.state.jamaahList
         })
          .then((response) => {
              if(response.data.status) {
                  alert(response.data.message);
                  this.resetJamaahState();
              } else if(!response.data.status) {
                  alert(response.data.message);
              }
              // console.log(response);
          })
          .catch((error) => {
              alert('An error just occured!');
              console.log(error);
          });
    }

    saveJamaahList(event) {

      this.addJamaahDataToList(this.state.jamaah);

      this.storeJamaahList();

      event.preventDefault();

    }

    resetJamaahState() {
        this.setState({ jamaah: {
          title: null,
          name: null,
          phone: null,
          email: null,
          no_id: null,
          no_passport: null,
          alamat: null
        } });
    }

    handleAllFormInputChange(event) {
        var jamaah = {...this.state.jamaah};
        jamaah[event.target.name] = (event.target.value === "") ? null : event.target.value;
        this.setState({ jamaah });
    }

    handleChangeBookingCode(event) {
        this.setState({ bookingCode: (event.target.value === "") ? null : event.target.value });
    }

    createBookingCodeOptionList() {
        var list = [];
        var rootClass = this;

        for (var i = 0; i < this.state.bookingList.length; i++) {
            list.push(<option key={i} value={this.state.bookingList[i].booking_code}>
              ({this.state.bookingList[i].booking_code}) {this.state.bookingList[i].nama_paket} - {this.state.bookingList[i].vendor} - {moment(this.state.bookingList[i].date).format('D MMM YYYY')}/{this.state.bookingList[i].total_cust} Jamaah/{this.state.bookingList[i].price_type}/{this.state.bookingList[i].price_html}
            </option>);
        }

        return list;
    }

    render() {
      if(this.state.shouldFetch && this.state.bookingList.length < 1) {
          this.initFetchOperation();
      }
      return (
        <TabPane id="menu1" tabId="2">
          <form onSubmit={this.saveJamaahList}>
        <Row>
              <Col md="12">
              <div className="form-group">
                  <select id="booking" className="form-control-logindata" name="booking_code" value={this.state.booking_code} onChange={this.handleChangeBookingCode}>
                     <option value="">-- Select Booking Code --</option>
                     {this.createBookingCodeOptionList()}
                  </select>
                </div>
              </Col>
                <Col md="6">
                <div className="form-group">
                  <select id="subject" name="title" value={this.state.jamaah.title} onChange={this.handleAllFormInputChange}>
                     <option value="">-- Title --</option>
                     <option value="Mr.">Mr</option>
                     <option value="Mrs.">Mrs</option>
                  </select>
                </div>
                <div className="form-group">
                    <input type="text" name="name" value={this.state.jamaah.name} onChange={this.handleAllFormInputChange} className="form-control-logindata" id="text" placeholder="Nama" required/>
                  </div>
                <div className="form-group">
                  <input type="phone" name="phone" value={this.state.jamaah.phone} onChange={this.handleAllFormInputChange} className="form-control-logindata" id="phone" placeholder="Phone Number" required/>
                </div>
                <div className="form-group">
                  <input type="text" name="no_id" value={this.state.jamaah.no_id} onChange={this.handleAllFormInputChange} className="form-control-logindata" id="ktp" placeholder="No KTP" required/>
                </div>
              </Col>
              <Col md="6">
                  <div className="form-group">
                    <input type="text" name="no_passport" value={this.state.jamaah.no_passport} onChange={this.handleAllFormInputChange} className="form-control-logindata" id="passport" placeholder="No Passport" required/>
                  </div>
                    <div className="form-group">
                      <input type="email" name="email" value={this.state.jamaah.email} onChange={this.handleAllFormInputChange} className="form-control-logindata" id="email" placeholder="Email" required/>
                    </div>
                    <div className="form-group">
                        <textarea name="alamat" value={this.state.jamaah.alamat} onChange={this.handleAllFormInputChange} className="form-control-logindata" rows="5" id="address" placeholder="Address" required></textarea>
                    </div>
                <button type="submit" className="button-logindata1">Save</button>
            </Col>
            </Row>
          </form>
        </TabPane>
      );
    }
}

export default InputJamaahData;
