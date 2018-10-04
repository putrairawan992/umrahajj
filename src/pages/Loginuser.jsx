import React, { Component } from "react";
import '../css/style.css';
import {Redirect} from 'react-router';
import ScrollToTopOnMount from "./ScrollToTopOnMount";
import axios from 'axios';
import { setUserInformationObject } from '../actions/user-informations';
import store from '../store';
import { Container, Row, Col, NavLink,Form, FormGroup, Label, Input, Alert} from "reactstrap";
import {Link} from 'react-router-dom';

class Loginuser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isUserLoggedIn: false,
            alert: {
              shouldShow: false,
              message: null,
              color: 'danger'
            }
        };

        this.handleAllFormInputChange = this.handleAllFormInputChange.bind(this);
        this.handleSignInFormSubmit = this.handleSignInFormSubmit.bind(this);

        const unsubscribe = store.subscribe(this.handleUserInformations.bind(this));
    }

    handleUserInformations() {
        const currentStates = store.getState();

        if(!currentStates.userInformations.user_id) {
          this.setState({ isUserLoggedIn: false });
        }

        if(currentStates.userInformations.user_id != null) {
          this.setState({ isUserLoggedIn: true });
        }
    }

    handleAllFormInputChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    componentDidMount() {
        this.handleUserInformations();
    }

    handleSignInFormSubmit(event) {
        const user = {
            email: this.state.email,
            password: this.state.password
        };

        axios.post('https://api.modestravel.com/customers/login', user)
          .then((response) => {
              if(response.data.status) {

                store.dispatch(setUserInformationObject(response.data.data));
                this.setState({ isUserLoggedIn: true });
                this.setState({ alert: { shouldShow: false, message: response.data.message, color: 'danger' } });

              } else if(!response.data.status) {

                this.setState({ alert: { shouldShow: true, message: response.data.message, color: 'danger' } });

              }
              // console.log(response);
          })
          .catch((error) => {
              alert('An error just occured!\n'+error.message);
              console.log(error);
          });

        event.preventDefault();
    }

    createAlertMessage() {
        var alert;

        if(this.state.alert.shouldShow){
          alert = (
            <Alert color={this.state.alert.color} isOpen={this.state.alert.shouldShow}>{this.state.alert.message}</Alert>
          );
        }

        return alert;
    }

    render() {
        const { isUserLoggedIn } = this.state;

        if (isUserLoggedIn){
            return <Redirect to='/generaluser'/>;
        }

        return (

    <Container className="loginuser">
        <ScrollToTopOnMount />
        <Row>
            <Col lg="8" md="8" xs="12" sm="8">
                <h1>Hello,</h1>
                    <b className="loginuser1">Assalamwalaikum.Wr.Wb</b>
                        <p className="loginuser2"></p>
                <hr/>
            </Col>
            <Col lg="4" xs="12" md="4" sm="4">
                    <div id="wrapper2">

                            <div id="header-wrapper2">
                                <h2>Login</h2>
                            </div>



                            <div id="body-wrapper2">
                                <Form onSubmit={this.handleSignInFormSubmit}>
                                 
                                     
                                          <Row form>
                                          <Col md={11}>
                                            <FormGroup>
                                                  <Label  className="nama">Email</Label >
                                                  <Input type="email" name="email" value={this.state.email} onChange={this.handleAllFormInputChange} required />
                                              </FormGroup>

                                            </Col>

                                         
                                         <Col md={11}>
                                            <FormGroup>
                                                  <Label className="password">Password</Label>
                                                  <Input type="password" name="password" value={this.state.password} onChange={this.handleAllFormInputChange} required />
                                                 
                                                  </FormGroup>
                                            </Col>

                                       
                                       <Col md={11}>
                                            <FormGroup>
                                                
                                            {this.createAlertMessage()}
                                            </FormGroup>
                                            </Col>
                                      
                                       </Row>
                                  

                                    <p className="forgot-loginuser">Forgot Password?</p>


                                    <button type="submit" className="button2">Login</button>
                                        <br/><br/>
                                    <p>Don't have account? <NavLink tag={Link} to="/loginsignupuser"><b>Sign up</b></NavLink></p>

                              
                              </Form>

                            </div>

                        </div>
            </Col>
        </Row>
    </Container>



            );
        }
    }


export default Loginuser;
