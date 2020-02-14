import React, { Component, useState } from 'react'
import { Form, Col, Button, Row, Alert, ListGroup } from 'react-bootstrap'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getselectedProduct } from '../../store/search-result/action-search-result'
import { STATE_OF_BRAZIL } from '../../constants'

import TravelInsuranceService from '../../services/TravelInsuranceService'

import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import Moment from 'moment';

import ErrorComponent from '../ErrorComponent/ErrorComponent'

class CheckoutComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            checkout: undefined,
            send: {
                external_id: 0,
                plan_id: 0,
                coverage_begin: "",
                coverage_end: "",
                destination_id: 0,
                contact: {
                    name: "",
                    email: "",
                    phone: ""
                },
                address: {
                    address: "",
                    cep: "",
                    city: "",
                    state: ""
                },
                insureds: [
                    {
                        external_id: 0,
                        first_name: "",
                        last_name: "",
                        date_of_birth: "",
                        cpf: ""
                    }
                ]
            },
            purchase: undefined,
            purchaseError: false

        }

        this.handleChangeObject = this.handleChangeObject.bind(this);
        this.handleChangeArrayOfObject = this.handleChangeArrayOfObject.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.savePursache = this.savePursache.bind(this);

    }

    handleChange() {
        this.setState(prevState => ({
            ...prevState,
            send: { ...prevState.send, plan_id: this.props.checkout.id }
        }))

        this.setState(prevState => ({
            ...prevState,
            send: { ...prevState.send, external_id: this.props.checkout.id }
        }))

        this.setState(prevState => ({
            ...prevState,
            send: { ...prevState.send, coverage_begin: this.props.searchForm.coverage_begin }
        }))

        this.setState(prevState => ({
            ...prevState,
            send: { ...prevState.send, coverage_end: this.props.searchForm.coverage_end }
        }))

        this.setState(prevState => ({
            ...prevState,
            send: { ...prevState.send, destination_id: this.props.searchForm.destination }
        }))

    }



    handleChangeObject = (objectKey, key, event) => {
        const value = event.target.value;
        this.setState(prevState => ({
            ...prevState, send: {
                ...prevState.send, [objectKey]: {
                    ...prevState.send[objectKey], [key]: value
                }
            }
        }))
    }

    handleChangeArrayOfObject = (key, event, index) => {

        const newInsureds = [...this.state.send.insureds];

        if (key === 'date_of_birth') {
            newInsureds[index][key] = Moment(event).format('YYYY-MM-DD');
        } else {
            newInsureds[index][key] = event.target.value;
        }

        this.setState(prevState => ({
            ...prevState, send: {
                ...prevState.send, insureds: newInsureds
            }

        }))


    }

    componentDidMount() {
        this.setState({ ...this.state.checkout, checkout: this.props.checkout })
        this.handleChange()

    }

    render() {
        return (
            <React.Fragment>

                <br />
                <h2>Contratação de seguro</h2>
                <p>Preencha o formulário para finalizar sua compra</p>
                <hr className="my-4"></hr>
                
                {this.state.purchaseError ? 
                <ErrorComponent title={'Opss, Um erro aconteceu!'} message={'Verifique seus dados se estão corretos e tente novamente..'}></ErrorComponent>
                : ''}

                {this.state.purchase ?


                    <Alert variant="success">
                        <Alert.Heading>Sua compra foi realizada com sucesso!</Alert.Heading>
                        <p>
                            Obrigado por comprar nosso seguro viagem.

                        </p>
                        <p>Abaixo estão os dados do seu seguro</p>
                        <hr />
                        <p className="mb-0">
                            Vaucher de assistência de viagem: <strong>{this.state.purchase.insureds[0].travel_assistance_voucher}</strong>
                        </p>

                        <p className="mb-0">
                            Link de acesso a apolice: <strong>
                                <a href={this.state.purchase.insureds[0].document_url} target="_blank">
                                    clique aqui
                                </a>
                            </strong>
                        </p>
                    </Alert>
                    :

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
                                            {STATE_OF_BRAZIL.map(st => <option key={st.state} value={st.state}>{st.name}</option>)}
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
                                            onChange={(e) => this.handleChangeArrayOfObject('first_name', e, 0)}
                                        />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Segundo nome:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Segundo nome"
                                            value={this.last_name}
                                            onChange={(e) => this.handleChangeArrayOfObject('last_name', e, 0)}
                                        />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridAddress1">
                                        <Form.Label>Data de nascimento:</Form.Label>


                                        <DateTimePicker
                                            value={this.date_of_birth}
                                            placeholder="Data de nascimento"
                                            time={false}
                                            format="DD/MM/YYYY"
                                            onChange={(e) => this.handleChangeArrayOfObject('date_of_birth', e, 0)}
                                        />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridAddress2">
                                        <Form.Label>CPF:</Form.Label>
                                        <Form.Control
                                            placeholder="CPF"
                                            value={this.cpf}
                                            onChange={(e) => this.handleChangeArrayOfObject('cpf', e, 0)}
                                        />
                                    </Form.Group>
                                </Form.Row>
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
                        
                        <Col  lg="12">
                        <Button
                            variant="success"
                            type="button"
                            onClick={() => this.savePursache(this.state.send)}
                        >
                            Contratar seguro viagem
                        </Button></Col>
                    </Row>

                }



            </React.Fragment>
        )
    }

    savePursache(data) {

        const travelInsuranceService = new TravelInsuranceService()
        travelInsuranceService.purchase(data).then(response => {
            this.setState({ ...this.state.purchase, purchase: response.data })
            this.setState({ ...this.state.purchaseError, purchaseError: false })

        }).catch(e => {
            this.setState({ ...this.state.purchaseError, purchaseError: true })
        })
    }
}

const mapStateToProps = state => ({
    checkout: state.searchResult.selectedProduct,
    searchForm: state.searchResult.searchForm,
});

const mapDispatchToProps = dispatch => bindActionCreators({ getselectedProduct }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutComponent)
