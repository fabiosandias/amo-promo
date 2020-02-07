import React, { Component } from 'react'
import { Form, Col, Button, Container, Row } from 'react-bootstrap'
import TravelInsuranceService from '../../services/TravelInsuranceService'


export default class SearchFormComponent extends Component {

    constructor(props) {
        super(props);

        this.state = { continentList: [] }

        this.travelInsuranceService = new TravelInsuranceService();
    }

    componentDidMount() {
        this.travelInsuranceService.getAllDestinations()
            .then(response => {
                
                this.handleChange(response.data)
            })
    }   

    handleChange(data) {
        debugger
        this.setState({continentList: data});
      }

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
                                {this.state.continentList.map((destinatio) => <option value={destinatio.name}>{destinatio.name}</option>)}
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
            </React.Fragment>
        )
    }
}
