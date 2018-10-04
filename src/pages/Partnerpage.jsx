import React, { Component } from 'react';
import '../css/style.css';
import { Container, Row, Col} from "reactstrap";
import ScrollToTopOnMount from './ScrollToTopOnMount';


class Partnerpage extends Component {
    render() {
        return (
<div className="partner-page">
<Container className="content-search">
    <Row>
        <Col md="8">
                <div class="search-container1">
                    <h1>Our Partner</h1>
                      <form >
                        <input class="search" id="filter" type="text" placeholder="search your name travel" name="search"/>
                        <button class="btn btn-success2 btn7" type="submit">SEARCH</button>
                      </form>
                </div>
        </Col>

        <Col md="4">
            <menu>
                    
               

                <label for="product-type">
                        <select name="product-type" id="product-type" class="filter">
                                <option value="0">Country</option>
                                <option value="1">Indonesia</option>
                                <option value="2">Malaysia</option>
                                <option value="3">Thailand</option>
                        </select>
                </label>

                <label for="platform">
                        <select name="platform" id="platform" class="filter">
                                <option value="0">City</option>
                                <option value="jakarta">Jakarta</option>
                                <option value="bandung">Bandung</option>
                                <option value="aceh">Aceh</option>
                        </select>
                </label>

            </menu>
        </Col>
    </Row>
</Container>

<Container  className="content-partner-page">
  <Row>
      <Col md="12">
            <h4>Bandung</h4>
      </Col>
       <Col md="3">
                <img src="image/amanah.png"/> <div class="name1">
                        <h4 class="file-by">J Partner J</h4>
                            <p>Jalan Pegangsaan 2, No.12
                                Jakarta Pusat
                                +6221 7534 625 625
                                info@partner.co.id</p>
                    </div>
                    </Col>

        <Col md="3">
                <div class="name1">
                        <img src="image/amanah.png"/> <h4 class="file-by">I Partner I</h4>
                            <p>Jalan Pegangsaan 2, No.12
                                Jakarta Pusat
                                +6221 7534 625 625
                                info@partner.co.id</p>
                    </div>
                    </Col>

      <Col md="3">
                <div class="name1">
                        <img src="image/amanah.png"/> <h4 class="file-by">I Partner I</h4>
                            <p>Jalan Pegangsaan 2, No.12
                                Jakarta Pusat
                                +6221 7534 625 625
                                info@partner.co.id</p>
                    </div>
                    </Col>


                <Col md="3">
                <div class="name1">
                        <img src="image/amanah.png"/> <h4 class="file-by">I Partner I</h4>
                            <p>Jalan Pegangsaan 2, No.12
                                Jakarta Pusat
                                +6221 7534 625 625
                                info@partner.co.id</p>
                    </div>
                    </Col>

    
  </Row>
</Container>

</div>
        );
    }
}


export default Partnerpage;