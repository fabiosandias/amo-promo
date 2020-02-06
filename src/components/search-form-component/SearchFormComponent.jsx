import React, { Component } from 'react'
import { Form, Col, Button, Container, Row } from 'react-bootstrap'

export default class SearchFormComponent extends Component {
  
    render() {
        return (
            <React.Fragment>
                <hr className="my-4"></hr>
                <Container>
                    <h2>Faça aqui sua contação de seguro viagem! </h2>
                </Container>
                <hr className="my-4"></hr>

                <Form name='searchForm'>
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
                            <Button variant="primary"  size="lg" type="button">Fazer contação</Button>
                        </Col>
                    </Row>

                </Form>
            </React.Fragment>
        )
    }
}
