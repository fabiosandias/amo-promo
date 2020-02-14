import React, { Component } from 'react'
import { Form, Col, Button, Row, ListGroup } from 'react-bootstrap'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getselectedProduct } from '../../store/search-result/action-search-result'

class CheckoutComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            checkout: undefined,
            send: {
                external_id: 0,
                plan_id: 0,
                coverage_begin: "string",
                coverage_end: "string",
                destination_id: 0,
                contact: {
                    name: "string",
                    email: "string",
                    phone: "string"
                },
                address: {
                    address: "string",
                    cep: "string",
                    city: "string",
                    state: "string"
                },
                insureds: [
                    {
                        external_id: 0,
                        first_name: "string",
                        last_name: "string",
                        date_of_birth: "string",
                        cpf: "string"
                    }
                ]
            }

        }

        this.handleChangeObject = this.handleChangeObject.bind(this);
        this.handleChangeArrayOfObject = this.handleChangeArrayOfObject.bind(this);
    }

    handleChangeObject = (objectKey, key, event) => {
        this.setState({
            send: { [objectKey]: { ...this.state.send[objectKey], [key]: event.target.value } }
        })
    }

    handleChangeArrayOfObject = (key, event) => {
        this.setState({
            insureds: this.state.insureds.forEach((insurence, index) => {

                return index === 0 ?
                    { ...insurence, [key]: event.target.value } : insurence
            }),
        })
    }

    componentDidMount() {
        this.setState({ checkout: this.props.checkout })
    }


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
                                    <Form.Control
                                        type="text"
                                        placeholder="Nome completo"
                                        value={this.name}
                                        onChange={(e) => this.handleChangeObject('contact', 'name', e)}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>E-mail:</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="E-mail"
                                        value={this.email}
                                        onChange={(e) => this.handleChangeObject('contact', 'email', e)}
                                    />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridAddress1">
                                    <Form.Label>Telefone:</Form.Label>
                                    <Form.Control
                                        placeholder="Telefone"
                                        value={this.phone}
                                        onChange={(e) => this.handleChangeObject('contact', 'phone', e)}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridAddress2">
                                    <Form.Label>Endereço:</Form.Label>
                                    <Form.Control
                                        placeholder="Endereço"
                                        value={this.phone}
                                        onChange={(e) => this.handleChangeObject('address', 'address', e)}
                                    />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Cidade:</Form.Label>
                                    <Form.Control
                                        placeholder="Cidade"
                                        value={this.city}
                                        onChange={(e) => this.handleChangeObject('address', 'city', e)}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Estado:</Form.Label>
                                    <Form.Control
                                        as="select"
                                        value={this.city}
                                        onChange={(e) => this.handleChangeObject('address', 'state', e)}
                                    >
                                        <option>Selecione um estado...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>CEP</Form.Label>
                                    <Form.Control
                                        placeholder="CEP"
                                        value={this.city}
                                        onChange={(e) => this.handleChangeObject('address', 'cep', e)}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <hr className="my-4"></hr>
                            <h4>Segurados</h4>
                            <hr className="my-4"></hr>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Primeiro nome:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Primeiro nome"
                                        value={this.first_name}
                                        onChange={(e) => this.handleChangeArrayOfObject('first_name', e)}
                                    />
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
                    <Col xs lg="4">

                        {this.props.checkout.coverages ?
                           <div>
                                <h3>Detalhamento:</h3>
                            <ListGroup>
                                <ListGroup.Item>Plano: <strong>{this.props.checkout.name}</strong></ListGroup.Item>
                                <ListGroup.Item>Preço por adulto: <strong>{this.props.checkout.elder_net_price}</strong></ListGroup.Item>
                                <ListGroup.Item>Beneficio: <strong>{this.props.checkout.exchange_rate}</strong></ListGroup.Item>
                                <ListGroup.Item>Comberturas: {this.props.checkout.coverages.map(coverage => <p key={coverage.coverage_id + '-'}>{coverage.display_name_ptbr}</p>)}</ListGroup.Item>

                            </ListGroup>
                           </div> : ''
                        }

                    </Col>
                </Row>


            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    checkout: state.searchResult.selectedProduct,
});

const mapDispatchToProps = dispatch => bindActionCreators({ getselectedProduct }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutComponent)
