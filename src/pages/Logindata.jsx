import React, { Component } from 'react';
import { TabContent, Nav, NavItem, NavLink, Container } from 'reactstrap';
import classnames from 'classnames';
import '../css/style.css';
import ScrollToTopOnMount from './ScrollToTopOnMount';
import PackageSummary from '../components/logindata/PackageSummary';
import InputJamaahData from '../components/logindata/InputJamaahData';
import Itnerary from '../components/logindata/Itnerary';
import BookingStatus from '../components/logindata/BookingStatus';

 class Logindata extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
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
        <Container fluid>
				<ScrollToTopOnMount />
      <div className="logindata">
        <Nav tabs>

          <NavItem>
            <NavLink
              className= {classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
            Package Summary
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
            Input Jamaah Data
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
            Itinerary
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
            Booking Status
            </NavLink>
          </NavItem>

        </Nav>
        <Container>
        <TabContent activeTab={this.state.activeTab}>

          <PackageSummary />
          <InputJamaahData />
          <Itnerary />
          <BookingStatus />

        </TabContent>
        </Container>

      </div>
      </Container>
    );
  }
}


export default Logindata;
