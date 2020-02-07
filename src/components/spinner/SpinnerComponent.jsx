import React from 'react'
import { Spinner } from 'react-bootstrap'

export default () => {
    return (
        <div style={{'text-align': 'center'}}>
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    )
}