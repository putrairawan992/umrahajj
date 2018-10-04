import React, { Component } from "react";
import '../css/style.css';
import {Carousel} from '3d-react-carousal';

export default class Smartphoneslide2 extends Component {
  render() {

    let slides = [
      <img src={require("../images/5.jpg")}/>,
      <img src={require("../images/2.png")}/>,
      <img src={require("../images/3.png")}/>,
      <img src={require("../images/4.png")}/>,]

    return (


      <Carousel slides={slides}
      />

    );
  }
}

