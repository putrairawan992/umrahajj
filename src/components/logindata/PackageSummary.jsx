import React, { Component } from 'react';
import { TabPane, Col } from 'reactstrap';
import axios from 'axios';
import * as moment from 'moment';
import Package from './partials/Package';
import store from '../../store';


class PackageSummary extends Component {
  constructor(props) {
      super(props);
      this.state = {
          shouldFetch: true,
          transactionList: [],
          airportList: [],
          bookingCode: null
      };

      // this.handleChangeBookingCode = this.handleChangeBookingCode.bind(this);
      this.unsubscribeStateManager = store.subscribe(this.handleUserOptions.bind(this));
  }

  handleUserOptions() {
      const currentStates = store.getState();

      console.log(currentStates);

      this.setState({ bookingCode: currentStates.userOptions.selectedBookingCode });
  }

  fetchTransactionList(userId, callback) {
    var bookingIdsAndCodeCollection = [], errors = []; // Error bag

    axios.post('https://api.modestravel.com/transactions/list/' + userId)
      .then(function(response) {
          if(typeof response.data.data !== 'undefined') {
              for (var i = 0; i < response.data.data.length; i++) {
                bookingIdsAndCodeCollection.push({ bookingId: response.data.data[i].id, packageId: response.data.data[i].id_package, booking_code: response.data.data[i].booking_code });
              }
          }
      })
      .catch(function(error) {
          errors.push(error);
      })
      .then(function() {
          callback(errors, bookingIdsAndCodeCollection);
      });
  }

  async fetchTransactionInformations(user_id, bookingIdsAndCodeCollection) {
      var transactionInformations = [], paymentList = [], errors = [];

      for (var i = 0; i < bookingIdsAndCodeCollection.length; i++) {
        await axios.post(
          'https://api.modestravel.com/transactions/detail/' + bookingIdsAndCodeCollection[i].booking_code,
          { user_id: (user_id) }
        )
          .then(function(response) {
              if(typeof response.data.data !== 'undefined') {
                  transactionInformations.push(response.data.data);
                  paymentList.push(response.data.payments);
              } else if(!response.data.status) {
                  errors.push(response.data);
              }
          })
          .catch(function(error) {
              errors.push(error);
          });
      }

      return Promise.resolve({ errors: errors, transactionInformations: transactionInformations, paymentList: paymentList });
  }

  async fetchPackageInformations(bookingIdsAndCodeCollection) {
      var packageInformations = [], errors = [];

      for (var i = 0; i < bookingIdsAndCodeCollection.length; i++) {
        await axios.get('https://api.modestravel.com/packages/get/' + bookingIdsAndCodeCollection[i].packageId)
          .then(function(response) {
              if(typeof response.data.data !== 'undefined') {
                  packageInformations.push(response.data.data);
              } else if(!response.data.status) {
                  errors.push(response.data);
              }
          })
          .catch(function(error) {
              errors.push(error);
          });
      }

      return Promise.resolve({ errors: errors, packageInformations: packageInformations});
  }

  async fetchAirportList() {
      var airports = [], errors = [];

      await axios.get('https://api.modestravel.com/utils/airports')
        .then(function(response) {
            if(typeof response.data.data !== 'undefined') {
                airports = response.data.data;
            } else if(!response.data.status) {
                errors.push(response.data);
            }
        })
        .catch(function(error) {
            errors.push(error);
        });

      return Promise.resolve({ errors: errors, airports: airports});
  }

  initFetchOperation() {
      var transactionList = [], errors = [];

      var currentState = store.getState();
      var rootClass = this;

      this.fetchTransactionList(currentState.userInformations.user_id, function(error, bookingIdsAndCodeCollection) {
          errors.push(error);

          Promise.all([
            rootClass.fetchTransactionInformations(currentState.userInformations.user_id, bookingIdsAndCodeCollection),
            rootClass.fetchPackageInformations(bookingIdsAndCodeCollection),
            rootClass.fetchAirportList()
          ])
          .then(function(results) {
                errors.push(results[0].errors);
                errors.push(results[1].errors);

                for (var i = 0; i < results[0].transactionInformations.length; i++) {
                    transactionList.push({
                        transactionInformation: results[0].transactionInformations[i],
                        packageInformation: results[1].packageInformations[i],
                        paymentList: results[0].paymentList[i]
                    });
                }

                rootClass.setState({ shouldFetch: false, transactionList: transactionList, airportList: results[2].airports });
          });
      });
  }

  searchOneObjectInArrayOfObjectByPropValue(targetArray, targetProperty, value) {
      var targetObject = {};

      for (var i = 0; i < targetArray.length; i++) {
          if(targetArray[i][targetProperty] === value) {
              targetObject = targetArray[i];
              break;
          }
      }

      return targetObject;
  }

  resolveHotelsInfo(packageInformation) {
      var hotels = {};

      hotels = {
          firstHotelName: packageInformation.hmk_name,
          secondHotelName: packageInformation.hmd_name,
      };

      return hotels;
  }

  resolveFlightsInfo(packageInformation) {
      var flights = {};

      var departAirport = this.searchOneObjectInArrayOfObjectByPropValue(this.state.airportList.id, 'id', packageInformation.depart_airport),
      departAirportArv = this.searchOneObjectInArrayOfObjectByPropValue(this.state.airportList.sa, 'id', packageInformation.depart_airport_arv),
      returnAirport = this.searchOneObjectInArrayOfObjectByPropValue(this.state.airportList.sa, 'id', packageInformation.return_airport),
      returnAirportArv = this.searchOneObjectInArrayOfObjectByPropValue(this.state.airportList.id, 'id', packageInformation.return_airport_arv);

      flights = {
          departAirportCode: departAirport.code,
          departAirportArvCode: departAirportArv.code,
          departAirline: packageInformation.depart_airline,
          departEst: moment(packageInformation.depart_est).format('D MMM'),
          departEstArv: moment(packageInformation.depart_est_arv).format('D MMM YYYY'),

          returnAirportCode: returnAirport.code,
          returnAirportArvCode: returnAirportArv.code,
          returnAirline: packageInformation.return_airline,
          returnEst: moment(packageInformation.return_est).format('D MMM'),
          returnEstArv: moment(packageInformation.return_est_arv).format('D MMM YYYY')
      };

      return flights;
  }

  // handleChangeBookingCode(event) {
  //     this.setState({ bookingCode: (event.target.value === "") ? null : event.target.value });
  // }
  //
  // createBookingCodeOptionList() {
  //     var list = [];
  //     var rootClass = this;
  //
  //     for (var i = 0; i < this.state.transactionList.length; i++) {
  //         list.push(<option key={i} value={this.state.transactionList[i].transactionInformation.booking_code}>
  //           ({this.state.transactionList[i].transactionInformation.booking_code}) {this.state.transactionList[i].transactionInformation.nama_paket} - {this.state.transactionList[i].transactionInformation.vendor} - {moment(this.state.transactionList[i].transactionInformation.date).format('D MMM YYYY')}/{this.state.transactionList[i].transactionInformation.total_cust} Jamaah/{this.state.transactionList[i].transactionInformation.price_type}/{this.state.transactionList[i].transactionInformation.price_html}
  //         </option>);
  //     }
  //
  //     return list;
  // }

  createListOfActivePackageBooking() {
      var list = [];
      var rootClass = this;

      for (var i = 0; i < this.state.transactionList.length; i++) {
          if(this.state.transactionList[i].transactionInformation.booking_code === this.state.bookingCode) {
            list.push(<Package
              key={i}
              packageName={rootClass.state.transactionList[i].transactionInformation.nama_paket}
              invoice={rootClass.state.transactionList[i].transactionInformation.booking_code}
              bookingDate={moment(rootClass.state.transactionList[i].transactionInformation.date).format('D MMMM YYYY')}
              vendor={rootClass.state.transactionList[i].transactionInformation.vendor}
              totalCustormer={rootClass.state.transactionList[i].transactionInformation.total_cust}
              roomType={rootClass.state.transactionList[i].transactionInformation.price_type}
              totalPrice={rootClass.state.transactionList[i].transactionInformation.price_html}
              description={rootClass.state.transactionList[i].packageInformation.deskripsi}
              hotels={rootClass.resolveHotelsInfo(rootClass.state.transactionList[i].packageInformation)}
              flights={rootClass.resolveFlightsInfo(rootClass.state.transactionList[i].packageInformation)}
              facilities={rootClass.state.transactionList[i].packageInformation.facilities}
              paymentList={rootClass.state.transactionList[i].paymentList}
            />);
          }
      }

      return list;
  }

  componentWillUnmount() {
      this.unsubscribeStateManager();
  }

  componentDidMount() {
      this.handleUserOptions();
  }

  render() {
      if(this.state.shouldFetch && this.state.transactionList.length < 1) {
          this.initFetchOperation();
      }
      return (
        <TabPane tabId="1">
          <div id="home" class="container tab-pane active">
            {/* <Col md="12">
            <div class="form-group">
                <select id="booking" class="form-control-logindata" name="booking_code" value={this.state.bookingCode} onChange={this.handleChangeBookingCode}>
                   <option value="">-- Select Booking Code --</option>
                   {this.createBookingCodeOptionList()}
                </select>
              </div>
            </Col> */}
            {this.createListOfActivePackageBooking()}
          </div>
        </TabPane>
      );
  }
}

export default PackageSummary;
