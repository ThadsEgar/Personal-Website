import React from 'react';
import {Switch, Route} from 'react-router-dom';

//components
import ContentLanding from './ContentLanding';
import ContentAbout from './ContentAbout';
import ContentContact from './ContentContact';

const Router = () => (
<Switch>
  <Route exact path="/Personal-Website/" component={ContentLanding} />
  <Route path="/ContentAbout" component={ContentAbout} />
  <Route path="/ContentContact" component={ContentContact} />
</Switch>
)

export default Router;
