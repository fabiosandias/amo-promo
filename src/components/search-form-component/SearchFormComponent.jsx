import React, { Component } from 'react'
import { Form, Col, Button, Container, Row } from 'react-bootstrap'
import TravelInsuranceService from '../../services/TravelInsuranceService'
import SpinnerComponent from '../spinner/SpinnerComponent';


export default class SearchFormComponent extends Component {

    constructor(props) {
        super(props);

        this.state = { continentList: [], loading: false }

        this.travelInsuranceService = new TravelInsuranceService();

    }

    async componentDidMount() {

        this.loadChange(true)

        await this.travelInsuranceService.getAllDestinations()
            .then(response => {
                this.handleChange(response.data)
                this.loadChange(false)
            })
    }

    handleChange(data) {
        this.setState({ continentList: data });
    }

    loadChange(data) {
        this.setState({ loading: data });
    }

    render() {
        return (
            <React.Fragment>
                <hr className="my-4"></hr>
                <Container>
                    <h2>Faça aqui sua contação de seguro viagem! </h2>
                </Container>
               
                <hr className="my-4"></hr>
                
                { this.state.loading ? <SpinnerComponent></SpinnerComponent> : this.getForm() }

            </React.Fragment>
        )
    }

    getForm() {
        return <Form name='searchForm'>
            <Row>
                <Col lg="4">
                    <Form.Control as="select" size="lg">
                        <option value="" style={{ display: "none" }}>Selecione o destino</option>
                        {
                            this.state.continentList.map((destinatio) => <option value={destinatio.name}>{destinatio.name}</option>)
                        }
                    </Form.Control>
                </Col>
                <Col lg="2">
                    <Form.Control size="lg" placeholder="Data de ida" />
                </Col>
                <Col lg="2">
                    <Form.Control size="lg" placeholder="Data da volta" />
                </Col>
                <Col lg="4">
                    <Button variant="primary" size="lg" type="button">Fazer contação</Button>
                </Col>
            </Row>

        </Form>
    }
}
