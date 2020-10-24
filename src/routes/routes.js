import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AlternativeCVContainer from '../components/alternativecv';

export default (
    <Switch>
      <Route exact path="/" component="" />
      <Route path="/alternativecv" component={AlternativeCVContainer} />
    </Switch>
  );