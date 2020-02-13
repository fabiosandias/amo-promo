import React, { Component } from 'react'
import { Form, Col, Button, Row, Container } from 'react-bootstrap'

class CheckoutComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <br />
                <h2>Contratação de seguro</h2>
                <p>Preencha o formulário para finalizar sua compra</p>
                <hr className="my-4"></hr>

                <Row>
                    <Col lg="8">
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Nome:</Form.Label>
                                    <Form.Control type="text" placeholder="Nome completo" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>E-mail:</Form.Label>
                                    <Form.Control type="email" placeholder="E-mail" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridAddress1">
                                    <Form.Label>Telefone:</Form.Label>
                                    <Form.Control placeholder="Telefone" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridAddress2">
                                    <Form.Label>Endereço:</Form.Label>
                                    <Form.Control placeholder="Endereço" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Cidade:</Form.Label>
                                    <Form.Control placeholder="Cidade" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Estado:</Form.Label>
                                    <Form.Control as="select">
                                        <option>Selecione um estado...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>CEP</Form.Label>
                                    <Form.Control placeholder="CEP" />
                                </Form.Group>
                            </Form.Row>
                            <hr className="my-4"></hr>
                            <h4>Segurados</h4>
                            <hr className="my-4"></hr>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Primeiro nome:</Form.Label>
                                    <Form.Control type="text" placeholder="Primeiro nome" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Segundo nome:</Form.Label>
                                    <Form.Control type="text" placeholder="Segundo nome" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridAddress1">
                                    <Form.Label>Data de nascimento:</Form.Label>
                                    <Form.Control placeholder="Data de nascimento" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridAddress2">
                                    <Form.Label>CPF:</Form.Label>
                                    <Form.Control placeholder="CPF" />
                                </Form.Group>
                            </Form.Row>


                            <Button variant="success" type="submit">
                                Contratar seguro viagem
                            </Button>
                        </Form>
                    </Col>
                    <Col xs lg="2">

                    </Col>
                </Row>


            </React.Fragment>
        )
    }
}

export default CheckoutComponent
