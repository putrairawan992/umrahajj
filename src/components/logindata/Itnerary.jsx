import React, { Component } from 'react';
import { TabPane, Row } from 'reactstrap';
import axios from 'axios';
import store from '../../store';
import ItneraryCard from './partials/ItneraryCard';


class Itnerary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldFetch: true,
            packageList: []
        };

        if(this.state.shouldFetch) {
            this.initFetchOperation();
        }
    }

    fetchTransactionList(user_id, callback) {
      var packageIds = [];
      var errors = []; // Error bag

      axios.post('https://api.modestravel.com/transactions/list/' + user_id)
        .then(function(response) {
            if(typeof response.data.data !== 'undefined') {
                for (var i = 0; i < response.data.data.length; i++) {
                    if(packageIds.length < 1 || packageIds[i-1].packageId !== response.data.data[i].id_package) {
                      packageIds.push({ packageId: response.data.data[i].id_package });
                    }
                }
            }
        })
        .catch(function(error) {
            errors.push(error);
        })
        .then(function() {
            callback(errors, packageIds);
        });
    }

    async fetchPackageInformations(packageIds) {
        var packageInformations = [];
        var errors = [];

        for (var i = 0; i < packageIds.length; i++) {
          await axios.get('https://api.modestravel.com/packages/get/' + packageIds[i].packageId)
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

    initFetchOperation() {
        var currentState = store.getState();
        var errors = [];
        var rootClass = this;

        this.fetchTransactionList(currentState.userInformations.user_id, function(error, packageIds) {
            errors.push(error);

            rootClass.fetchPackageInformations(packageIds)
              .then(function(results) {
                  errors.push(results.errors);

                  rootClass.setState({ shouldFetch: false, packageList: results.packageInformations });
              });
        });
    }

    createItneraryCard() {
        var card = [];
        var rootClass = this;

        for (var i = 0; i < this.state.packageList.length; i++) {
            card.push(<ItneraryCard
              key={i}
              name={rootClass.state.packageList[i].package_itenary}
              itneraryStep={JSON.parse(rootClass.state.packageList[i].package_itinerary)}
            />);
        }

        return card;
    }

    render() {
        return (
          <TabPane id="menu2" tabId="3">
            <Row className="container tab-pane active">
              {this.createItneraryCard()}
            </Row>
          </TabPane>
        );
    }
}

export default Itnerary;
