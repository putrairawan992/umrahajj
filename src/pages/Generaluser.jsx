import React from 'react';
import { TabContent, Nav, NavItem, NavLink, Container } from 'reactstrap';
import classnames from 'classnames';
import '../css/style.css';
import ScrollToTopOnMount from './ScrollToTopOnMount';
import General from '../components/generaluser/General';
import TransactionHistories from '../components/generaluser/TransactionHistories';


 class Generaluser extends React.Component {
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
              onClick={() => { this.toggle('1'); }}>
              General
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}>
              Transaction History
            </NavLink>
          </NavItem>
        </Nav>
        <Container>
        <TabContent activeTab={this.state.activeTab}>

          <General tabId="1"/>
          <TransactionHistories tabId="2"/>

        </TabContent>
        </Container>

      </div>
      </Container>
    );
  }
}


export default Generaluser;
