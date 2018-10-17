import React from "react";
import '../css/style.css';
import axios from 'axios';
import { Container, Row, Col, NavLink} from "reactstrap";
import { Button } from 'reactstrap';


const PostCard = ({imageCover}) => {

  return (
  
  <Col md="3" lg="3" sm="6" xs="12">
    <div className="carousel-cell77">
      <img style={imageCover}/>
    </div>
  </Col>

)}

class Instagram extends React.Component {

  state = {
      posts: null,
      images: null,   
    }

  fetchFromApi() {
      axios({
          method: 'GET',
          url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=5689456550.1677ed0.18e17b78da5441858d86e91fbbd4f9cb',
      }).then(res => {
          this.setState({
              posts: [...res.data.data],
          });
          console.dir(res.data.data);
          let allimages = res.data.data.map(post => {
            console.dir(post);
              const imageUrl = post.images.standard_resolution.url;
          })
              this.setState({images: allimages})

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
     
      if(this.state.posts !== null) {
        cards = posts.map((post, index) => {

          if(index < 8) {
            const imageUrl = post.images.standard_resolution.url;
            const imageCover = {
              background: `url(${imageUrl})`,
              "background-size": "cover",
            }
            return <PostCard  
            imageUrl={".."}
            imageCover={imageCover} />
          }
        })
      }

     


      return (
        <Container className="homepage-instagram">

            <Row >
         
            <Col md="1" lg="2" className="hidden-xs"></Col>
              <Col md="10" lg="8" sm="12" xs="12">  
              <div className="divider">
                  <hr className="left"/><b  className="satu">OUR<span> GALLERY</span></b><hr className="right" />
              </div>
              </Col>
              <Col md="1" lg="2" className="hidden-xs"></Col>
              </Row>
              <Row>
                
                  {cards}
             
                  
             
            </Row>
            <NavLink className="navbar-brand2" href="https://www.instagram.com/modestravelofficial/" target="blank"><Button type="Button" className="btn instagram-btn">see more</Button></NavLink>
        </Container>
      );
    }
  }

export default Instagram;

{/*<div className="logo-instagram">
	<p className="callme2">FOLLOW US</p>
    <a href="https://www.instagram.com/umrahajj/" target="_blank">
      <FontAwesomeIcon icon={faInstagram} className="callme" /></a>
</div>*/}
             