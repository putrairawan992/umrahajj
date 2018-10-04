import React from "react";
import Popup from "reactjs-popup";
import BurgerIcon from "./BurgerIcon";
import Menu from "./Menu.jsx";
import '../css/style.css';
import logo from '../images/logo.png';
import { Container, Row, Col} from "reactstrap";
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import {NavLink} from 'reactstrap';
import store from '../store';
import { destroyUserInformationObject } from '../actions/user-informations';
import Background from '../images/footer-drawer-menu.svg';

const styles = {
  textAlign: "center",
  marginTop: "40px",
  fontFamily: "Gotham"
};
const contentStyle = {
  background: "rgba(255,255,255,0",
  width: "100%",
  border: "none",
  margin: "unset"
};



class Tombolmenu extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          backgroundColor: 'transparent',
          isUserLoggedIn: false,
          userName: ''
      };

      const unsubscribe = store.subscribe(this.handleUserInformations.bind(this));
  }

  userLogout() {
      store.dispatch(destroyUserInformationObject());
      window.location.reload(true);
  }

  handleUserInformations() {
      const currentStates = store.getState();

      if(!currentStates.userInformations.user_id) {
        this.setState({
          isUserLoggedIn: false,
          userName: ''
        });
      }

      if(currentStates.userInformations.user_id != null) {
        this.setState({
          isUserLoggedIn: true,
          userName: currentStates.userInformations.name
        });
      }
  }

  listenScrollEvent = e => {
    if (window.scrollY > 100) {
      this.setState({backgroundColor: '#ffffff'})
    } else {
      this.setState({backgroundColor: '#e1e5e861'})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
    this.handleUserInformations();
  }

    render() {
        const { isUserLoggedIn, userName } = this.state;
        return (

      <Container fluid >
          <Row className="navbar-inverse" style={{backgroundColor: this.state.backgroundColor, height: '70px'}}>
            <Col md="12" xs="12" lg="12" sm="12">
              <NavLink className="navbar-brand" href="Home"><img src={logo} className="navbar-brand"/></NavLink>
                {isUserLoggedIn ? (
                  <div className="navbar-brand3 nav-link dropdown" id="loggedUserMenu">
                   <NavLink className="dropdown-icon" href="/generaluser"><img src={require("../images/login_dashboard.png")}/></NavLink>
                   <NavLink className="dropdown-toggle" data-toggle="dropdown" data-target="dropdown-user" href="#loggedUserMenu">{userName}
                    <span className="caret"></span></NavLink>
                    <ul className="dropdown-menu">
                      <li><NavLink href="javascript::void(0)" onClick={this.userLogout}>Logout</NavLink></li>
                    </ul>
                  </div>
                ) : (
                  <NavLink className="navbar-brand3" tag={Link} to="/loginuser"><img src={require("../images/Line_35.png")} className="line_login"/> <img src={require("../images/login_dashboard.png")}/>Login</NavLink>
                )}

                  <NavLink className="navbar-brand2" href="https://partner.umrahajj.co/#/?signup=home"><Button type="button" className="btn2 btn">Join as Partner</Button></NavLink>

                    <div style={styles}>
                      <div className="menu-home">
                            <Popup
                              modal
                              overlayStyle={{ background: "rgba(255,255,255,0.98", position: "fixed",top: "0px",
                              bottom: "0px ",
                              left: "0px ",
                              backgroundImage: `url(${Background})`,
                              backgroundSize: "contain",
                              backgroundRepeat: "no-repeat", 
                              right: "0px", 
                              backgroundPosition: "center bottom" }}
                              contentStyle={contentStyle}
                              closeOnDocumentClick={false}
                              trigger={open =>
                              <BurgerIcon open={open} />}
                            >

                              {close =><Menu close={close}/>}
                            </Popup>
                        </div>
                    </div>
                                    
             </Col>
          </Row>
        </Container>
        );
    }
}

export default Tombolmenu;
