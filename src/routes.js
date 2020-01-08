import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ListingPage from './Containers/ListingPage';
import Checkout from './Containers/CheckoutPage';

export default (
  <Switch>
    <Route path='/' exact component={ListingPage} />
    <Route path='/checkout' component={Checkout} />
  </Switch>
);
