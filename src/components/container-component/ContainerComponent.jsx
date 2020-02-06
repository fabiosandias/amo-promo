import React, { Component } from 'react'
import { Form, Col, Button, Jumbotron, Container, Row } from 'react-bootstrap'

export default class ContainerComponent extends Component {
    render() {
        return (
            <div>
               
                <Container>
                    <h2>Faça aqui sua contação de seguro viagem!</h2>
                </Container>
                
                <Form>

                    <Row>
                        <Col lg="4">
                            <Form.Control as="select" size="lg">
                                <option>Selecione o continente</option>
                                <option>...</option>
                            </Form.Control>
                        </Col>
                        <Col lg="2">
                            <Form.Control size="lg" placeholder="Data de ida" />
                        </Col>
                        <Col lg="2">
                            <Form.Control size="lg" placeholder="Data da volta" />
                        </Col>
                        <Col lg="4">
                            <Button variant="primary" size="lg" type="submit">Fazer contação</Button>
                        </Col>
                    </Row>
                  
                </Form>
            </div>
        )
    }
}
