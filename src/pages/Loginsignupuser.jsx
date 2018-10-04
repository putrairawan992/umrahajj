import React, { Component } from "react";
import axios from 'axios';
import '../css/style.css';
import {Redirect} from 'react-router';
import { Container, Row, Col, NavLink,Form, FormGroup, Label, Input, FormText} from "reactstrap";
import {Link} from 'react-router-dom';

class Loginsignupuser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phonenum: '',
            password: '',
            passwordConfirmation: '',
            shouldRedirect: false
        };

        this.handleAllFormInputChange = this.handleAllFormInputChange.bind(this);
        this.handleSignUpFormSubmit = this.handleSignUpFormSubmit.bind(this);
    }

    handleAllFormInputChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSignUpFormSubmit(event) {
        if(!this.isPasswordInputCorrect(this.state.password, this.state.passwordConfirmation)) {
            alert('The password and it\'s confirmation are mismatch! Please re-type your password.');
            this.setState({ password: '', passwordConfirmation: ''});
        }

        if(this.isPasswordInputCorrect()) {
            const newUser = {
                name: this.state.name,
                email: this.state.email,
                no_telepon: this.state.phonenum,
                password: this.state.password
            };

            axios.post('https://api.umrahajj.co/customers/preregister', newUser )
              .then((response) => {
                  if(response.data.status) {
                    // Do something!
                    // alert(response.data.message);
                    this.setState({ shouldRedirect: true });
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

        event.preventDefault();
    }

    isPasswordInputCorrect(password, confirmation) {
        if(password !== confirmation) {
            return false;
        }

        return true;
    }

    render() {

        if (this.state.shouldRedirect){
            this.setState({ shouldRedirect: false });
            return <Redirect to='/thankyouregister'/>;
        }

        return (

<Container className="loginuser">
    <Row>
        <Col lg="7" md="7" sm="7" xs="12">
            <h1>Hello,</h1>
                <b className="loginuser1">Assalamwalaikum, Wr.Wb</b>
                <p className="loginuser2"></p>
                <hr/>
            </Col>
        <Col md="5" lg="5" sm="5" xs="12">

            <div id="wrapper3">

            <div id="header-wrapper3">
                <h2>Sign Up</h2>
            </div>

            <div id="body-wrapper3">
                <Form onSubmit={this.handleSignUpFormSubmit}>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label  className="nama">Name</Label>
                                        <Input type="text" name="name" value={this.state.name} onChange={this.handleAllFormInputChange} required />
                                </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                    <Label className="password">Password</Label>
                                        <Input type="password" name="password" value={this.state.password} onChange={this.handleAllFormInputChange} required />
                                </FormGroup>
                                </Col>
                        
                    </Row>
                       
                        <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label className="email">Email</Label>
                                    <Input type="email" name="email" value={this.state.email} onChange={this.handleAllFormInputChange} required />
                            </FormGroup>
                            </Col>
                     
                            <Col md={6}>
                            <FormGroup>
                                <Label className="password">Repeat Password</Label>
                                    <Input type="password" name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.handleAllFormInputChange} required />
                                    </FormGroup>
                            </Col>
                     
                       
                        </Row>
                        <Row form>
                        <Col md={6}>
                       
                            <FormGroup>
                                <Label className="no_telepon">Phone Number</Label>
                                    <Input type="text" name="phonenum" value={this.state.phonenum} onChange={this.handleAllFormInputChange} required />
                            </FormGroup>
                       
                            </Col>
                        </Row>
             

                    <p className="forgot-loginuser"><input type="checkbox"/> By creating an account you agree to our Terms of Service and Privacy Policy</p>
                                  
                    <button type="submit" className="button2">Login</button>

                    <br/><br/>

                    <p>Already have account?<NavLink tag={Link} to="/loginuser"><b>Login</b></NavLink></p>

            </Form>

        </div>
            </div>

            </Col>
        </Row>
    </Container>


        );
    }
}


export default Loginsignupuser;
