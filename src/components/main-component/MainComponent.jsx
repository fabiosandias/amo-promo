import React, { Component } from 'react'
import HeaderComponent from '../header-component/HeaderComponent'
import Footer from '../footer-component/FooterComponent'
import ContainerComponent from '../container-component/ContainerComponent'
import { Row, Container, Col } from 'react-bootstrap'

export default class MainComponent extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm={12}>
                        <HeaderComponent valor="Aqui vai o valor"></HeaderComponent>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <ContainerComponent />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <Footer />
                    </Col>
                </Row>
            </Container>

        )
    }
}   
