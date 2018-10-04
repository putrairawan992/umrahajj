import React, { Component } from 'react';
import { TabPane, Row, Col } from 'reactstrap';
import axios from 'axios';
import * as moment from 'moment';
import TransactionHistory from './partials/TransactionHistory';
import { setUserOption } from '../../actions/user-options';
import store from '../../store';

class TransactionHistories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldFetch: true,
            transactionList: [],
            bookingList: [],
            bookingCode: null
        };

        // this.handleChangeBookingCode = this.handleChangeBookingCode.bind(this);
        this.unsubscribeStateManager = store.subscribe(this.handleUserOptions.bind(this));
    }

    handleUserOptions() {
        const currentStates = store.getState();

        this.setState({ bookingCode: currentStates.userOptions.selectedBookingCode });
    }

    fetchTransactionList(user_id, callback) {
      var transactionList = [];
      var errors = []; // Error bag

      axios.post('https://api.modestravel.com/transactions/list/' + user_id)
        .then(function(response) {
            if(typeof response.data.data !== 'undefined') {
                for (var i = 0; i < response.data.data.length; i++) {
                  transactionList.push(response.data.data[i]);
                }
            }
        })
        .catch(function(error) {
            errors.push(error);
        })
        .then(function() {
            callback(errors, transactionList);
        });
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
        var currentState = store.getState();
        var errors = [];
        var self = this;

        self.fetchBookingInformations(currentState.userInformations.user_id, function(error, bookingList) {
            errors.push(error);
            self.fetchTransactionList(currentState.userInformations.user_id, function(error, transactionList) {
                errors.push(error);

                self.setState({ shouldFetch: false, transactionList: transactionList, bookingList: bookingList });
            });
        });
    }

    createListOfTransactions() {
        var list = [];
        var self = this;

        for (var i = 0; i < this.state.transactionList.length; i++) {
            // if(this.state.transactionList[i].booking_code === this.state.bookingCode) {
                list.push(<TransactionHistory
                  key={i}
                  invoice={self.state.transactionList[i].booking_code}
                  packageName={self.state.transactionList[i].nama_paket}
                  transactionDate={moment(self.state.transactionList[i].date).format('dddd, D MMM YYYY, k:mm ZZ')}
                  vendor={self.state.transactionList[i].vendor}
                  destinationCode="JKT - JED"
                  totalCustomer={self.state.transactionList[i].total_cust}
                  priceType={self.state.transactionList[i].price_type}
                  startDate={moment(self.state.transactionList[i].start_date).format('D MMM')}
                  endDate={moment(self.state.transactionList[i].end_date).format('D MMM YYYY')}
                  totalPrice={self.state.transactionList[i].price_html}
                />);
            // }
        }

        return list;
    }

    componentDidMount() {
        if(this.state.shouldFetch && this.state.transactionList.length < 1) {
            this.initFetchOperation();
        }
    }

    // handleChangeBookingCode(event) {
    //     this.setState({ bookingCode: (event.target.value === "") ? null : event.target.value });
    //     store.dispatch(setUserOption('selectedBookingCode', (event.target.value === "") ? null : event.target.value ));
    // }
    //
    // createBookingCodeOptionList() {
    //     var list = [];
    //     var rootClass = this;
    //
    //     for (var i = 0; i < this.state.bookingList.length; i++) {
    //         list.push(<option key={i} value={this.state.bookingList[i].booking_code}>
    //           ({this.state.bookingList[i].booking_code}) {this.state.bookingList[i].nama_paket} - {this.state.bookingList[i].vendor} - {moment(this.state.bookingList[i].date).format('D MMM YYYY')}/{this.state.bookingList[i].total_cust} Jamaah/{this.state.bookingList[i].price_type}/{this.state.bookingList[i].price_html}
    //         </option>);
    //     }
    //
    //     return list;
    // }

    componentWillUnmount() {
        this.unsubscribeStateManager();
    }

    render() {
      return (
        <TabPane id="menu1" tabId={this.props.tabId}>
          <Row>
            {/* <Col md="12">
            <div class="form-group">
                <select id="booking" class="form-control-logindata" name="booking_code" value={this.state.bookingCode} onChange={this.handleChangeBookingCode}>
                   <option value="">-- Select Booking Code --</option>
                   {this.createBookingCodeOptionList()}
                </select>
              </div>
            </Col> */}
            {this.createListOfTransactions()}
          </Row>
        </TabPane>
      );
    }

}

export default TransactionHistories;
