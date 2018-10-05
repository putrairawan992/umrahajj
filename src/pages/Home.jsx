import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselControl
} from 'reactstrap';
import {Container, Row, Col} from 'reactstrap';
import '../css/style.css';
import axios from 'axios';
import Smartphoneslide from '../components/Smartphoneslide';
import Instagram from '../components/Instagram';
import Newsroom from '../components/Newsroom.jsx';
import Smartphoneslide2 from '../components/Smartphoneslide2';



const items = [
    {
      src: require(".."),
      altText: '',
      caption: ''
    },
    {
      src: require(".."),
      altText: '',
      caption: ''
    },
    {
      src: require(".."),
      altText: '',
      caption: ''
    }
  ];




class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      sliders: null,
    };

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  componentDidMount() {
    console.log("Slider  fetched");
    this.fetchItemsFromApi();
  }

  fetchItemsFromApi() {
    axios({
      headers:{
        'Content-Type': 'application/json'
      },

      method: "GET",
      url: "http://api.modestravel.com/utils/home_slider",

    }).then(response => {

      console.log("home_slider", response);
      this.setState({sliders: [...response.data.data]});

    }).catch(error => {
      console.error("error_home_slider", error);
    })
  }
  
  onExiting() {
    this.animating = true;
  }


  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex, sliders } = this.state;
    let slides = null;
    slides = items.map((item) => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={item.src}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
        <img src={null} className="custom-tag"/>
          {/* <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} /> */}
        </CarouselItem>
      );
    });
    if(sliders !== null) {
      console.log("sliders", sliders)
      slides = sliders.map((slider, index) => {
        
        return (
          <CarouselItem
            className="custom-tag"
            tag="div"
            key={index}
            onExiting={this.onExiting}
            onExited={this.onExited}>
            <img src={slider.images_url} alt={slider.title} className="custom-tag"/>
            {/* <CarouselCaption className="text-danger" captionText={slider.keterangan} captionHeader={slider.title} /> */}
          </CarouselItem>
        );
      });

    }

    return (

        <div className="content-home">

              <Container fluid>
                  <Row>
                    <div className="slider-content-home">
                        <style>
                            {
                            `.custom-tag {
                              width: 100%;}`
                            }
                        </style>
                    <Carousel
                        activeIndex={activeIndex}
                        next={this.next}
                        previous={this.previous}
                    >
                    {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} /> */}
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                    </Carousel>
                    </div>
                  </Row>
              </Container>

              <div className="content-home-0 hidden-xs hidden-sm"></div>

                <div className="content-home-2">
                    <div className="content-home-1"> 
                    <Container fluid>
                      <Row>
                          <Col lg="12" md="12" sm="12" className="content-home-text">      
                            <b>MARKET</b><b> PLACE</b> 
                              <hr className="garis_marketplace"/>
                          </Col>
                              <Col lg="12" xs="12" md="12" sm="12" className="#">
                                  <div className="device2 wp33 animated bounceInDown">
                                      <div className="device-content">
                                          <Smartphoneslide2 />
                                      </div>
                                  </div>
                              </Col>      
                      </Row>
                  </Container>
                  </div>
                      <div className="jumbotron2">
                      <Container fluid>
                        <Row>
                          
                          <Col md="6" xs="12" lg="6" sm="12">
                            <div className="icon-featured">
                            <Row>
                              <Col xs="4">
                                <img src={require("../images/featured_icon.png")} className="img-responsive"/>
                                  <b className="text_icon-featured">Escrow Account</b>
                                    <p>Payment paid in escrow. Every transaction will be in escrow account and will be process as need as partner progress. </p>
                              </Col>
                              <Col xs="4">
                                <img src={require("../images/featured_icon1.png")} className="img-responsive"/>
                                  <b className="text_icon-featured2">Prayer Reminder</b>
                                    <p>Don’t worry, you will not passed your prayer whenever and wherever you are.</p>
                              </Col> 
                              <Col xs="4">
                                <img src={require("../images/featured_icon2.png")} className="img-responsive"/>
                                  <b className="text_icon-featured3">Qibla Compass</b>
                                    <p>Wherever your are praying, you will not get lost gibla direction. </p>
                              </Col>  
                              </Row>    
                            </div>      
                          </Col>

                          <Col md="6" xs="12" lg="6" sm="12">
                          <hr className="garis_featured"/>
                          <br/>
                                <b className="header-jumbotron-text"> FEATUR</b><b b className="header-jumbotron-text">ED</b> 
                            <div className="device-featured">
                              
                                  <div className="device wp3 animated bounceInDown">
                                    <div className="device-content container">
                                        <Smartphoneslide />
                                      </div>
                                  </div>
                            </div>   
                          </Col>
                          
                        </Row>
                    </Container>
                  </div>
                        <Instagram />
                          <Newsroom />
                
                </div>
            </div>
    );

  }
}

export default Home;
