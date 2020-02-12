import React, { Component } from 'react'
import { Container, Col, Button, Row } from 'react-bootstrap'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SearchResult extends Component {

    constructor(props) {
        super(props)

        this.combineSearchResult = this.combineSearchResult.bind(this);
    }


    render() {
        return (
            <React.Fragment>

                { this.combineSearchResult().map((result) => 
                    <Container>
                    <Row>
                        <Col>1 of 3</Col>
                        <Col>2 of 3 (wider)</Col>
                        <Col>3 of 3</Col>
                        <Col>3 of 3</Col>
                        <Col>3 of 3</Col>
                    </Row>
                    
                    </Container>
               
                    
                    )}
                
                
            </React.Fragment>
        )
    }

    combineSearchResult() {
        const combineProduct = []
        this.props.result.forEach((res, i) => {
            combineProduct.push({...this.props.products.find(product => product.id == res.product_id).map(p => p, []),...res});
        });

        debugger;
        return combineProduct;
    }
}

const mapStateToProps = state => ({
    result: state.searchResult.result,
    products: state.searchResult.products
});
// const mapDispatchToProps = dispatch => bindActionCreators({getAllDestinations, search}, dispatch)

export default connect(mapStateToProps)(SearchResult)
