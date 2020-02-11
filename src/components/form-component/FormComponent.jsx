import React, { Component } from 'react'
import { Form, Col, Button, Row } from 'react-bootstrap'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getAllDestinations } from '../../store/destinations/actions'
import { search } from '../../store/search-result/action-search-result'
import TravelInsuranceService from '../../services/TravelInsuranceService';

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
        // this.searchTravelInsurance = this.searchTravelInsurance.bind(this);
        
    }

    handleChangeDestination(event) {
        this.setState({destination: +event.target.value})
    }
    handleChangecoverageEnd(event) {
        this.setState({ coverage_end: event.target.value})
    }
    handleChangecoverageBegin(event) {
        this.setState({coverage_begin: event.target.value})
    }

    componentDidMount() {       
        this.props.getAllDestinations();
    }

    // searchTravelInsurance(data) {
    //     debugger;
    //     const travelInsuranceService = new TravelInsuranceService();
    //     const travelInsurance = travelInsuranceService.search(data);
    // }
    
    render() {
        
        const { search } = this.props;

        return (

            <React.Fragment>
                <Form name='searchForm'>
                    <Row>
                        <Col lg="4">
                            <Form.Control 
                                as="select" 
                                size="lg"
                                value={this.state.destination}
                                onChange={this.handleChangeDestination}
                                >
                                <option value="" style={{ display: "none" }}>Selecione o destino</option>
                                {
                                    this.props.destinations.map((destination) => <option key={destination.id} value={destination.id}>{destination.name}</option>)
                                }
                            </Form.Control>
                        </Col>
                        <Col lg="2">
                            <Form.Control 
                                type={'text'}
                                size="lg" 
                                placeholder="Data de ida"
                                value={this.state.coverage_begin}
                                onChange={this.handleChangecoverageBegin}
                            />
                        </Col>
                        <Col lg="2">
                            <Form.Control 
                            type={'text'}
                                size="lg" 
                                placeholder="Data da volta" 
                                value={this.state.coverage_end}
                                onChange={this.handleChangecoverageEnd}
                                />


                            
                        </Col>
                        <Col lg="4">
                            <Button
                                variant="primary" 
                                size="lg" 
                                type="button"
                                onClick={() => search(this.state)}
                                
                            >
                                Fazer contação
                            </Button>
                        </Col>
                    </Row>
    
                </Form>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    destinations: state.destinationsList.destinations,
    dataSearch: state.dataSearch
});
const mapDispatchToProps = dispatch => bindActionCreators({getAllDestinations, search}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent)


