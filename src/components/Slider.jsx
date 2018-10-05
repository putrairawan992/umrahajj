import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import {Container, Row, Col} from 'reactstrap';
import '../css/style.css';
import axios from 'axios';


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

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6038c8a814ad54ae9bec17f6aa61e075f164a6ef
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
<<<<<<< HEAD
=======
    <Container fluid>
      <Row> 
            <div className="slider-content-home">
              <style>
                {
                  `.custom-tag {
                    width: 100%;
                    background: black;
                    }`
                }
              </style>
              <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
              >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
              
              </Carousel>
              
            </div>
        </Row>
      </Container>
>>>>>>> 084e5b7752129690472e452ea2031fa2e8f19f20
=======
>>>>>>> 6038c8a814ad54ae9bec17f6aa61e075f164a6ef
    );
    
  }
}

export default Slider;