import React from 'react'
import { Alert } from 'react-bootstrap'
export default (props) => {
    return (
        <Alert variant="danger">
            <Alert.Heading>{props.title}</Alert.Heading>
            <p>{props.message}</p>
        </Alert>
    );
}
