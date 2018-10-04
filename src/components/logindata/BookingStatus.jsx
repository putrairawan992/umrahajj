import React, { Component } from 'react';
import { TabPane } from 'reactstrap';

class BookingStatus extends Component {
    render() {
        return (
          <TabPane id="menu3" tabId="4">
          <div className="wrapper">

            <div id="tracking-progress" className="tracking-module">
              <div className="panel">
              <div className="panel-body">
                <div className="new-tracking-event-list">
                  <div className="row progress-event info">
                    <div className="col-xs-3 col-md-2 secondary-text">
                    <div className="progress-event-date-day"><span data-date="2018-03-20T06:25:31Z" data-format="dd mmm">20 Mar</span></div>
                    <div className="progress-event-date-time"><span data-date="2018-03-20T06:25:31Z" data-format="hh:MMtt">05:25pm</span></div>
                    <div className="progress-event-date-local-label"></div>
                    <div className="public-type-indicator"></div>
                    </div>
                    <div className="col-xs-9 col-md-10" data-hj-masked="">
                    <div className="public-type-name">
                      Info
                    </div>
                    <p>
                      Parcel has been reported as damaged. If not yet delivered, any salvageable items will be returned to the sender.

                    </p>
                      <div className="secondary-text">
                        <p>Damaged</p>
                      </div>
                    </div>
                  </div>
                  <div className="row progress-event delivered">
                    <div className="col-xs-3 col-md-2 secondary-text">
                    <div className="progress-event-date-day"><span data-date="2015-10-21T20:43:00Z" data-format="dd mmm">22 Oct</span></div>
                    <div className="progress-event-date-time"><span data-date="2015-10-21T20:43:00Z" data-format="hh:MMtt">07:43am</span></div>
                    <div className="progress-event-date-local-label"></div>
                    <div className="public-type-indicator"></div>
                    </div>
                    <div className="col-xs-9 col-md-10" data-hj-masked="">
                    <div className="public-type-name">
                      Delivered
                    </div>
                    <p>
                      Parcel delivered

                    </p>
                    </div>
                  </div>
                  <div className="row progress-event transit">
                    <div className="col-xs-3 col-md-2 secondary-text">
                    <div className="progress-event-date-day"><span data-date="2015-10-21T19:53:00Z" data-format="dd mmm">22 Oct</span></div>
                    <div className="progress-event-date-time"><span data-date="2015-10-21T19:53:00Z" data-format="hh:MMtt">06:53am</span></div>
                    <div className="progress-event-date-local-label"></div>
                    <div className="public-type-indicator"></div>
                    </div>
                    <div className="col-xs-9 col-md-10" data-hj-masked="">

                    <p>
                      Parcel is loaded for delivery

                    </p>
                    </div>
                  </div>
                  <div className="row progress-event pickup">
                    <div className="col-xs-3 col-md-2 secondary-text">
                    <div className="progress-event-date-day"><span data-date="2015-10-21T00:16:00Z" data-format="dd mmm">21 Oct</span></div>
                    <div className="progress-event-date-time"><span data-date="2015-10-21T00:16:00Z" data-format="hh:MMtt">11:16am</span></div>
                    <div className="progress-event-date-local-label"></div>
                    <div className="public-type-indicator"></div>
                    </div>
                    <div className="col-xs-9 col-md-10" data-hj-masked="">
                    <div className="public-type-name">
                      Pickup
                    </div>
                    <p>
                      Parcel picked up

                    </p>
                    </div>
                  </div>
                </div>
              </div>
              </div>

            </div>
          </div>
          </TabPane>
        );
    }
}

export default BookingStatus;
