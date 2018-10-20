import React, { Component } from "react";
import Slider, { CenterMode } from 'react-slick';
import '../css/style.css';
import { Container, Row, Col, NavLink} from "reactstrap";
import axios from 'axios';
import { Button } from 'reactstrap';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent",backgroundColor: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent",backgroundColor: "black" }}
      onClick={onClick}
    />
  );
}


const PostCard = ({title, body, imageCover, link}) => (
	<div className="carousel-cell22">
			<img style={imageCover} className="img-responsive"/>
			<div className="newsroom-text1">
				<h1 dangerouslySetInnerHTML={{__html:title}}></h1>
				  <p dangerouslySetInnerHTML={{__html:body}}></p>
				    <a href={link} target="blank"><p className="neswroom-text2">More</p></a>
			</div>
	</div>
)

class Newsroom extends React.Component {
    state = {
        posts: null,
    }
    
    fetchFromApi() {
        axios({
            method: 'GET',
            url: 'http://blog.modestravel.com/wp-json/wp/v2/posts',
        }).then(res => {
            this.setState({
                posts: [...res.data],
            });

        }).catch(error => {
            console.log(error)
        })
    }

    componentDidMount() {
        this.fetchFromApi();
    }

    render() {
		const { posts } = this.state;

    let cards = null;

		if(this.state.posts != null) {
			cards = posts.map(post => {
        const imageUrl = (post.better_featured_image.source_url !== null) ? post.better_featured_image.source_url : './another/image/as/placeholder.jpg';
				const imageCover = {
					background: `url(${imageUrl})`,
					"background-size": "cover",
        }
				return <PostCard 
					title={post.title.rendered.substring(0, 30)}
					body={post.excerpt.rendered.substring(0, 100)}
          imageUrl={".."}
          imageCover={imageCover}
          link={post.link}
				/>
			}) 
		}

	  const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
		};

		return (

      <Container fluid>
         <Row>
           <Col md="12" lg="12" xs="12">

          <div className="homepage-newsroom hidden-xs">
            <Col lg="4" md="4" sm="4" xs="12" className="content-homepage-newsroom-text">      
              <b>NEWS</b>
                <b> ROOM</b> 
                  <hr className="garis_homepagenewsroom"/>
            </Col>
              <Slider {...settings}>
                {cards}
              </Slider>
              <NavLink className="navbar-brand2" href="http://blog.modestravel.com" target="blank">
                <Button type="Button" className="btn newsroom-btn">see all</Button>
                  </NavLink>
            </div>
    
              <div className="newsroom-content1 homepage-newsroom hidden-lg hidden-md hidden-sm">
                <h3>Newsroom</h3>
                  {cards}
                  <NavLink className="navbar-brand2" href="http://blog.modestravel.com" target="blank">
                    <Button type="Button" className="btn newsroom-btn">see all</Button>
                      </NavLink>
              </div>
        
              </Col> 
          </Row>
        </Container>
      );
    }
  }



export default Newsroom;