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

                {this.combineSearchResult().map((result) =>
                    <div key={result.id}>
                        <Container>
                            <Row>
                                <Col>
                                    <strong>{result.name}</strong>
                                    <p>Preço por adulto: R$ <strong>{result.elder_net_price}</strong></p>
                                </Col>
                                <Col>
                                    <strong>Benenfício</strong>
                                    <p>R$ {result.exchange_rate}</p>
                                </Col>
                                <Col>
                                    <strong>Malas e despesas médica</strong>
                                    {result.coverages ? result.coverages.map(coverage => <p key={coverage.coverage_id + '-'}>{coverage.display_name_ptbr}</p>) : []}
                                </Col>

                                <Col>
                                    <Button
                                        variant="primary"
                                        type="button"
                                    >
                                        Comprar
                                    </Button>
                                </Col>
                            </Row>

                        </Container>
                    </div>
                )}
            </React.Fragment>
        )
    }

    combineSearchResult() {
        const combineProduct = [];

        debugger;
        if (this.props.result.length > 0 && this.props.products.length > 0) {
            this.props.result.forEach((res, i) => {
                combineProduct[i] = { ...this.props.products.find(product => product.id == res.product_id), ...res };
            });
        } else {
            return []
        }
           

        
        console.log(combineProduct)
        return combineProduct;
    }
}

const mapStateToProps = state => ({
    result: state.searchResult.result,
    products: state.searchResult.products
});
// const mapDispatchToProps = dispatch => bindActionCreators({getAllDestinations, search}, dispatch)

export default connect(mapStateToProps)(SearchResult)
