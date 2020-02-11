import React, { Component } from 'react'
import HeaderComponent from './components/header-component/HeaderComponent'
import Footer from './components/footer-component/FooterComponent'
import { Row, Container, Col } from 'react-bootstrap'
import RouterComponent from './components/router-component/RouterComponent'


export default class App extends Component {
  
  render() {
    return (
      <Container>
      <Row>
          <Col sm={12}>
              <HeaderComponent></HeaderComponent>
          </Col>
      </Row>
      <Row>
          <Col sm={12}>
              <RouterComponent />
          </Col>
      </Row>
      <Row>
          <Col sm={12}>
              <Footer />
          </Col>
      </Row>
  </Container>
    );
  }
}

