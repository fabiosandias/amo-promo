import React from 'react'
import { Router, Route, Redirect } from 'react-router';
import { createBrowserHistory } from "history";
import SearchFormComponent from '../search-form-component/SearchFormComponent';
import HomeComponent from '../home-component/HomeComponent';
import CheckoutComponent from '../checkout-component/CheckoutComponent'

const customHistory = createBrowserHistory();

export default props =>  {
    return (
        <Router history={customHistory} >
            <Route path="/search" component={SearchFormComponent} />
            <Route path="/home" component={HomeComponent} />
            <Route path="/checkout" component={CheckoutComponent} />
        </Router>
    )
}
