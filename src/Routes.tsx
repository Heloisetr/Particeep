import { Route, Switch } from 'react-router-dom';
import React from 'react';

import Dashboard from 'containers/DashboardContainer';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Dashboard} />    
  </Switch>
);

export default Routes;
