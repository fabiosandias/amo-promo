import React, { Component } from 'react'
import { Form, Col, Button, Row } from 'react-bootstrap'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getAllDestinations } from '../../store/destinations/actions'

 class FormComponent extends Component {
    
    constructor(props) {
        super(props)
    }

    componentDidMount() {       
        this.props.getAllDestinations();
    }
    
    render() {
        return (

            <React.Fragment>
                <Form name='searchForm'>
                    <Row>
                        <Col lg="4">
                            <Form.Control as="select" size="lg">
                                <option value="" style={{ display: "none" }}>Selecione o destino</option>
                                {
                                    this.props.destinations.map((destination) => <option key={destination.id} value={destination.name}>{destination.name}</option>)
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
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({destinations: state.destinationsList.destinations});
const mapDispatchToProps = dispatch => bindActionCreators({getAllDestinations}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent)


