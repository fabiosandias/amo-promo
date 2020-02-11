import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import FormComponent from '../form-component/FormComponent';


class SearchFormComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <React.Fragment>
                <hr className="my-4"></hr>
                <Container>
                    <h2>Faça aqui sua contação de seguro viagem! </h2>
                </Container>

                <hr className="my-4"></hr>

                <FormComponent />
            </React.Fragment>
        )
    }
}


export default SearchFormComponent;
