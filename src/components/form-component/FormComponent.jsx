import React, { Component } from 'react'
import { Form, Col, Button, Row } from 'react-bootstrap'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Moment from 'moment';

import { getAllDestinations } from '../../store/destinations/actions'
import { search } from '../../store/search-result/action-search-result'

import DateTimePicker from 'react-widgets/lib/DateTimePicker'

class FormComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            coverage_begin: undefined,
            coverage_end: undefined,
            destination: undefined,
            coverages: [
                0
            ]
        }

        this.handleChangeDestination = this.handleChangeDestination.bind(this);
        this.handleChangecoverageEnd = this.handleChangecoverageEnd.bind(this);
        this.handleChangecoverageBegin = this.handleChangecoverageBegin.bind(this);

    }

    handleChangeDestination(event) {
        this.setState({ destination: +event.target.value })
    }
    handleChangecoverageEnd(event) {
        this.setState({ coverage_end: Moment(event).format('YYYY-MM-DD') })
    }
    handleChangecoverageBegin(event) {
        this.setState({ coverage_begin: Moment(event).format('YYYY-MM-DD') })
    }

    componentDidMount() {
        this.props.getAllDestinations();
    }

    render() {

        const { search } = this.props;

        return (

            <React.Fragment>
                <Form name='searchForm'>
                    <Row>
                        <Col lg="4">
                            <Form.Control
                                as="select"
                                value={this.state.destination}
                                onChange={this.handleChangeDestination}
                            >
                                <option value="" style={{ display: "none" }}>Selecione o destino</option>
                                {
                                    this.props.destinations ? this.props.destinations.map((destination) => <option key={destination.id} value={destination.id}>{destination.name}</option>) : ''
                                }
                            </Form.Control>
                        </Col>
                        <Col lg="3">
                            <DateTimePicker
                                value={this.coverage_begin}
                                min={new Date()}
                                autoFocus={true}
                                time={false}
                                format="DD/MM/YYYY"
                                onChange={this.handleChangecoverageBegin}
                            />
                        </Col>
                        <Col lg="3">
                            <DateTimePicker
                                value={this.coverage_end}
                                min={new Date()}

                                time={false}
                                format="DD/MM/YYYY"
                                onChange={this.handleChangecoverageEnd}
                            />
                        </Col>
                        <Col lg="2">
                            <Button
                                variant="primary"
                                type="button"
                                onClick={() => search(this.state)}
                                disabled={!this.state.coverage_begin || !this.state.coverage_end || !this.state.destination}
                            >
                                Pesquisar
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    destinations: state.destinationsList.destinations
});
const mapDispatchToProps = dispatch => bindActionCreators({ getAllDestinations, search }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent)