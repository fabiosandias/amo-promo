import React, { Component } from 'react'
import { Container, Col, Button, Row } from 'react-bootstrap'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { saveSelectedProduct, saveCombineProduct } from '../../../store/search-result/action-search-result'
import { Redirect } from 'react-router-dom';

class SearchResult extends Component {

    constructor(props) {
        super(props)

        this.state = {
            combineSearchResult: [],
            selectedSearchResult: [],
            isRedirect: false
        }

        this.handlesChangeCombineSearchResult = this.handlesChangeCombineSearchResult.bind(this);
        this.handlesChangeSelectedSearchResult = this.handlesChangeSelectedSearchResult.bind(this);
        this.redirect = this.redirect.bind(this);
    }

    handlesChangeCombineSearchResult(searchResult) {
        this.setState({ combineSearchResult: searchResult })
    }

    handlesChangeSelectedSearchResult(selected) {
        this.setState({ selectedSearchResult: selected })
    }

    setIsRedirect = () => {
        this.setState({isRedirect: true})
    }

    redirect = () => {
        if (this.state.isRedirect)
            return <Redirect push={true} to="/checkout" />
    }



    render() {
        const combineProduct = [];
        if (this.props.result.length > 0 && this.props.products.length > 0) {
            this.props.result.forEach((res, i) => {
                combineProduct[i] = { ...this.props.products.find(product => product.id == res.product_id), ...res };
            });
        }

        return (
            <React.Fragment>
                {this.redirect()}
                {combineProduct.map((result) =>
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
                                        variant="success"
                                        type="button"
                                        onClick={() => {
                                            const { saveSelectedProduct } = this.props;
                                            saveSelectedProduct(result);
                                            this.setIsRedirect()
                                        }}
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
}

const mapStateToProps = state => ({
    result: state.searchResult.result,
    products: state.searchResult.products
});

const mapDispatchToProps = dispatch => bindActionCreators({ saveSelectedProduct, saveCombineProduct }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult)
